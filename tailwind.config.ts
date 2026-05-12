import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        saffron: '#F59E0B',
        gold: '#D4AF37',
        ivory: '#F8F4E8',
        beige: '#EAD7B7',
        deep: '#0B0A0A'
      },
      borderRadius: { luxury: '24px' }
    }
  },
  plugins: []
} satisfies Config;
