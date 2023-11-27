/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["Ariata Display", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {},
  },
  plugins: [],
};
