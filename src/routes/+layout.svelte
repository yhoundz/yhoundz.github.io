<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/global.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import ChaosDecoration from '$lib/components/ChaosDecoration.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<ChaosDecoration />

{@render children()}
