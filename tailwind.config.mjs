/** @type {import('tailwindcss').Config} */
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
        "text-color": "var(--text-color)",
        "border-color": "var(--border-color)",
        "button-bg": "var(--button-bg)",
        "card-bg": "var(--card-bg)",
        "blur-card": "rgba(0, 18, 51, 0.6)"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "serif"],
      },
    },
    gridTemplateRows: {
      "8-150": "20px 30px 50px 50px 50px 50px 50px",
    },
    gridTemplateColumns: {
      "10-30": "40px 100px 100px 100px 100px 100px 100px 90px 90px",
      "10-30-md": "30px 80px 80px 80px 80px 80px 80px 80px",
    },

  },
  plugins: [],
};
