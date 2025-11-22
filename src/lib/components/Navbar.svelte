<script>
	import { onMount } from 'svelte';
	import MenuOverlay from './MenuOverlay.svelte';

	let isScrolled = false;
	let isMenuOpen = false;
	let menuTimeout;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// --- HOVER LOGIC (Desktop) ---
	function handleMouseEnter() {
		// Clear any pending close timer
		clearTimeout(menuTimeout);
		isMenuOpen = true;
	}

	function handleMouseLeave() {
		// Add a small delay before closing to prevent flickering if moving mouse quickly
		menuTimeout = setTimeout(() => {
			isMenuOpen = false;
		}, 1500);
	}

	// --- CLICK LOGIC (Mobile/Force) ---
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<nav class="nav-chaos">
	<!-- LOGO (Top-Left) -->
	<a href="/" class="logo">
		<span class="logo-text">ALEX</span>
		<div class="logo-dot"></div>
	</a>

	<!-- MENU TRIGGER (Top-Right) -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="nav-link top-right menu-trigger"
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
		on:click={toggleMenu}
	>
		MENU
	</div>

	<!-- RESUME (Bottom-Left) -->
	<a href="/resume.pdf" target="_blank" class="nav-link bottom-left">
		RESUME
	</a>

	<!-- SAY HELLO (Bottom-Right) -->
	<a href="#contact" class="nav-link bottom-right">
		SAY HELLO
	</a>

	<div class="status-indicator">
		<div class="status-dot"></div>
		<span>ONLINE</span>
	</div>
</nav>

<!-- MENU OVERLAY -->
<!-- Pass mouse handlers to keep it open when hovering the overlay itself -->
<MenuOverlay
	isOpen={isMenuOpen}
	onClose={closeMenu}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
/>

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
		z-index: 2001; /* Above menu overlay if needed, or same level */
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
		cursor: pointer;
		background: transparent; /* Ensure hit area */
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
		z-index: 2001; /* Ensure trigger is clickable above overlay if needed */
	}

	/* Specific hover state for menu trigger to match rotation */
	.top-right:hover {
		transform: rotate(0deg) scale(1.1);
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
