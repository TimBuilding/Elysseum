/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/styles/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Inter']
			}

		},
	},
	plugins: [],
}
