import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://ArcadiaAlejandro.github.io/PMI_CHAPTER_HUANCAYO"
})
