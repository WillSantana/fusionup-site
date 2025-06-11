/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background, 220, 14%, 96%))',
          foreground: 'hsl(var(--sidebar-foreground, 222, 47%, 11%))',
          primary: 'hsl(var(--sidebar-primary, 222, 89%, 53%))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground, 210, 100%, 98%))',
          accent: 'hsl(var(--sidebar-accent, 216, 100%, 92%))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground, 210, 50%, 20%))',
          border: 'hsl(var(--sidebar-border, 214, 32%, 91%))',
          ring: 'hsl(var(--sidebar-ring, 215, 20%, 65%))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
