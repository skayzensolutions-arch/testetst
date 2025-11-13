"use server"

export async function sendQuoteEmail(formData: {
  name: string
  email: string
  phone: string
  address: string
  service: string
  message: string
}) {
  try {
    // Email sending using a simple API endpoint
    const emailBody = `
New Quote Request from Skylight Paver Solutions Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Service: ${formData.service}
Message: ${formData.message}

---
Submitted from: https://skylightpaver.com/quote
    `.trim()

    // Using a simple fetch to send email via FormSubmit (free service)
    const response = await fetch("https://formsubmit.co/ajax/lopes@skylightpaver.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        service: formData.service,
        message: formData.message,
        _subject: `New Quote Request from ${formData.name}`,
        _template: "box",
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending quote email:", error)
    return { success: false, error: "Failed to send quote request" }
  }
}
