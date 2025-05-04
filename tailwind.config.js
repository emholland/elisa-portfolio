/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    safelist: ["animate-float1", "animate-float2", "animate-float3"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  