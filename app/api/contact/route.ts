import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Log the submission (in production, you'd send this to an email service or CRM)
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company,
      role: body.role,
      companySize: body.companySize,
      services: body.services,
      urgency: body.urgency,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: In production, integrate with:
    // - Email service (SendGrid, Postmark, etc.)
    // - CRM (HubSpot, Pipedrive, etc.)
    // - Notification service (Slack, Discord, etc.)

    // For now, just return success
    // In production, you'd want to actually send the email/notification before returning success

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}
