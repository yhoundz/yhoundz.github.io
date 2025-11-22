<script>
	import ChaosCard from './ChaosCard.svelte';
	import DitheredShape from './DitheredShape.svelte';

	const education = [
		{
			school: 'UNIVERSITY OF TEXAS AT AUSTIN',
			degree: 'BS, COMPUTER SCIENCE',
			year: '2028',
			description:
				'Coursework: Data Structures, Discrete Math, Computer Architecture, Operating Systems',
			rotation: '-4deg',
			top: '-10%',
			color: 'var(--color-acid-green)'
		},
		{
			school: 'HIGH SCHOOL',
			degree: 'GRADUATE',
			year: '2024',
			description: '',
			rotation: '9deg',
			top: '35%',
			color: 'var(--color-hot-pink)'
		}
	];
</script>

<section id="education" class="education-chaos">
	<h2 class="section-title">EDUCATION</h2>

	<!-- Section subtext -->
	<div class="section-label">LEARNING // FOUNDATION</div>

	<div class="scatter-container">
		{#each education as edu, index}
			<div
				class="scatter-item long-strip"
				style="
          top: {edu.top};
          --rotation: {edu.rotation};
          --accent-color: {edu.color};
          z-index: {200 - index * 10};
        "
			>
				<div class="strip-content">
					<div class="strip-header">
						<h3 class="degree">{edu.degree}</h3>
						<span class="year">{edu.year}</span>
					</div>
					<div class="strip-body">
						<div class="school-wrapper">
							<span class="school">{edu.school}</span>
						</div>
						<p class="description">{edu.description}</p>
					</div>
				</div>
				<div class="strip-decoration"></div>
			</div>
		{/each}
	</div>

	<!-- Colored symbols -->
	<div class="symbol s1">＊</div>
	<div class="symbol s2">✧</div>

	<!-- Liquid blobs -->
	<div class="liquid-blob blob-1"></div>
	<div class="liquid-blob blob-2"></div>

	<!-- Abstract elements -->
	<div class="abstract-square"></div>
</section>

<style>
	.education-chaos {
		min-height: 100vh;
		padding: var(--spacing-xl) 0; /* Remove horizontal padding to allow full width */
		background: #fafafa;
		position: relative;
		overflow: hidden;
	}

	.blob-2 {
		bottom: 20%;
		left: 15%;
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, var(--color-electric-blue) 0%, transparent 70%);
		opacity: 0.15;
		animation: pulse 7s ease-in-out infinite;
	}

	.abstract-square {
		position: absolute;
		top: 35%;
		right: 10%;
		width: 100px;
		height: 100px;
		border: 3px solid var(--color-hot-pink);
		transform: rotate(45deg);
		z-index: 0;
		opacity: 0.25;
		animation: rotate 15s linear infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.15;
			transform: scale(1);
		}
		50% {
			opacity: 0.25;
			transform: scale(1.08);
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(45deg);
		}
		to {
			transform: rotate(405deg);
		}
	}

	.section-title {
		font-family: var(--font-display);
		font-size: clamp(3rem, 8vw, 8rem);
		color: var(--color-text-main);
		text-align: center;
		width: 100%;
	}

	.scatter-container {
		position: relative;
		width: 100%;
		height: 800px;
		margin-top: var(--spacing-xl);
	}

	.scatter-item {
		position: absolute;
		left: -5vw; /* Start off-screen left */
		width: 110vw; /* Span across the entire screen */
		transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transform: rotate(var(--rotation));
	}

	.long-strip {
		background: rgba(255, 255, 255, 0.95);
		border-top: 4px solid #000;
		border-bottom: 4px solid #000;
		padding: 2rem 5vw 2rem 10vw; /* Add padding to center content visually */
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
	}

	.long-strip:hover {
		transform: rotate(0deg) scale(1.02);
		z-index: 1000 !important;
		background: #fff;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
	}

	.strip-content {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.strip-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		border-bottom: 2px solid #000;
		padding-bottom: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.degree {
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw, 4rem);
		line-height: 0.9;
		margin: 0;
		color: #000;
		text-transform: uppercase;
	}

	.year {
		font-family: var(--font-mono);
		font-size: 1.2rem;
		font-weight: 700;
		background: #000;
		color: var(--accent-color);
		padding: 0.2rem 0.8rem;
		transform: rotate(3deg);
	}

	.strip-body {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.school-wrapper {
		display: inline-block;
	}

	.school {
		font-family: var(--font-mono);
		font-size: 1.1rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		background: var(--accent-color);
		color: var(--color-deep-purple);
		padding: 0.2rem 0.6rem;
		display: inline-block;
	}

	.description {
		font-family: var(--font-body);
		font-size: 1.1rem;
		color: var(--color-text-muted);
		max-width: 800px;
		margin-top: 0.5rem;
	}

	/* Decorative accent line */
	.strip-decoration {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 6px;
		background: repeating-linear-gradient(
			45deg,
			var(--accent-color),
			var(--accent-color) 10px,
			transparent 10px,
			transparent 20px
		);
		opacity: 0.5;
	}

	.long-strip:hover .strip-decoration {
		opacity: 1;
	}

	.section-label {
		position: absolute;
		top: var(--spacing-md);
		right: var(--spacing-md);
		font-family: var(--font-mono);
		font-size: 0.9rem;
		color: var(--color-text-muted);
		writing-mode: vertical-rl;
		text-orientation: mixed;
	}

	.symbol {
		user-select: none;
		position: absolute;
		font-size: 10rem;
		font-weight: 900;
		z-index: 0;
		opacity: 1;
	}

	.s1 {
		top: 17%;
		left: 15%;
		color: var(--color-neon-orange);
	}

	.s2 {
		bottom: 15%;
		right: 20%;
		color: var(--color-deep-purple);
		font-size: 12rem;
	}

	.liquid-blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		z-index: 0;
		pointer-events: none;
	}

	.blob-1 {
		top: 10%;
		right: 20%;
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, var(--color-acid-green) 0%, transparent 70%);
		opacity: 0.2;
	}

	.blob-2 {
		bottom: 20%;
		left: 15%;
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, var(--color-electric-blue) 0%, transparent 70%);
		opacity: 0.15;
		animation: pulse 7s ease-in-out infinite;
	}
</style>
