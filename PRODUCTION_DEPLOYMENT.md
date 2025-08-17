# Production Deployment Guide for Paint Hill Website

## Prerequisites

1. Ensure all environment variables are properly set
2. Test all forms locally before deployment
3. Verify Supabase functions are deployed and working

## Environment Variables

The production environment uses the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://srjlxzbxmnzogdsqrmdf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=https://painthill.in
```

## Pre-Deployment Checklist

- [ ] All environment variables are set in `.env.production`
- [ ] Supabase functions are deployed and tested
- [ ] Database migrations are applied
- [ ] Forms are tested with production endpoints
- [ ] Error handling is working properly
- [ ] Analytics tracking is configured (if applicable)

## Build and Deploy

### 1. Build for Production

```bash
npm run build
```

This will:
- Optimize the code for production
- Generate static pages
- Create the `out` directory for deployment

### 2. Test Production Build Locally

```bash
npm run start
```

Visit http://localhost:3000 and test:
- Contact form submission
- Quote request form submission
- All page navigation
- Mobile responsiveness

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

Or manually:

```bash
npm run build
npm run export
git add out/
git commit -m "Deploy to GitHub Pages"
git push
```

## Production Features

### 1. Form Submissions

Both contact and quote forms now:
- Submit directly to Supabase Edge Functions
- Include session tracking
- Have proper error handling
- Show user-friendly error messages
- Log errors to console for debugging

### 2. Security Features

- Environment variables are validated on load
- CORS is handled by Supabase Edge Functions
- Anonymous keys are used (never expose service keys)
- All submissions include metadata for tracking

### 3. Error Handling

The production code includes:
- Network error detection
- User-friendly error messages
- Fallback error handling
- Console logging for debugging

## Monitoring

### Check Function Logs

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/srjlxzbxmnzogdsqrmdf)
2. Navigate to Functions
3. View logs for:
   - `submit-message`
   - `submit-quote`

### Database Monitoring

1. Check the `messages` table for contact form submissions
2. Check the `quotes` table for quote requests
3. Monitor for any failed submissions

## Troubleshooting

### Form Not Submitting

1. Check browser console for errors
2. Verify environment variables are loaded:
   ```javascript
   console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
   ```
3. Check network tab for failed requests
4. Verify Supabase functions are running

### CORS Errors

The Edge Functions include CORS headers. If you still get CORS errors:
1. Check the function deployment
2. Verify the domain is correct
3. Check Supabase dashboard for function errors

### Environment Variables Not Loading

1. Ensure `.env.local` or `.env.production` exists
2. Restart the Next.js server after changing env files
3. Variables must start with `NEXT_PUBLIC_` to be available in browser

## Post-Deployment

1. Test form submissions on production
2. Monitor Supabase logs for first 24 hours
3. Set up alerts for function failures (optional)
4. Regular backup of submissions data

## Rollback Plan

If issues occur:

1. Previous static build is in Git history
2. Revert to previous commit:
   ```bash
   git revert HEAD
   npm run deploy
   ```
3. Functions can be rolled back in Supabase dashboard

## Support

For issues:
1. Check Supabase function logs
2. Review browser console errors
3. Check network requests in browser DevTools
4. Contact support with error details