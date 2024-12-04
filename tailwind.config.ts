import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
      'aboutBackground': "url('/aboutOffice.avif')",
      'productBackground': "url('/product.jpg')",
      'homeBackground': "url('/gears.jpg')",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
