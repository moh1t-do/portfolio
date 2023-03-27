/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#CF1767',
            },
            fontSize: {
                '14xl': '15rem',
            },
            height: {
                100: '30rem',
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
}
