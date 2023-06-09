<script>
	import { menuIsOpen, menuSize, menuHoodSize } from '$state'

	const toggle = () => menuIsOpen.update((isOpen) => !isOpen)
</script>

<div class="menu-toggle" on:click={toggle} on:keypress>
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
			left: var(--menu-toggle-left);
		}
	}
</style>
