import type { Config } from "tailwindcss";

const config: Config = {
    //purge: [
    //    "./src/**/*.{js,ts,jsx,tsx}",
    //],
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    DEFAULT: "#BFEFEF",
                    dark: "#6F8E8E",
                },
                red: {
                    DEFAULT: "#CA4E8E",
                },
            },
            fontFamily: {
                sans: ["Gabriela", "serif"],
                serif: ["Gabriela", "serif"],
            },
        }
    },
    plugins: [],
}

export default config;
