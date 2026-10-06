import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// VITE_BASE is only needed for GitHub Pages (e.g. "/my-portfolio/"). Vercel/Netlify use "/".
export default defineConfig({ base: process.env.VITE_BASE || '/', plugins: [react()] })
