# Deployment Guide for Supreme Backend

This guide will help you deploy the Supreme Backend API to Vercel.

## Prerequisites

- GitHub, GitLab, or Bitbucket account
- Vercel account (sign up at https://vercel.com)
- MongoDB Atlas account for production database (https://www.mongodb.com/cloud/atlas)

## Step 1: Set Up MongoDB Atlas (Production Database)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user with username and password
4. Whitelist all IP addresses (0.0.0.0/0) for serverless access
5. Get your connection string (it should look like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/supreme?retryWrites=true&w=majority
   ```

## Step 2: Push Your Code to Git Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Refactor to MVC architecture for Vercel deployment"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/supreme.git

# Push to main/master branch
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended for first-time deployment)

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `backend` (if backend is in a subdirectory)
   - **Build Command**: Leave default or use `npm install`
   - **Output Directory**: Leave default
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to backend directory
cd backend

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? supreme-backend
# - In which directory is your code located? ./

# Add environment variables
vercel env add MONGODB_URI
# Paste your MongoDB Atlas connection string when prompted
# Select Production, Preview, and Development

# Deploy to production
vercel --prod
```

## Step 4: Verify Deployment

After deployment, you'll receive a URL like: `https://supreme-backend.vercel.app`

Test the API:

```bash
# Health check
curl https://supreme-backend.vercel.app/

# Get all users
curl https://supreme-backend.vercel.app/user
```

## Step 5: Set Up Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Vercel Configuration Explained

The `vercel.json` file configures how Vercel builds and deploys your application:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

- **builds**: Specifies that `index.js` should be built as a Node.js serverless function
- **routes**: Routes all requests to `index.js`

## Troubleshooting

### Database Connection Issues

If you're having database connection issues:

1. Check MongoDB Atlas IP whitelist includes `0.0.0.0/0`
2. Verify the `MONGODB_URI` environment variable is set correctly in Vercel
3. Check Vercel function logs: Project → Deployments → Click deployment → View Function Logs

### Function Timeout

Vercel has a 10-second timeout for Hobby plan. If requests take longer:
- Optimize database queries
- Add indexes to frequently queried fields
- Consider upgrading to Vercel Pro for 60-second timeout

### Cold Starts

First request after inactivity may be slow due to cold starts:
- This is normal for serverless functions
- Database connection pooling helps mitigate this
- Consider using Vercel's Edge Functions for critical endpoints

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| MONGODB_URI | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/supreme` |
| NODE_ENV | Node environment | `production` |
| PORT | Port number (ignored on Vercel) | `8080` |

## Continuous Deployment

Once connected to Git:
- Every push to main/master branch triggers automatic deployment
- Pull requests create preview deployments
- You can configure branch deployments in Vercel settings

## Monitoring and Logs

- **View Logs**: Vercel Dashboard → Project → Deployments → View Function Logs
- **Analytics**: Enable Vercel Analytics for performance monitoring
- **Error Tracking**: Consider integrating Sentry or similar service

## Security Checklist

Before going to production:

- [ ] Use MongoDB Atlas (not local MongoDB)
- [ ] Set strong database passwords
- [ ] Restrict MongoDB IP whitelist (if possible)
- [ ] Implement JWT authentication
- [ ] Add rate limiting
- [ ] Enable HTTPS only (automatic with Vercel)
- [ ] Sanitize user inputs
- [ ] Hash passwords (use bcrypt)
- [ ] Set up environment variables properly
- [ ] Remove console.logs in production
- [ ] Implement proper error handling

## Cost Considerations

### Vercel
- **Hobby Plan**: Free (100GB bandwidth, 100 hours serverless execution)
- **Pro Plan**: $20/month (1TB bandwidth, 1000 hours execution)

### MongoDB Atlas
- **Free Tier**: 512MB storage (sufficient for development)
- **Shared**: $9/month (2GB storage)
- **Dedicated**: Starting at $57/month

## Rollback

If a deployment has issues:

1. Go to Vercel Dashboard → Deployments
2. Find a previous working deployment
3. Click "..." → "Promote to Production"

## Support

- Vercel Documentation: https://vercel.com/docs
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com/
- Vercel Discord: https://vercel.com/discord

## Next Steps

1. Set up monitoring and error tracking
2. Implement authentication (JWT)
3. Add input validation
4. Set up automated testing
5. Create API documentation (Swagger/OpenAPI)
6. Implement rate limiting
7. Add caching where appropriate

