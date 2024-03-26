export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        display: ['Neue Montreal', 'ui-sans-serif'],
        condensed: ['Founders Grotesk X Condensed', 'ui-sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"),
  require("tw-elements-react/dist/plugin.cjs")],
}