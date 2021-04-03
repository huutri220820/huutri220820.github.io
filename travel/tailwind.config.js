const colors = require("tailwindcss/colors");

module.exports = {
	purge: {
		enabled: true,
		content: ["./src/**/*.html"],
	},
	darkMode: false,
	theme: {
		extend: {},
		colors: {
			black: colors.black,
			white: colors.white,
			transparent: "transparent",
			current: "currentColor",
			blueGray: colors.blueGray,
			gray: colors.gray,
			red: colors.red,
			orange: colors.orange,
			yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			teal: colors.teal,
			lightBlue: colors.lightBlue,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			fuchsia: colors.fuchsia,
			rose: colors.rose,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
