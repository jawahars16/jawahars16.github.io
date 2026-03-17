/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'ui-monospace', 'Cascadia Code', 'Fira Code', 'monospace'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Cascadia Code', 'Fira Code', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#e6edf3',
            a: {
              color: '#58a6ff',
              textDecoration: 'underline',
              textDecorationColor: '#30363d',
              textUnderlineOffset: '3px',
              fontWeight: '400',
              '&:hover': { textDecorationColor: '#58a6ff' },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: '#e6edf3',
              fontWeight: '600',
              letterSpacing: '-0.02em',
            },
            strong: { color: '#e6edf3' },
            blockquote: {
              borderLeftColor: '#30363d',
              color: '#8b949e',
              fontStyle: 'normal',
            },
            hr: { borderColor: '#21262d' },
            code: {
              fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
              fontSize: '0.875em',
              color: '#79c0ff',
              backgroundColor: '#161b22',
              padding: '0.15em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
              border: '1px solid #30363d',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
            pre: {
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              color: '#e6edf3',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              border: 'none',
              color: 'inherit',
            },
            thead: { borderBottomColor: '#30363d' },
            'tbody tr': { borderBottomColor: '#21262d' },
            li: { color: '#e6edf3' },
            'li::marker': { color: '#6e7681' },
            p: { color: '#e6edf3' },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#e6edf3',
            '--tw-prose-headings': '#e6edf3',
            '--tw-prose-links': '#58a6ff',
            '--tw-prose-bold': '#e6edf3',
            '--tw-prose-counters': '#6e7681',
            '--tw-prose-bullets': '#6e7681',
            '--tw-prose-hr': '#21262d',
            '--tw-prose-quotes': '#8b949e',
            '--tw-prose-quote-borders': '#30363d',
            '--tw-prose-captions': '#8b949e',
            '--tw-prose-code': '#79c0ff',
            '--tw-prose-pre-code': '#e6edf3',
            '--tw-prose-pre-bg': '#161b22',
            '--tw-prose-th-borders': '#30363d',
            '--tw-prose-td-borders': '#21262d',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
