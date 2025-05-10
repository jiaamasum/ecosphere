import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/db';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
  }

  try {
    await prisma.newsletter_subscriber.create({
      data: { email },
    });
    return NextResponse.json({ message: 'Thank you for subscribing!' }, { status: 200 });
  } catch (error: any) {
    if (error.code === 'P2002' || error.message.includes('Unique constraint')) {
      return NextResponse.json({ error: 'You are already subscribed!' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}