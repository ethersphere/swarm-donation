import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        nodePolyfills({
            // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
            include: ['stream']
        })
    ],
    build: {
        lib: {
            entry: 'lib/index.tsx',
            formats: ['umd', 'es'],
            name: 'swarm-donation',
            fileName: format => `swarm-donation.${format}.js`
        }
    }
})
