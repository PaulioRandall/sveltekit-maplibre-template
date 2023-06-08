import { writable } from 'svelte/store'

// All sizes are in px unless stated otherwise

export const map = writable(null)

export const menuSize = 400
export const menuHoodSize = 50
export const menuIsOpen = writable(false)
