# Admin Panel Credentials

**IMPORTANT: Keep this file secure and do not share publicly!**

## Login Information

- **Admin URL**: `/admin`
- **Username**: `skylight_admin`
- **Password**: `SkyP@v3r2024!Secure`

## Security Features

✅ **SQL Injection Protection**: All database queries use Supabase's parameterized query methods (`.eq()`, `.insert()`, `.update()`, `.delete()`) which automatically sanitize inputs and prevent SQL injection attacks.

✅ **Secure Authentication**: Username and password combination with session-based authentication stored in browser sessionStorage.

✅ **Strong Password**: Complex password with uppercase, lowercase, numbers, and special characters.

## Features Implemented

1. **Portfolio Management**
   - Add, edit, delete, and reorder portfolio projects
   - All changes persist permanently in Supabase database
   - Real-time updates on both portfolio page and homepage gallery

2. **AI-Powered Image Analysis**
   - Upload an image and AI automatically generates:
     - Professional project title
     - Detailed description
   - Uses GPT-4 Vision API to analyze paver work in photos

3. **SEO Management**
   - Edit meta titles, descriptions, and keywords
   - AI-powered SEO suggestions
   - Automatic sitemap generation
   - SEO health monitoring

4. **Image Upload**
   - Direct file upload with preview
   - Permanent storage via Vercel Blob
   - Automatic URL generation

## Troubleshooting

If you see black images on the portfolio page, they should now display correctly with the `unoptimized` prop added to Next.js Image components.

## Recommended: Change Credentials

For maximum security, consider:
1. Implementing proper backend authentication with JWT tokens
2. Moving credentials to environment variables
3. Adding rate limiting to prevent brute force attacks
4. Implementing 2FA (Two-Factor Authentication)
