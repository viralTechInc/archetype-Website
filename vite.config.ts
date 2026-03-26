import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const slackPath = (env.SLACK_WEBHOOK_PATH || '').trim()

  const proxy =
    slackPath !== ''
      ? {
          '/api/slack-contact': {
            target: 'https://hooks.slack.com',
            changeOrigin: true,
            rewrite: () => (slackPath.startsWith('/') ? slackPath : `/${slackPath}`),
            secure: true,
          },
        }
      : undefined

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    assetsInclude: ['**/*.svg', '**/*.csv'],
    server: proxy ? { proxy } : {},
  }
})
