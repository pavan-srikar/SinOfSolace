/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Orbitron', 'monospace'],
          ubuntu: ["Ubuntu", "sans-serif"],
        },
        colors: {
            rpg: {
            dark: "#020617",
            card: "#0f172a",
            accent: "#3b82f6",
            gold: "#fbbf24",
            }
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // 👈 Add this line
  ],
}