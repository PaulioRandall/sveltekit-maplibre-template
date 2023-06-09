<script>
	import { onMount, onDestroy } from 'svelte'
	import maplibre from 'maplibre-gl'
	import { map } from '$state'

	export let options = {}

	let container

	onMount(() => {
		map.set(
			new maplibre.Map({
				...options,
				container,
			})
		)
	})

	onDestroy(() => {
		map.set(null)
	})
</script>

<section class="container" bind:this={container} />

<style>
	.container {
		width: var(--map-width);
		height: var(--map-height);
	}

	@media (min-width: 800px) {
		.container {
			margin-left: var(--map-width-offset-desktop);
			width: var(--map-width-desktop);
			height: var(--map-height-desktop);
		}
	}
</style>
