# Quick setup script for GitHub deployment
# Run this in PowerShell from your project directory

Write-Host "🚀 Setting up Git repository for GitHub deployment..." -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
}

# Add all files
Write-Host "Adding files to Git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Portfolio ready for Azure deployment"

Write-Host ""
Write-Host "🎯 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub.com named 'trainer-portfolio'"
Write-Host "2. Copy your GitHub repository URL"
Write-Host "3. Run these commands:"
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/trainer-portfolio.git" -ForegroundColor White
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "4. Then follow the Azure deployment guide in 'azure-deployment-guide.md'" -ForegroundColor Green
Write-Host ""
Write-Host "✅ Git setup complete! Your portfolio is ready for deployment." -ForegroundColor Green