import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { imageUrl } = await request.json()

    if (!imageUrl) {
      return Response.json({ error: "Image URL is required" }, { status: 400 })
    }

    console.log("[v0] Analyzing image with AI:", imageUrl)

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "You are analyzing a paver installation project photo for Skylight Paver Solutions, a professional paver company in Jacksonville, FL. Analyze this image and provide: 1) A professional project title (5-8 words), 2) A detailed description (20-30 words) highlighting the paver work, design, and quality. Format your response as JSON with 'title' and 'description' fields.",
            },
            {
              type: "image",
              image: imageUrl,
            },
          ],
        },
      ],
    })

    console.log("[v0] AI analysis result:", text)

    // Parse the AI response
    const analysisMatch = text.match(/\{[\s\S]*"title"[\s\S]*"description"[\s\S]*\}/)
    if (analysisMatch) {
      const analysis = JSON.parse(analysisMatch[0])
      return Response.json(analysis)
    }

    // Fallback if JSON parsing fails
    return Response.json({
      title: "Professional Paver Installation",
      description: "High-quality paver work showcasing expert craftsmanship and attention to detail.",
    })
  } catch (error: any) {
    console.error("[v0] Error analyzing image:", error)

    return Response.json(
      {
        error: "Failed to analyze image",
        details: error?.message || String(error),
        fallback: {
          title: "Beautiful Paver Installation",
          description: "Premium paver installation featuring quality craftsmanship and professional design.",
        },
      },
      { status: 500 },
    )
  }
}
