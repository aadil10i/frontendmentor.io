import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(221, 100%, 96%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 1)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "light-lavander": "hsl(241, 100%, 89%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
