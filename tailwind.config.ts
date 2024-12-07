import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
		extend: {
			colors: {
				color: 'var(--color)',
				color20: 'var(--color20)',
				text: 'var(--textColor)',
				text20: 'var(--textColor20)',
				accent: 'var(--accentColor)',
				accent20: 'var(--accentColor20)',
				'accent-text': 'var(--accentTextColor)',
				'accent-text20': 'var(--accentTextColor20)',
				inactive: 'var(--inactiveColor)',
				inactive20: 'var(--inactiveColor20)',
				'inactive-text': 'var(--inactiveTextColor)',
				'inactive-text20': 'var(--inactiveTextColor20)',
				'page-1': 'var(--pageColor1)',
				'page-2': 'var(--pageColor2)',
				'page-3': 'var(--pageColor3)'
			},
			backgroundImage: {
				'gradient-background': 'var(--background-gradient)'
			},
			transitionProperty: {
				custom: 'var(--transition)'
			}
		}
	},
  plugins: [typography]
} satisfies Config;
