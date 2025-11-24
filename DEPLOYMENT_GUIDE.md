# Deployment Guide - Fixing 404 NOT_FOUND Errors

## Issues Fixed

### 1. **Removed Unused Server-Only Import**
- **File**: `components/Contact.tsx`
- **Issue**: Importing `Resend` in a client component
- **Fix**: Removed the unused import

### 2. **Added GET Handlers to API Routes**
- **Files**: `app/api/contact/route.ts`, `app/api/quote/route.ts`
- **Issue**: API routes only handled POST requests, returning 404 for GET
- **Fix**: Added GET handlers that return 405 Method Not Allowed

### 3. **Safe Resend Initialization**
- **Files**: Both API routes
- **Issue**: Resend initialization could fail if API key is missing
- **Fix**: Added try-catch and null checks

### 4. **Added Next.js Configuration**
- **File**: `next.config.js`
- **Issue**: Empty configuration
- **Fix**: Added CORS headers for API routes

### 5. **Added Vercel Configuration**
- **File**: `vercel.json`
- **Issue**: No Vercel-specific configuration
- **Fix**: Added proper function configuration

## Deployment Steps for Vercel

### Step 1: Set Environment Variables

In your Vercel dashboard, add these environment variables:

```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=vsbharaniram5@gmail.com
```

**Important**: Without `RESEND_API_KEY`, emails won't be sent, but the forms will still work and log submissions to console.

### Step 2: Deploy

```bash
# Option 1: Deploy via Git (Recommended)
git add .
git commit -m "Fix 404 errors and add proper API route handling"
git push

# Option 2: Deploy via Vercel CLI
npm i -g vercel
vercel --prod
```

### Step 3: Verify Deployment

After deployment, test these URLs:

1. **Homepage**: `https://your-domain.vercel.app/`
2. **Contact Page**: `https://your-domain.vercel.app/contact`
3. **API Health Check (GET)**: `https://your-domain.vercel.app/api/contact`
   - Should return: `{"error":"Method not allowed","message":"..."}`
   - Status: 405

4. **API POST Test**:
```bash
curl -X POST https://your-domain.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## Common Issues & Solutions

### Issue: Still Getting 404 on Vercel

**Possible Causes:**
1. **Build failed** - Check Vercel build logs
2. **Environment variables missing** - Add `RESEND_API_KEY` in Vercel dashboard
3. **Cache issue** - Redeploy or clear Vercel cache
4. **Wrong URL** - Ensure you're using the correct deployment URL

**Solutions:**
```bash
# Force a new deployment
vercel --prod --force

# Check build logs
vercel logs your-deployment-url
```

### Issue: Forms Submit But No Email Received

**Cause**: `RESEND_API_KEY` not set or invalid

**Solution**:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `RESEND_API_KEY` with your Resend API key
3. Redeploy the application

### Issue: CORS Errors

**Cause**: Missing CORS headers

**Solution**: Already fixed in `next.config.js`. If still occurring:
1. Clear browser cache
2. Redeploy application
3. Check if you're using a custom domain (may need DNS propagation time)

## Testing Locally

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test in browser
# Visit: http://localhost:3000
# Test contact form
# Check console for logs
```

## API Route Structure

```
app/
├── api/
│   ├── contact/
│   │   └── route.ts    ← Handles /api/contact
│   └── quote/
│       └── route.ts    ← Handles /api/quote
```

Each route exports:
- `GET()` - Returns 405 Method Not Allowed
- `POST()` - Handles form submissions

## Environment Variables

### Required
- `RESEND_API_KEY` - Your Resend API key for sending emails

### Optional
- `CONTACT_EMAIL` - Email address to receive form submissions (default: vsbharaniram5@gmail.com)

## Monitoring

After deployment, monitor:

1. **Vercel Dashboard** - Check deployment status and logs
2. **Runtime Logs** - View function execution logs
3. **Analytics** - Monitor form submission success rates

## Rollback Plan

If deployment fails:

```bash
# Rollback to previous deployment in Vercel Dashboard
# Or redeploy a specific commit
vercel --prod --force --git-branch=main
```

## Support

If issues persist:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Test API routes directly using curl or Postman
4. Check browser console for client-side errors

## Changes Made Summary

✅ Removed unused `Resend` import from client component  
✅ Added GET handlers to prevent 404 on API routes  
✅ Added safe Resend initialization with error handling  
✅ Added Next.js configuration with CORS headers  
✅ Added Vercel configuration for optimal deployment  
✅ Forms now work even without Resend API key (logs to console)  

## Next Steps

1. **Deploy to Vercel**
2. **Add environment variables** in Vercel dashboard
3. **Test all forms** on the deployed site
4. **Monitor logs** for any issues
5. **Set up custom domain** (optional)

---

**Last Updated**: November 2, 2025  
**Status**: Ready for deployment ✅
