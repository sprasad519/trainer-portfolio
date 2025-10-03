# Deploy Portfolio to Azure Static Web Apps using GitHub

## Prerequisites

- Azure subscription (which you have)
- GitHub account
- Git installed on your computer

## Step 1: Initialize Git and Push to GitHub

1. **Initialize Git repository** (if not already done):

```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

2. **Create a new repository on GitHub**:

   - Go to GitHub.com
   - Click "New repository"
   - Name it: `trainer-portfolio`
   - Make it public or private (your choice)
   - Don't initialize with README (since you already have files)

3. **Connect local repository to GitHub**:

```bash
git remote add origin https://github.com/YOUR_USERNAME/trainer-portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Create Azure Static Web App

1. **Go to Azure Portal** (portal.azure.com)

2. **Create new resource**:

   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure the Static Web App**:

   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `sivaprasad-trainer-portfolio`
   - **Plan type**: Free (for personal projects)
   - **Region**: East Asia or Southeast Asia (closest to you)
   - **Source**: GitHub
   - **GitHub account**: Sign in to your GitHub account
   - **Organization**: Your GitHub username
   - **Repository**: `trainer-portfolio`
   - **Branch**: `main`
   - **Build Presets**: React
   - **App location**: `/` (root)
   - **Build location**: `dist`

4. **Click "Review + create"** then **"Create"**

## Step 3: Automatic Deployment Setup

Azure will automatically:

- Create a GitHub Action workflow in your repository
- Deploy your app whenever you push to the main branch
- Provide you with a live URL

## Step 4: Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your Static Web App in Azure Portal
2. Click "Custom domains"
3. Add your domain and follow the DNS configuration steps

## Step 5: Environment Variables (if needed)

If you need environment variables:

1. Go to your Static Web App in Azure Portal
2. Click "Configuration"
3. Add application settings

## GitHub Actions Workflow

Azure automatically creates `.github/workflows/azure-static-web-apps-*.yml` file in your repository. This file handles:

- Building your React app
- Deploying to Azure
- Running on every push to main branch

## Updating Your Portfolio

To update your live portfolio:

1. Make changes to your code locally
2. Commit and push to GitHub:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

3. GitHub Actions will automatically build and deploy your changes
4. Your live site will be updated in 2-3 minutes

## Troubleshooting

- **Build fails**: Check the build logs in GitHub Actions tab
- **Site not loading**: Ensure build location is set to `dist`
- **Resources not found**: Check app location is set to `/`

## Your Live URL

After deployment, your portfolio will be available at:
`https://your-app-name.azurestaticapps.net`

The exact URL will be shown in the Azure Portal under your Static Web App resource.
