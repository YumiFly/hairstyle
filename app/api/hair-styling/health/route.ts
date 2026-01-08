import { NextResponse } from "next/server"

export async function GET() {
  const microserviceUrl = process.env.HAIR_STYLING_MICROSERVICE_URL

  if (microserviceUrl) {
    try {
      const response = await fetch(`${microserviceUrl}/health`)
      if (response.ok) {
        return NextResponse.json({ status: "connected", microservice: true })
      }
    } catch {
      return NextResponse.json({ status: "disconnected", microservice: false })
    }
  }

  return NextResponse.json({ status: "demo", microservice: false })
}
