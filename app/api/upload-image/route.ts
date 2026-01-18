import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Always return JSON with proper headers
  const jsonResponse = (data: object, status = 200) => {
    return NextResponse.json(data, { 
      status,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    // Check if BLOB token is configured
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error('[v0] BLOB_READ_WRITE_TOKEN is not configured')
      return jsonResponse({ error: 'Image storage is not configured. Please contact support.' }, 500)
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return jsonResponse({ error: 'No file provided' }, 400)
    }

    if (file.size > 10 * 1024 * 1024) {
      return jsonResponse({ error: 'File size must be less than 10MB' }, 400)
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return jsonResponse({ error: 'Only JPEG, PNG, and WebP images are allowed' }, 400)
    }

    console.log('[v0] Uploading image:', file.name, file.type, `${(file.size / 1024).toFixed(2)}KB`)

    // Sanitize filename - remove special characters
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')

    // Upload to Vercel Blob
    const blob = await put(`portfolio/${Date.now()}-${sanitizedName}`, file, {
      access: 'public',
    })

    console.log('[v0] Image uploaded successfully:', blob.url)

    return jsonResponse({ url: blob.url, success: true })
  } catch (error: any) {
    console.error('[v0] Error uploading image:', error)
    
    // Check for specific Vercel Blob errors
    if (error?.message?.includes('No token found') || error?.message?.includes('BLOB_READ_WRITE_TOKEN')) {
      return jsonResponse({ error: 'Image storage is not configured. Please check Blob integration.' }, 500)
    }
    
    return jsonResponse({ error: error?.message || 'Failed to upload image. Please try again.' }, 500)
  }
}
