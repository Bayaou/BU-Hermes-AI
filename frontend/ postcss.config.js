// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {
      // This is required for v4 alpha
      base: '/',
      sourceMap: false,
    },
  },
}