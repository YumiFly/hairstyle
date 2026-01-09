// python main.py --face_path=6.png --shape_path=7.png --color_path=8.png --input_dir=input --result_path=output/result.png

export interface HairStylingRequest {
  faceImage: string // Base64 encoded face image
  hairstyleImage?: string // Base64 encoded hairstyle reference image
  hairColor?: string // Hex color code
}

export interface HairStylingResponse {
  success: boolean
  resultImage?: string // Base64 encoded result image
  error?: string
  processingTime?: number
}

const API_BASE_URL = process.env.NEXT_PUBLIC_HAIR_STYLING_API_URL!

export async function generateHairStyle(request: HairStylingRequest): Promise<HairStylingResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        face_image: request.faceImage,
        hairstyle_image: request.hairstyleImage,
        hair_color: request.hairColor,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    return {
      success: true,
      resultImage: data.result_image,
      processingTime: data.processing_time,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

// export async function checkServiceHealth(): Promise<boolean> {
//   try {
//     const response = await fetch(`${API_BASE_URL}/health`, { cache: "no-store" })
//     return response.ok
//   } catch {
//     return false
//   }
// }
