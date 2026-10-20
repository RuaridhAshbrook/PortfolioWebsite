// OPTIONAL: AWS Lambda handler that receives the contact form and emails you via Amazon SES.
// Runtime: Node.js 20+ (the AWS SDK v3 is already included, nothing to install).
//
// Environment variables to set on the Lambda:
//   TO_EMAIL    - where messages are delivered (must be verified in SES while in sandbox)
//   FROM_EMAIL  - a sender address verified in SES (can be the same as TO_EMAIL)
//   ALLOW_ORIGIN - your site, e.g. https://www.example.com (use * only while testing)
//
// Put it behind a Lambda Function URL or API Gateway and set the
// VITE_CONTACT_ENDPOINT build variable on the client to that URL.
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const ses = new SESClient({})

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': process.env.ALLOW_ORIGIN || '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
}

const reply = (statusCode, body) => ({ statusCode, headers, body: JSON.stringify(body) })

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod
  if (method === 'OPTIONS') return reply(204, {})
  if (method !== 'POST') return reply(405, { error: 'Method not allowed' })

  let data
  try {
    data = JSON.parse(event.body || '{}')
  } catch {
    return reply(400, { error: 'Invalid request' })
  }

  // Spam trap: real visitors never fill this in. Pretend success.
  if (data.website) return reply(200, { ok: true })

  const name = String(data.name || '').trim()
  const email = String(data.email || '').trim()
  const message = String(data.message || '').trim()

  if (!name || !email || !message) return reply(400, { error: 'Please fill in every field.' })
  if (!EMAIL_RE.test(email)) return reply(400, { error: 'Please enter a valid email address.' })
  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return reply(400, { error: 'One of the fields is too long.' })
  }

  try {
    await ses.send(
      new SendEmailCommand({
        Source: process.env.FROM_EMAIL,
        Destination: { ToAddresses: [process.env.TO_EMAIL] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: `Portfolio message from ${name}`.replace(/[\r\n]/g, ' ') },
          Body: { Text: { Data: `From: ${name} <${email}>\n\n${message}` } },
        },
      }),
    )
    return reply(200, { ok: true })
  } catch (err) {
    console.error('SES error', err)
    return reply(500, { error: 'Could not send your message. Please try again later.' })
  }
}
