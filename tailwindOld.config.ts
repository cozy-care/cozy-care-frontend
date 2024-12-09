import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px", //for small mobile

        //default from tailwind
        // sm: "640px", horizontal mobile
        // md: "768px", tablet
        // lg: "1024px", computer
        // xl: "1280px",
        // "2xl": "1536px"

        //customize
        // xs: "320px",
        // sm: "360px",
        // md: "414px",
        // lg: "768px",
        // xl: "1024px",
        // "2xl": "1440px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        'cozy-green-light': '#3FADA8',
        'cozy-blue-light': '#28789E',
        'cozy-lightblue-light': '#28789E',
        'cozy-background-light': '#808080',
        'cozy-black-light': '#000000',

        'cozy-teal-dark': '#75F4EF',
        'cozy-green-dark': '#3FADA8',
        'cozy-blue-dark': '#53B7E7',
        'cozy-darkblue-dark': '#17688F',
        'cozy-background-dark': '#2F2F2F',
        'cozy-text-dark': '#000000',






        'text-dark': '#ecf8f8',
        'background-dark': '#1c1d1d',
        'primary-dark': '#117ca6',
        'secondary-dark': '#1f8b8b',
        'accent-dark': '#40dddd',
        'text-light': '#071313',
        'background-light': '#e2e4e4',
        'primary-light': '#59c3ee',
        'secondary-light': '#75e1e1',
        'accent-light': '#22bfbf',
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate")],
};
export default config;
