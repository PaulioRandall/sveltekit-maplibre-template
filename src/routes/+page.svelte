<script>
	import MapLibre from '$lib/MapLibre.svelte'
	import Menu from '$lib/Menu.svelte'
	import { map, menuIsOpen, cssVars } from '$state'

	$: if ($map) {
		console.log('Map created')
	}

	$: console.log('Menu open:', $menuIsOpen)
</script>

<svelte:head>
	<title>Maplibre Sveltekit Template</title>
</svelte:head>

<main style={cssVars} class="main">
	<MapLibre
		options={{
			style: 'https://demotiles.maplibre.org/style.json',
			center: [0, 0],
			zoom: 1,
		}} />
	<Menu />
</main>

<style>
	.main {
		position: relative;

		width: 100vw;
		height: 100vh;

		overflow: hidden;
	}
</style>
