import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Automatically extract the repo name in GitHub Actions (e.g., "Norwil11/apecc-accounting" -> "apecc-accounting")
  const repoName = process.env.GITHUB_REPOSITORY 
    ? process.env.GITHUB_REPOSITORY.split('/')[1] 
    : 'repo-apecc-accounting'; // fallback

  return {
    plugins: [react()],
    base: command === 'build' ? `/${repoName}/` : '/',
  }
})
