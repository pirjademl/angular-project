/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        fontFamily: {},
        extend: {
            spacing: {
                1: "10px",
                2: "20px",
                3: "30px",
                4: "40px",
            },
            colors: {
                primary: "#123",
                secondary: "#444",
            },
        },
    },
    plugins: [],
};
