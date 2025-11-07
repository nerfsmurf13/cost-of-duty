# GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Trigger Deployment

The workflow will automatically run when you:
- Push to the `main` or `master` branch
- Manually trigger it from the Actions tab

### 3. Access Your Site

Once deployed, your site will be available at:
```
https://[your-username].github.io/cost-of-duty/
```

## How It Works

The deployment workflow:
1. Checks out the repository
2. Sets up Node.js 14 (compatible with legacy webpack dependencies)
3. Installs dependencies with `npm ci --legacy-peer-deps`
4. Builds the project with `npm run build`
5. Deploys the `dist` folder to GitHub Pages

Note: The project uses dart-sass (sass) instead of the deprecated node-sass for better CI/CD compatibility.

## Configuration

### Base Path
The app is configured to run at `/cost-of-duty/` path. This is set in:
- `config/index.js` - `assetsPublicPath`

### Router Mode
The Vue Router uses **hash mode** (`/#/`) to ensure routing works on GitHub Pages without server-side configuration.

## Troubleshooting

### Build Fails
- The project uses Node.js 14 for compatibility with webpack 3
- The build uses `--openssl-legacy-provider` flag for OpenSSL compatibility
- Uses dart-sass (sass) for SCSS compilation instead of deprecated node-sass

### 404 Errors
- Make sure GitHub Pages is set to use **GitHub Actions** as the source
- Check that the base path in `config/index.js` matches your repository name

### API Issues
- The app uses a CORS proxy to access the Call of Duty API
- If the proxy is down, you may need to update the `corsProxy` URL in `src/pages/TestPlayer.vue`
