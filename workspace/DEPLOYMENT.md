# GitHub Pages Deployment Setup

## Automatic Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment configuration"
   git push origin main
   ```

3. **The site will be automatically deployed to:**
   - If using custom domain: `https://symplyapp.cloud`
   - If using GitHub Pages domain: `https://sam-waugh.github.io/symplyapp.cloud`

### Manual Deployment

If you want to deploy manually, you can use:

```bash
npm run deploy
```

### Configuration Details

- **GitHub Actions Workflow**: `.github/workflows/deploy.yml`
- **Base href**: Set to `/symplyapp.cloud/` for GitHub Pages
- **Static generation**: Configured for client-side only (no SSR)
- **Custom domain**: Configured via `CNAME` file
- **SPA routing**: Handled via `404.html` redirect

### Domain Configuration

If you own the domain `symplyapp.cloud`:

1. Configure your DNS provider to point to GitHub Pages:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME record pointing to: `sam-waugh.github.io`

2. The `CNAME` file in the `public` folder will handle the custom domain mapping.

### Troubleshooting

- Ensure your repository is public (or you have GitHub Pro for private repo pages)
- Check the Actions tab for any deployment errors
- Verify the base href matches your repository name
- Make sure the `dist/symply-coming-soon/browser` directory is being built correctly
