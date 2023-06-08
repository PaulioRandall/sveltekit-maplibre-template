export const toCSS = (styles) =>
	Object.entries(styles)
		.map(([k, v]) => `${k}: ${v}`)
		.join(';') + ';'

export const px = (v) => `${v}px`

export default {
	toCSS,
	px,
}
