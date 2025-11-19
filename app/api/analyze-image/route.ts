import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { imageUrl } = await request.json()

    if (!imageUrl) {
      return Response.json({ error: "Image URL is required" }, { status: 400 })
    }

    const { text } = await generateText({
      model: "openai/gpt-4o",
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
  } catch (error) {
    console.error("Error analyzing image:", error)
    return Response.json(
      { error: "Failed to analyze image" },
      { status: 500 }
    )
  }
}
