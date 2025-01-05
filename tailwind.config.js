const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	content: [
		"./index.html",
		"./blog1.html",
		"./public/**/*.{vue,js,ts,jsx,tsx}", // If you have other components
		"./public/**/*.html", // If you have more HTML files
		"./public/*.html", // If you have more HTML files
	],
	theme: {
		extend: {
			keyframes: {
				skeletonLoading: {
					"0%": {
						backgroundColor: "hsl(0, 0%, 80%)",
					},
					"100%": {
						backgroundColor: "hsl(0, 0%, 90%)",
					},
				},
			},
			animation: {
				skeletonLoading: "skeletonLoading 0.6s linear infinite alternate",
			},
			fontFamily: {
				iyb: ["IranYekanBold", "sans-serif"],
				iyn: ["IranYekanRegular", "sans-serif"],
				iyl: ["IranYekanLight", "sans-serif"],
			},
			colors: {
				// white: "#ffffff",
				white: colors.white,
				gray1: colors.zinc[100],
				gray2: colors.zinc[200],
				gray3: colors.zinc[300],
				gray4: colors.zinc[400],
				gray5: colors.zinc[500],
				gray6: colors.zinc[600],
				gray7: colors.zinc[700],
				gray8: colors.zinc[800],
				gray9: colors.zinc[900],
				red1: colors.red[600],
				red2: colors.red[700],
			},
		},
	},
	daisyui: {
		themes: [],
	},
	plugins: [addDynamicIconSelectors(), require("daisyui")],
};
