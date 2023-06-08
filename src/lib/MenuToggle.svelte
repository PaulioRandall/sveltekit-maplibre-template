<script>
	import { menuIsOpen, menuSize, menuHoodSize } from '$state'
	import { toCSS, px } from '$util'

	const toggle = () => menuIsOpen.update((isOpen) => !isOpen)

	const style = toCSS({
		'--menu-toggle-pos': px(menuSize - menuHoodSize),
		'--menu-toggle-size': px(menuHoodSize),
	})
</script>

<div {style} class="menu-toggle" on:click={toggle} on:keypress>
	___<br />___<br />___
</div>

<style>
	.menu-toggle {
		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		justify-content: center;

		height: var(--menu-toggle-size);
		width: var(--menu-toggle-size);

		font-weight: bold;
		cursor: pointer;
		user-select: none;
		line-height: 10px;
	}

	@media (min-width: 800px) {
		.menu-toggle {
			left: var(--menu-toggle-pos);
		}
	}
</style>
