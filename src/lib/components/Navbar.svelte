<script>
	import { onMount } from 'svelte';

	let isScrolled = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const links = [
		{ name: 'PROJECTS', href: '#projects', pos: 'top-right' },
		{ name: 'EXPERIENCE', href: '#experience', pos: 'bottom-left' },
		{ name: 'SAY HELLO', href: '#contact', pos: 'bottom-right' }
	];
</script>

<nav class="nav-chaos">
	<a href="/" class="logo">
		<span class="logo-text">ALEX</span>
		<div class="logo-dot"></div>
	</a>

	{#each links as link}
		<a href={link.href} class="nav-link {link.pos}">
			{link.name}
		</a>
	{/each}

	<div class="status-indicator">
		<div class="status-dot"></div>
		<span>ONLINE</span>
	</div>
</nav>

<style>
	.nav-chaos {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1000;
		color: white;
	}

	.logo {
		position: absolute;
		top: var(--spacing-md);
		left: var(--spacing-md);
		pointer-events: auto;
		text-decoration: none;
		color: black;
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 800;
		display: flex;
		align-items: flex-end;
		gap: 5px;
	}

	.logo-dot {
		width: 10px;
		height: 10px;
		background: var(--color-acid-green);
		border-radius: 50%;
		margin-bottom: 8px;
	}

	.nav-link {
		position: absolute;
		pointer-events: auto;
		text-decoration: none;
		color: black;
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: 1.2rem;
		padding: 10px 20px;
		border: 1px solid transparent;
		transition: all 0.3s ease;
	}

	.nav-link:hover {
		background: black;
		color: white;
		transform: scale(1.1);
	}

	.top-right {
		top: var(--spacing-md);
		right: var(--spacing-md);
		transform: rotate(5deg);
	}

	.bottom-left {
		bottom: var(--spacing-md);
		left: var(--spacing-md);
		transform: rotate(-5deg);
	}

	.bottom-right {
		bottom: var(--spacing-md);
		right: var(--spacing-md);
		font-size: 1.4rem;
		transform: rotate(-2deg);
	}

	.status-indicator {
		position: absolute;
		top: 50%;
		left: var(--spacing-md);
		transform: translateY(-50%) rotate(-90deg);
		display: flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		letter-spacing: 0.2em;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		background: var(--color-acid-green);
		border-radius: 50%;
		box-shadow: 0 0 10px var(--color-acid-green);
		animation: pulse 1s infinite;
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
</style>
