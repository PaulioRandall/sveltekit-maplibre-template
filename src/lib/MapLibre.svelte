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
		width: 100%;
		height: 100%;
	}
</style>
