/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f5f5f7',
                    100: '#e5e5e7',
                    500: '#2997ff', // Apple blue
                    600: '#007aff',
                    900: '#1d1d1f', // Apple dark gray
                    950: '#000000',
                },
                dark: {
                    800: '#1c1c1e',
                    900: '#101010',
                    950: '#050505',
                }
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-0.05em', // Increased tightness for Display look
                tight: '-0.025em',
                normal: '0em',
                wide: '0.025em',
            },
            animation: {
                'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-deep': 'floatDeep 8s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                floatDeep: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-30px)' },
                }
            }
        },
    },
    plugins: [],
}
