# Automatic Deployment Setup Guide

This project is configured to automatically deploy to Hostinger when you push changes to the `main` branch.

## Prerequisites

You need the following information from Hostinger:
1. FTP Server address (e.g., `ftp.yourdomain.com`)
2. FTP Username
3. FTP Password

**Note:** Never commit your actual credentials to git. Add them as GitHub Secrets instead.
## Setup Instructions

### Step 1: Get Your Hostinger FTP Credentials

1. Log in to your Hostinger control panel (hPanel)
2. Go to **Files** → **FTP Accounts**
3. Note down:
   - **FTP Server/Host** (e.g., `ftp.yourdomain.com` or IP address)
   - **Username** (usually your main account username)
   - **Password** (if you don't have it, create a new FTP account or reset password)

### Step 2: Add Secrets to GitHub Repository

1. Go to your GitHub repository: `https://github.com/mahiabhinav5-cyber/AI_Automation`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following three secrets:

   **Secret 1: FTP_SERVER**
   - Name: `FTP_SERVER`
   - Value: Your FTP server address (e.g., `ftp.yourdomain.com`)

   **Secret 2: FTP_USERNAME**
   - Name: `FTP_USERNAME`
   - Value: Your FTP username

   **Secret 3: FTP_PASSWORD**
   - Name: `FTP_PASSWORD`
   - Value: Your FTP password

### Step 3: Test the Deployment

Once secrets are configured:

1. Make any small change to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Test automatic deployment"
   git push origin main
   ```
3. Go to **Actions** tab in your GitHub repository
4. Watch the deployment workflow run
5. Check your website at your Hostinger domain

## How It Works

- **Trigger**: Automatic deployment runs on every push to `main` branch
- **Build**: GitHub Actions builds your React app using `npm run build`
- **Deploy**: The `dist` folder is uploaded to Hostinger's `public_html` directory via FTP
- **Time**: Typically completes in 2-5 minutes

## Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab in GitHub
2. Select **Build and Deploy to Hostinger** workflow
3. Click **Run workflow** → **Run workflow**

## Troubleshooting

### Deployment Fails
- Verify your FTP credentials are correct in GitHub Secrets
- Check if `public_html` directory exists in your Hostinger account
- Review the Actions logs for specific error messages

### Files Not Showing on Website
- Clear browser cache
- Check if the correct directory path is set in the workflow
- Verify FTP upload was successful in Actions logs

### Need to Change Deployment Directory?
Edit `.github/workflows/deploy.yml` and change the `server-dir` value:
```yaml
server-dir: ./your-directory-name/
```

## Support

If you encounter issues:
1. Check the GitHub Actions logs for error details
2. Verify Hostinger FTP service is active
3. Test FTP connection using an FTP client like FileZilla
