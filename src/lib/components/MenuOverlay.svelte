<script>
	import { fly, fade } from 'svelte/transition';
	import { quintOut, quintIn } from 'svelte/easing';

	export let isOpen = false;
	export let onClose = () => {};

	const links = [
		{ name: 'ABOUT', href: '#about' },
		{ name: 'PROJECTS', href: '#projects' },
		{ name: 'EXPERIENCE', href: '#experience' },
		{ name: 'CONTACT', href: '#contact' }
	];
</script>

<!-- Container always exists to anchor position -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="menu-floating" on:mouseenter on:mouseleave>
	{#if isOpen}
		<div class="menu-list" transition:fly={{ y: -20, duration: 300, easing: quintOut }}>
			{#each links as link, i (link.name)}
				<a
					href={link.href}
					class="menu-link"
					in:fly={{ y: -50, duration: 600, delay: 100 + i * 100, easing: quintOut }}
					out:fly={{ y: -50, duration: 300, delay: (links.length - 1 - i) * 50, easing: quintIn }}
					on:click={onClose}
				>
					<span class="link-text">{link.name}</span>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.menu-floating {
		position: fixed;
		top: 80px;
		right: var(--spacing-md);
		z-index: 2000;
		pointer-events: none; /* Pass clicks through wrapper */
	}

	.menu-list {
		display: flex;
		flex-direction: column;
		align-items: flex-end; /* Right align to match MENU trigger */
		gap: 10px;
	}

	.menu-link {
		font-family: var(--font-mono);
		font-size: 1.2rem;
		font-weight: 700;
		color: black;
		text-decoration: none;
		padding: 10px 20px; /* Exact match to Navbar trigger padding */
		position: relative;
		pointer-events: auto; /* Catch clicks on links */
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			transform 0.3s ease,
			color 0.3s ease;
	}

	/* The Glow - Elliptical and Blurred */
	.menu-link::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 60%;
		height: 60%;
		background: white;
		border-radius: 50%;
		filter: blur(15px);
		opacity: 0.4;
		z-index: -1;
		transition: all 0.3s ease;
	}

	.link-text {
		position: relative;
		z-index: 1;
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
	}

	.menu-link:hover {
		transform: translateX(-5px);
		color: black;
	}

	.menu-link:hover::before {
		opacity: 1;
		width: 70%;
		height: 70%;
		filter: blur(20px);
		background: var(--color-acid-green);
	}

	@media (max-width: 768px) {
		.menu-floating {
			top: 70px;
			right: 20px;
		}
	}
</style>
