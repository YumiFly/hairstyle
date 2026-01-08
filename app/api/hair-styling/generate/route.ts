import { type NextRequest, NextResponse } from "next/server"

// This will proxy requests to the Python microservice when deployed

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { face_image, hairstyle_image, hair_color } = body

    if (!face_image) {
      return NextResponse.json({ error: "Face image is required" }, { status: 400 })
    }

    // Check if external microservice URL is configured
    const microserviceUrl = process.env.HAIR_STYLING_MICROSERVICE_URL

    if (microserviceUrl) {
      const response = await fetch(`${microserviceUrl}/process`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          face_path: face_image,
          shape_path: hairstyle_image,
          color_path: hair_color,
        }),
      })

      if (!response.ok) {
        throw new Error("Microservice processing failed")
      }

      const result = await response.json()
      return NextResponse.json({
        result_image: result.result_image,
        processing_time: result.processing_time,
      })
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return NextResponse.json({
      result_image: face_image, // Return original image as placeholder
      processing_time: 2.0,
      message: "Demo mode - connect microservice for real processing",
    })
  } catch (error) {
    console.error("Hair styling API error:", error)
    return NextResponse.json({ error: "Processing failed" }, { status: 500 })
  }
}
