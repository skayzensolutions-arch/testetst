import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be less than 10MB' }, { status: 400 })
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Only JPEG, PNG, and WebP images are allowed' }, { status: 400 })
    }

    console.log('[v0] Uploading image:', file.name, file.type, `${(file.size / 1024).toFixed(2)}KB`)

    // Upload to Vercel Blob
    const blob = await put(`portfolio/${Date.now()}-${file.name}`, file, {
      access: 'public',
    })

    console.log('[v0] Image uploaded successfully:', blob.url)

    return NextResponse.json({ url: blob.url })
  } catch (error: any) {
    console.error('[v0] Error uploading image:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to upload image. Please try again.' }, 
      { status: 500 }
    )
  }
}
