import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Interactive-3D-Room/', // Afegeix això per especificar el camí base correcte
})
