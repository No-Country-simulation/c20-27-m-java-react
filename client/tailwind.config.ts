import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "midnight-blue": "#1C2A3A",
        white: "#fff",
        grey: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2A37",
          900: "#111928",
        },
        "deep-teal": "#014737",
        teal: "#4D9B91",
        "light-teal": "#A4CFC3",
        green: "#93C19E",
        "pale-green": "#DEF7E4",
        "dark-red": "#771D1D",
        "deep-pink": "#DC9497",
        pink: "#DEB6B5",
        "light-pink": "#FDE8E8",
        "light-purple": "#ACA1CD",
        blue: "#1C64F2",
        "pale-blue": "#89CCDB",
        purple: "#352261",
        orange: "#F5AD7E",
      },
      boxShadow: {
        "2.5xl": "0 2px 4px rgba(0, 0, 0, 0,1)",
        "3xl": "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config
