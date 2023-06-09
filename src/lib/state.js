import { writable } from 'svelte/store'
import { toCSS, px } from '$util'

export const map = writable(null)

export const menuSize = 400 // px
export const menuHoodSize = 50 // px
export const menuIsOpen = writable(false)

export const cssVars = toCSS({
	'--map-width': `100%`,
	'--map-height': `calc(100% - ${menuHoodSize}px)`,
	'--map-height-offset': px(menuHoodSize),
	'--map-width-desktop': `calc(100% - ${menuHoodSize}px)`,
	'--map-width-offset-desktop': px(menuHoodSize),
	'--map-height-desktop': `100%`,
	'--menu-size': px(menuSize),
	'--menu-closed': px(0 - menuSize + menuHoodSize),
	'--menu-hood-size': px(menuHoodSize),
	'--menu-toggle-left': px(menuSize - menuHoodSize),
	'--menu-toggle-size': px(menuHoodSize),
})

