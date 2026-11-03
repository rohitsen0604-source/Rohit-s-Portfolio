import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // In production, this can forward to SendGrid / Resend / AWS SES.
    console.log('[Contact Message Received]', { name, email, subject, message, timestamp: new Date().toISOString() });

    return NextResponse.json(
      { success: true, message: 'Your message has been delivered successfully. Rohit Sen will respond promptly.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error processing contact request.' },
      { status: 500 }
    );
  }
}

