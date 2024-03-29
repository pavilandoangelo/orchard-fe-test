import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                'dark-slate-gray': '#0e1414',
                'highlight-red': '#cf1430',
                description: '#5b5f5f'
            },
            textUnderlineOffset: {
                12: '12px',
                16: '16px'
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    md: '2rem',
                    lg: '0',
                    xl: '4rem',
                    '2xl': '10rem'
                }
            }
        }
    },
    plugins: []
};
export default config;
