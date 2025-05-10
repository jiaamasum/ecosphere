export const dynamic = 'force-dynamic';

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { role: true },
  });

  if (dbUser?.role !== "user") {
    return redirect("/unauthorized");
  }

  // Fetch all orders for the user
  const orders = await prisma.order.findMany({
    where: { userId: user.id },
    include: {
      product: {
        select: { name: true, productFile: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold text-lg">{order.product?.name ?? "Product"}</div>
                <div className="text-sm text-gray-500">Order ID: {order.id}</div>
                <div className="text-sm text-gray-500">Status: {order.status}</div>
              </div>
              <a
                href={order.product?.productFile}
                className="mt-4 md:mt-0 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Asset
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 
