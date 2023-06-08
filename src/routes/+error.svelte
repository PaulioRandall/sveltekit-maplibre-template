<script>
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>Error: {$page.status}</title>
</svelte:head>

<main>
	{$page.status} - {$page.error.message}
</main>
