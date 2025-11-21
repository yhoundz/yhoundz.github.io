<script>
	import ChaosCard from './ChaosCard.svelte';
	import DitheredShape from './DitheredShape.svelte';

	const experience = [
		{
			role: 'STUDENT',
			company: 'UNIVERSITY OF TEXAS AT AUSTIN',
			period: '2024 - PRESENT',
			desc: 'Computer Science Undergraduate Student',
			rotation: '-2deg',
			margin: '0 0 0 10%'
		},
		{
			role: 'ENGINEERING RESEARCHER',
			company: 'MIT LINCOLN LABORATORY (BWSI)',
			period: '2023',
			desc: 'Data Analyst, AI Researcher',
			rotation: '3deg',
			margin: '0 10% 0 0'
		}
		// {
		// 	role: 'FREELANCE',
		// 	company: 'SELF',
		// 	period: '2019 - 2021',
		// 	desc: "Solving problems that didn't exist yet.",
		// 	rotation: '-1deg',
		// 	margin: '0 0 0 20%'
		// }
	];
</script>

<section id="experience" class="experience-chaos">
	<h2 class="section-title">
		<span class="glitch-text">EXPERIENCE</span>
	</h2>

	<!-- Section subtext -->
	<div class="section-label">JOURNEY // GROWTH</div>

	<div class="timeline-container">
		<div class="timeline-line"></div>

		{#each experience as job}
			<div
				class="timeline-item"
				style="
          margin: {job.margin};
          transform: rotate({job.rotation});
        "
			>
				<div class="timeline-dot"></div>
				<ChaosCard title={job.role} subtitle={job.company} tags={[job.period]}>
					<p>{job.desc}</p>
				</ChaosCard>
			</div>
		{/each}
	</div>

	<!-- Decorative chaos elements -->
	<div class="deco-circle"></div>
	<div class="deco-rect"></div>
	<div class="glass-shard"></div>

	<!-- Colored symbols -->
	<div class="symbol s1">✹</div>
	<div class="symbol s2">※</div>

	<!-- Liquid blobs -->
	<div class="liquid-blob blob-1"></div>

	<!-- Abstract decorations -->
	<div class="abstract-circle ac1"></div>
	<div class="glass-shape g1"></div>
</section>

<style>
	.experience-chaos {
		padding: var(--spacing-xl) var(--spacing-md);
		background: var(--color-bg-secondary);
		position: relative;
		overflow: hidden;
	}

	.section-title {
		font-family: var(--font-display);
		font-size: clamp(3rem, 8vw, 6rem);
		text-align: center;
		margin-bottom: var(--spacing-xl);
		color: var(--color-text-main);
	}

	.timeline-container {
		position: relative;
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
	}

	.timeline-line {
		position: absolute;
		top: 0;
		left: 50%;
		width: 4px;
		height: 100%;
		background: var(--color-text-main);
		transform: translateX(-50%);
		z-index: 0;
	}

	.timeline-item {
		position: relative;
		width: 45%;
		z-index: 1;
	}

	.timeline-item:nth-child(odd) {
		align-self: flex-start;
	}

	.timeline-item:nth-child(even) {
		align-self: flex-end;
	}

	.timeline-dot {
		position: absolute;
		top: 50%;
		width: 20px;
		height: 20px;
		background: var(--color-acid-green);
		border: 2px solid black;
		border-radius: 50%;
		z-index: 10;
	}

	.timeline-item:nth-child(odd) .timeline-dot {
		right: -13.5%; /* Adjust based on gap/width */
	}

	.timeline-item:nth-child(even) .timeline-dot {
		left: -13.5%;
	}

	/* Decorative Elements */
	.deco-circle {
		position: absolute;
		top: 10%;
		right: 5%;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: radial-gradient(circle, var(--color-hot-pink) 0%, transparent 70%);
		filter: blur(40px);
		opacity: 0.3;
		z-index: -1;
		animation: floatDeco 15s infinite ease-in-out;
	}

	.deco-rect {
		position: absolute;
		bottom: 20%;
		left: 10%;
		width: 150px;
		height: 100px;
		background: var(--color-electric-blue);
		opacity: 0.1;
		transform: rotate(-15deg);
		z-index: -1;
	}

	.glass-shard {
		position: absolute;
		top: 50%;
		right: 10%;
		width: 120px;
		height: 180px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.2);
		clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);
		transform: rotate(20deg);
		z-index: -1;
	}

	@keyframes floatDeco {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-30px);
		}
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
		position: absolute;
		font-size: 10rem;
		font-weight: 900;
		z-index: 0;
		opacity: 1;
	}

	.s1 {
		top: 8%;
		left: 8%;
		color: var(--color-electric-blue);
	}

	.s2 {
		bottom: 15%;
		right: 10%;
		color: var(--color-acid-green);
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
		top: 30%;
		right: 10%;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, var(--color-hot-pink) 0%, transparent 70%);
		opacity: 0.15;
		animation: pulse 8s ease-in-out infinite;
	}

	.abstract-circle {
		position: absolute;
		border-radius: 50%;
		border: 3px solid var(--color-neon-orange);
		z-index: 0;
		opacity: 0.3;
		animation: spin 20s linear infinite;
	}

	.ac1 {
		bottom: 15%;
		left: 20%;
		width: 150px;
		height: 150px;
	}

	.glass-shape {
		position: absolute;
		background: rgba(255, 255, 255, 0.03);
		border: 2px solid rgba(255, 255, 255, 0.15);
		z-index: 0;
	}

	.g1 {
		top: 20%;
		right: 25%;
		width: 80px;
		height: 120px;
		clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
		animation: float 10s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.15;
			transform: scale(1);
		}
		50% {
			opacity: 0.25;
			transform: scale(1.05);
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-25px);
		}
	}

	@media (max-width: 768px) {
		.timeline-line {
			left: 20px;
		}
		.timeline-item {
			width: 100%;
			margin: 0 0 0 40px !important;
		}
		.timeline-dot {
			left: -30px !important;
		}
		.deco-circle,
		.deco-rect,
		.glass-shard {
			display: none;
		}
	}
</style>
