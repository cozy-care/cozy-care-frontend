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
      colors: {
        "cozy-green-light": "#3FADA8",
        "cozy-blue-light": "#28789E",
        "cozy-lightblue-light": "#C1E2F2",
        "cozy-gray-light": "#808080",
        "cozy-black-light": "#000000",

        "cozy-teal-dark": "#75F4EF",
        "cozy-green-dark": "#3FADA8",
        "cozy-blue-dark": "#53B7E7",
        "cozy-darkblue-dark": "#17688F",
        "cozy-background-dark": "#2F2F2F",
        "cozy-text-dark": "#000000",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#3FADA8",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#C1E2F2",
              foreground: "#28789E",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#53B7E7",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#3FADA8",
              foreground: "#000000",
            },
          },
        },
      },
    }),
    require("tailwindcss-animate")
  ],
  darkMode: "class"
};
export default config;