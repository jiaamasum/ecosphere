import { Card } from "@/components/ui/card";

import { SellForm } from "../components/form/Sellform";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: { id: userId },
    select: { stripeConnectedLinked: true, role: true },
  });
  return data;
}

export default async function SellRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const data = await getData(user.id);

  // Restrict to sellers only
  if (data?.role !== "seller") {
    return redirect("/unauthorized");
  }

  if (data?.stripeConnectedLinked === false) {
    return redirect("/billing");
  }

  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: {
      product: {
        select: { name: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <SellForm />
      </Card>
    </section>
  );
}
