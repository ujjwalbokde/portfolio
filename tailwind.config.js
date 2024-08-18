/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-simple": "url('/bg-4.png')",
        "hero-bg": "url('/bg-3.png')",
        "hero-about": "url('/bg-6.png')",
        "linear-dark-to-light":
          "linear-gradient(90deg, rgba(78, 78, 78, 1) 0%, rgba(255, 255, 255, 1) 100%)",
      },
    },
  },
  plugins: [],
};
