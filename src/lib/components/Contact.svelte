<script>
	const links = [
		{ name: 'EMAIL', href: 'mailto:alexwang@utexas.edu', color: 'var(--color-acid-green)' },
		{ name: 'GITHUB', href: 'https://github.com/yhoundz', color: 'var(--color-electric-blue)' },
		{
			name: 'LINKEDIN',
			href: 'https://www.linkedin.com/in/alexwang10/',
			color: 'var(--color-hot-pink)'
		}
	];
</script>

<section id="contact" class="contact-chaos">
	<div class="marquee-container">
		<div class="marquee">
			<span>LET'S TALK • COLLABORATE • CREATE • CONTACT ME • </span>
			<span>LET'S TALK • COLLABORATE • CREATE • CONTACT ME • </span>
			<span>LET'S TALK • COLLABORATE • CREATE • CONTACT ME • </span>
		</div>
	</div>

	<div class="links-container">
		{#each links as link}
			<a href={link.href} class="giant-link" style="--hover-color: {link.color}">
				{link.name}
			</a>
		{/each}
	</div>

	<div class="footer-chaos">
		<p>© MMXXV ALEXANDER WANG // CREATED USING GEMINI 3.0</p>
	</div>
</section>

<style>
	.contact-chaos {
		min-height: 100vh;
		background: black;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
	}

	.marquee-container {
		position: absolute;
		top: 10%;
		width: 100%;
		overflow: hidden;
		transform: rotate(-5deg);
		background: var(--color-acid-green);
		color: black;
		padding: 10px 0;
	}

	.marquee {
		white-space: nowrap;
		font-family: var(--font-mono);
		font-size: 2rem;
		font-weight: 700;
		animation: scroll 20s linear infinite;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-33.33%);
		}
	}

	.links-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-sm);
		z-index: 10;
	}

	.giant-link {
		font-family: var(--font-display);
		font-size: clamp(4rem, 12vw, 12rem);
		font-weight: 800;
		color: transparent;
		-webkit-text-stroke: 2px white;
		text-decoration: none;
		line-height: 0.8;
		transition: all 0.3s ease;
		position: relative;
	}

	.giant-link:hover {
		color: var(--hover-color);
		-webkit-text-stroke: 0px;
		transform: scale(1.1) skewX(-10deg);
		z-index: 20;
	}

	.giant-link::before {
		content: attr(href);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: var(--font-mono);
		font-size: 1rem;
		color: white;
		opacity: 0;
		pointer-events: none;
		white-space: nowrap;
	}

	.footer-chaos {
		position: absolute;
		bottom: var(--spacing-md);
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--color-text-muted);
	}
</style>
