import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@nectary\/components\/(.*)$/,
        replacement: "@nectary/components/$1/index",
      },
    ],
  },
});
