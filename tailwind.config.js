/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clash: {
          dark: "#080808",
          card: "#111111",
          border: "#252525",
          subtle: "#191919",
          green: "#00E701",
          greenHover: "#00C801",
          saffron: "#FF5722",
          saffronHover: "#E64A19",
          gold: "#FFD700",
          text: "#FFFFFF",
          muted: "#A3A3A3",
        },
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        mono: ["monospace"],
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-short": "bounce 0.5s ease-in-out 2",
      },
    },
  },
  plugins: [],
};
