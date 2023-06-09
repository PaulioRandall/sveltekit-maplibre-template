<script>
	import { menuIsOpen, menuSize, menuHoodSize } from '$state'
	import MenuToggle from './MenuToggle.svelte'
</script>

<section class="menu" class:open={$menuIsOpen}>
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
			top: 0;
			left: 0;
		}
	}
</style>
