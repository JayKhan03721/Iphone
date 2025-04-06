import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // base: '/Iphone',
  server: {
    allowedHosts: ['iphone15-irqf.onrender.com'],
    host: true,  // Expose to the network
  },
})

