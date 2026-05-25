/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                navy: "#33363b",
                mint: "#ff970f",
                skysoft: "#fff7dc",
                emerald: {
                    50: "#fff8e3",
                    100: "#ffedb8",
                    200: "#ffd783",
                    300: "#ffbe44",
                    400: "#ffa719",
                    500: "#ff970f",
                    600: "#d97300",
                    700: "#aa5400",
                    800: "#843f00",
                    900: "#633100"
                }
            },
            boxShadow: {
                soft: "0 24px 70px -40px rgba(217, 115, 0, 0.48)"
            }
        }
    },
    plugins: []
};
