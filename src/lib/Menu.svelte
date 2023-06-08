<script>
	import { menuIsOpen, menuSize, menuHoodSize } from '$state'
	import { toCSS, px } from '$util'

	import MenuToggle from './MenuToggle.svelte'

	const style = toCSS({
		'--menu-size': px(menuSize),
		'--menu-closed': px(0 - menuSize + menuHoodSize),
		'--menu-hood-size': px(menuHoodSize),
	})
</script>

<section {style} class="menu" class:open={$menuIsOpen}>
	<MenuToggle />
</section>

<style>
	.menu {
		position: absolute;
		bottom: var(--menu-closed);
		left: 0;

		height: var(--menu-size);
		width: 100%;

		background: MidnightBlue;
		transition: bottom 0.3s;
	}

	.open {
		bottom: 0;
	}

	@media (min-width: 800px) {
		.menu {
			bottom: unset;
			top: 0;
			left: var(--menu-closed);

			height: 100%;
			width: var(--menu-size);
			transition: left 0.3s;
		}

		.open {
			bottom: unset;
			left: 0;
		}
	}
</style>
