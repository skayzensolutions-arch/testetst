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
              text: 'Describe this paver project in 1-2 short sentences. Be direct and natural - mention what you see (pool deck, driveway, patio, walkway), the paver style/color if visible, and location details. Include keywords like \'paver installation\', \'Jacksonville\', or \'Florida\'. Keep it under 25 words total. Also suggest a simple 4-6 word title. Return as JSON: {"title": "...", "description": "..."}',
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
      title: "Paver Installation Project",
      description: "Custom paver work in Jacksonville, Florida.",
    })
  } catch (error: any) {
    console.error("[v0] Error analyzing image:", error)

    return Response.json(
      {
        error: "Failed to analyze image",
        details: error?.message || String(error),
        fallback: {
          title: "Paver Installation",
          description: "Quality paver work in Jacksonville, FL.",
        },
      },
      { status: 500 },
    )
  }
}
