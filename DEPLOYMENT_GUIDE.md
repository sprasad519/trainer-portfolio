# GitHub Repository Setup for Trainer Portfolio

## Steps to create GitHub repository:

1. **Go to GitHub.com** and sign in to your account

2. **Create a new repository:**

   - Click the "+" icon in the top right
   - Select "New repository"
   - Repository name: `trainer-portfolio`
   - Description: `Professional Microsoft Certified Trainer Portfolio - Sivaprasad G`
   - Set as Public (so it can be hosted on Azure Static Web Apps for free)
   - Don't initialize with README (we already have one)

3. **Copy the repository URL** (it will look like: `https://github.com/YOUR_USERNAME/trainer-portfolio.git`)

4. **Run these commands in your terminal:**

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/trainer-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## After GitHub setup, proceed to Azure hosting setup below.

---

# Azure Static Web Apps Deployment

## Option 1: Azure Static Web Apps (Recommended - Free tier available)

1. **Go to Azure Portal** (portal.azure.com)
2. **Create a new Static Web App:**

   - Search for "Static Web Apps" in the search bar
   - Click "Create"
   - Select your subscription and resource group (or create new)
   - Name: `trainer-portfolio-spa`
   - Plan type: `Free`
   - Region: Choose closest to your location
   - Source: `GitHub`
   - Connect to your GitHub repository
   - Branch: `main`
   - Build presets: `React`
   - App location: `/` (root)
   - Build location: `dist`

3. **Azure will automatically:**
   - Create a GitHub Actions workflow
   - Deploy your site
   - Provide you with a URL like: `https://wonderful-sea-xyz.azurestaticapps.net`

## Option 2: Azure App Service (Alternative)

1. **Go to Azure Portal** (portal.azure.com)
2. **Create a new App Service:**

   - Search for "App Service"
   - Click "Create"
   - Resource Group: Create new or select existing
   - Name: `trainer-portfolio-app` (must be globally unique)
   - Runtime stack: `Node.js 18 LTS`
   - Operating System: `Linux`
   - Region: Choose closest to your location
   - Pricing tier: `F1 Free` for testing

3. **Deploy using GitHub Actions or manual deployment**

## Recommended: Use Azure Static Web Apps for this React project as it's:

- Free tier available
- Optimized for static sites and SPAs
- Built-in CI/CD with GitHub
- Global CDN included
- Easy custom domain setup

## After deployment:

- Your portfolio will be live at the provided URL
- Any future commits to the main branch will automatically redeploy
- You can set up a custom domain later if needed

## Need help?

Run these commands to get started:

1. First, push to GitHub using the commands above
2. Then follow the Azure Static Web Apps creation steps
