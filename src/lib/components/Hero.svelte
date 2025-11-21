<script>
	import { onMount } from 'svelte';

	let blobX = 50;
	let blobY = 50;
	let velocityX = 0;
	let velocityY = 0;

	onMount(() => {
		const handleMouseMove = (e) => {
			const section = document.querySelector('.hero-chaos');
			if (section) {
				const rect = section.getBoundingClientRect();
				const targetX = ((e.clientX - rect.left) / rect.width) * 100;
				const targetY = ((e.clientY - rect.top) / rect.height) * 100;

				// Physics-like attraction with spring/damping
				const dx = targetX - blobX;
				const dy = targetY - blobY;

				// Apply spring force
				velocityX += dx * 0.015;
				velocityY += dy * 0.015;

				// Apply damping
				velocityX *= 0.85;
				velocityY *= 0.85;
			}
		};

		// Animation loop for smooth blob movement
		const animate = () => {
			blobX += velocityX;
			blobY += velocityY;

			// Clamp blob position to stay within bounds (10% to 90%)
			blobX = Math.max(10, Math.min(90, blobX));
			blobY = Math.max(10, Math.min(90, blobY));

			requestAnimationFrame(animate);
		};

		window.addEventListener('mousemove', handleMouseMove);
		animate();

		return () => window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<section class="hero-chaos">
	<!-- Interactive liquid blob background -->
	<div class="liquid-bg" style="--blob-x: {blobX}%; --blob-y: {blobY}%;"></div>

	<!-- Dot grid overlay (hero-specific) -->
	<div class="dot-grid"></div>

	<div class="content-layer">
		<h1 class="title-main fade-in">
			<span class="line line-1">ALEXANDER</span>
			<span class="line line-2">WANG</span>
		</h1>

		<p class="hero-subtext fade-in delay-1">
			Aspiring Backend/Systems Software Engineer
			<br />Looking for Summer 2026 Opportunities.
		</p>

		<div class="floating-elements">
			<div class="float-text t1">STUDENT</div>
			<div class="float-text t2">ENGINEER</div>
			<div class="float-text t3">DEVELOPER</div>
		</div>

		<div class="scroll-indicator fade-in delay-2">
			<span>↓ SCROLL ↓</span>
		</div>

		<!-- Mouse position tracker -->
		<div class="mouse-tracker fade-in delay-3">
			<div class="tracker-label">CURSOR</div>
			<div class="tracker-coords">X: {Math.round(blobX)} <br /> Y: {Math.round(blobY)}</div>
		</div>
	</div>
</section>

<style>
	.hero-chaos {
		position: relative;
		height: 100vh;
		width: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--color-bg-main);
	}

	.liquid-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		/* Abstract liquid blob with multiple gradients */
		background:
			radial-gradient(
				ellipse 800px 600px at var(--blob-x) var(--blob-y),
				var(--color-acid-green) 0%,
				var(--color-hot-pink) 25%,
				transparent 50%
			),
			radial-gradient(
				ellipse 600px 800px at calc(var(--blob-x) + 10%) calc(var(--blob-y) - 10%),
				var(--color-electric-blue) 0%,
				var(--color-deep-purple) 30%,
				transparent 60%
			),
			radial-gradient(
				ellipse 700px 700px at calc(var(--blob-x) - 15%) calc(var(--blob-y) + 15%),
				var(--color-neon-orange) 0%,
				transparent 40%
			);
		opacity: 0.35;
		/* Organic morphing shape */
		border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
		animation: morph 8s ease-in-out infinite;
		filter: blur(60px);
	}

	@keyframes morph {
		0%,
		100% {
			border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
		}
		25% {
			border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
		}
		50% {
			border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
		}
		75% {
			border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
		}
	}

	.dot-grid {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: radial-gradient(circle, rgba(0, 0, 0, 0.15) 1px, transparent 1px);
		background-size: 20px 20px;
		z-index: 1;
		pointer-events: none;
	}

	.content-layer {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: var(--container-width);
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title-main {
		display: flex;
		flex-direction: column;
		align-items: center;
		line-height: 0.8;
	}

	.line {
		font-family: var(--font-display);
		font-size: clamp(4rem, 15vw, 20rem);
		font-weight: 900;
		color: var(--color-text-main);
		white-space: nowrap;
		text-shadow:
			4px 4px 0px var(--color-acid-green),
			8px 8px 0px var(--color-hot-pink);
	}

	.line-1 {
		color: transparent;
		-webkit-text-stroke: 2px var(--color-text-main);
	}

	.line-2 {
		color: var(--color-text-main);
		transform: rotate(-2deg);
	}

	.hero-subtext {
		font-family: var(--font-body);
		font-size: clamp(1rem, 2vw, 1.5rem);
		color: var(--color-text-main);
		max-width: 600px;
		text-align: center;
		margin-top: var(--spacing-md);
		line-height: 1.6;
		font-weight: 500;
	}

	.floating-elements {
		position: absolute;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.float-text {
		position: absolute;
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: 1.5rem;
		background: var(--color-hot-pink);
		color: white;
		padding: 0.5rem 1rem;
		transform: rotate(var(--r, 0deg));
	}

	.t1 {
		top: 20%;
		left: 10%;
		--r: -15deg;
		animation: float 4s ease-in-out infinite;
	}
	.t2 {
		bottom: 30%;
		right: 15%;
		--r: 10deg;
		background: var(--color-electric-blue);
		animation: float 5s ease-in-out infinite reverse;
	}
	.t3 {
		top: 15%;
		right: 20%;
		--r: 5deg;
		background: var(--color-acid-green);
		color: black;
		animation: float 6s ease-in-out infinite;
		animation-delay: 1s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0) rotate(var(--r)) scale(1);
		}
		50% {
			transform: translate(0, 20px) rotate(var(--r)) scale(1.05);
		}
	}

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		animation: blink 1s infinite;
	}

	.scroll-indicator span {
		font-family: var(--font-mono);
		font-size: 0.9rem;
		letter-spacing: 0.2em;
	}

	.mouse-tracker {
		position: absolute;
		bottom: calc(var(--spacing-md) + 80px);
		left: var(--spacing-md);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		background: rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 10px 15px;
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.tracker-label {
		font-weight: 700;
		letter-spacing: 0.1em;
	}

	.tracker-coords {
		color: var(--color-text-muted);
		font-size: 0.75rem;
	}

	/* Fade-in animations */
	.fade-in {
		animation: fadeIn 1s ease-out forwards;
		opacity: 0;
	}

	.delay-1 {
		animation-delay: 0.2s;
	}

	.delay-2 {
		animation-delay: 0.4s;
	}

	.delay-3 {
		animation-delay: 0.6s;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
