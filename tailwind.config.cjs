/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
                'button-scale': {
                    from: {
                        transform: 'scale(1)',
                        transformOrigin: 'center center',
                    },
                    '50%': {
                        transform: 'scale(1.1)',
                    },
                    to: {
                        transform: 'scale(1)',
                    },
                },
                'slide-in-right': {
                    from: {
                        transform: 'translateX(1000px)',
                        opacity: 0,
                    },
                    to: {
                        transform: 'translateX(0)',
                        opacity: 1,
                    },
                },
                'slide-out-right': {
                    from: {
                        transform: 'translateX(0)',
                        opacity: 1,
                    },
                    to: {
                        transform: 'translateX(1000px)',
                        opacity: 0,
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "button": "button-scale 0.5s ease-in-out",
                "modal-in": "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
                "modal-out": "slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
            },
            fontFamily: {
                jomhuria: ["Jomhuria"],
                inter: ["Inter"],
                "kingnamype-yuanmo": ["Kingnamype Yuanmo SC"],
            },
            backgroundImage: {
                "shop-cart": "url('./assets/Modal/shop-cart-bg.png')",
                "shop-select": "url('./assets/Modal/shop-select-bg.svg')",
                "shop-select-item": "url('./assets/Modal/shop-select-item-bg.svg')",
                "shop-list": "url('./assets/Modal/shop-list-bg.svg')",
                "shop-list-item": "url('./assets/Modal/shop-list-item-bg.svg')",
                "shop-custom": "url('./assets/Modal/shop-custom-bg.svg')",
                "shop-custom-item": "url('./assets/Modal/shop-custom-item-bg.svg')",
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
}