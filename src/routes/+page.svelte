<script>
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Education from '$lib/components/Education.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Alexander Wang</title>
</svelte:head>

<main>
	<Hero />
	<Projects />
	<Experience />
	<Education />
	<Contact />
</main>

<style>
	main {
		padding-bottom: 100px;
	}
</style>
