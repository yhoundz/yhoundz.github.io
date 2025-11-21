<script>
	import ChaosCard from './ChaosCard.svelte';
	import DitheredShape from './DitheredShape.svelte';

	const projects = [
		{
			title: 'PARM',
			subtitle: 'PACKAGE MANAGER',
			tags: ['Go', 'REST', 'Cobra'],
			link: 'https://github.com/yhoundz/parm',
			rotation: '2deg',
			desc: 'Install anything from your terminal. Cross platform package installer and lifecycle manager using GitHub REST.'
		},
		{
			title: 'WHEY',
			subtitle: 'REGISTRY BACKEND',
			tags: ['.NET', 'Docker', 'PostgreSQL', 'Azure'],
			link: '',
			rotation: '-3deg',
			desc: 'Coming Soon... Stay tuned!'
		},
		{
			title: 'SOS',
			subtitle: 'APPLIED AI SIMULATIONS',
			tags: ['Python', 'ReinforcementLearning', 'Jupyter'],
			link: 'https://github.com/SGAI-Team-A/SOS',
			rotation: '1deg',
			desc: 'Simulation exploring risk-based decision making and ethical dilemnas by AI models in crisis scenarios.'
		},
		{
			title: 'HELLBOUND TO HEAVEN',
			subtitle: 'PLATFORMER',
			tags: ['GDScript', 'Godot'],
			link: 'https://github.com/yhoundz/hellbound-to-heaven',
			rotation: '-2deg',
			desc: 'Physics-based Platformer inspired by Jump King.'
		}
	];
</script>

<section id="projects" class="projects-chaos">
	<h2 class="section-title">
		<!-- <span class="outline">PROJECTS</span> -->
		<span class="filled">PROJECTS</span>
	</h2>

	<!-- Section subtext -->
	<div class="section-label">WORK // EXPERIMENTS</div>

	<!-- Additional subtext -->
	<div class="info-box">
		<div class="info-label">PROJECTS</div>
		<div class="info-value">04</div>
	</div>

	<div class="collage-container">
		{#each projects as project, i}
			<div class="project-wrapper item-{i}" style="transform: rotate({project.rotation});">
				<ChaosCard
					title={project.title}
					subtitle={project.subtitle}
					tags={project.tags}
					link={project.link}
					rotation="0deg"
					desc={project.desc}
				>
					<p>
						{project.desc}
					</p>
				</ChaosCard>
			</div>
		{/each}
	</div>

	<!-- Colored symbols/icons -->
	<div class="symbol s1">✱</div>
	<div class="symbol s2">✦</div>
	<div class="symbol s3">＋</div>

	<!-- Liquid blobs -->
	<div class="liquid-blob blob-1"></div>
	<div class="liquid-blob blob-2"></div>

	<!-- Abstract lines/shapes -->
	<div class="abstract-line l1"></div>
	<div class="abstract-line l2"></div>
	<div class="glass-shape g1"></div>
</section>

<style>
	.projects-chaos {
		position: relative;
		min-height: 150vh;
		padding: var(--spacing-xl) var(--spacing-md);
		background: var(--color-bg-main);
		overflow: hidden;
		animation: slideIn 0.8s ease-out;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.section-title {
		font-family: var(--font-display);
		font-size: clamp(4rem, 10vw, 10rem);
		line-height: 0.8;
		margin-bottom: var(--spacing-xl);
		position: relative;
		z-index: 10;
		pointer-events: none;
		color: var(--color-text-main);
		text-align: center;
	}

	.outline {
		display: block;
		-webkit-text-stroke: 2px var(--color-text-main);
		color: transparent;
	}

	.filled {
		display: block;
	}

	.collage-container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: var(--spacing-lg);
		padding: 0 var(--spacing-md);
	}

	.project-wrapper {
		transition: all 0.3s ease;
		min-height: 400px;
	}

	.project-wrapper:hover {
		z-index: 100;
	}

	/* Scattered positioning for visual interest */
	.item-0 {
		grid-column: 1;
	}
	.item-1 {
		grid-column: 2;
		margin-top: 60px;
	}
	.item-2 {
		grid-column: 1;
		margin-top: -40px;
	}
	.item-3 {
		grid-column: 2;
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

	.info-box {
		position: absolute;
		bottom: var(--spacing-md);
		left: var(--spacing-md);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		background: rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(0, 0, 0, 0.2);
		padding: 8px 12px;
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.info-label {
		font-weight: 700;
		letter-spacing: 0.1em;
	}

	.info-value {
		font-size: 1.2rem;
		font-weight: 700;
	}

	.symbol {
		position: absolute;
		font-size: 12rem;
		font-weight: 900;
		z-index: 0;
		opacity: 1;
		color: inherit;
		line-height: 1;
	}

	.s1 {
		top: 10%;
		left: 3%;
		color: var(--color-acid-green);
	}

	.s2 {
		bottom: 20%;
		right: 2%;
		color: var(--color-hot-pink);
		font-size: 20rem;
	}

	.s3 {
		top: 51%;
		left: 50%;
		color: var(--color-electric-blue);
		transform: rotate(45deg);
		font-size: 15rem;
	}

	.liquid-blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(50px);
		z-index: 0;
		pointer-events: none;
	}

	.blob-1 {
		top: 15%;
		right: 15%;
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, var(--color-neon-orange) 0%, transparent 70%);
		opacity: 0.15;
	}

	.blob-2 {
		bottom: 10%;
		left: 10%;
		width: 350px;
		height: 350px;
		background: radial-gradient(circle, var(--color-deep-purple) 0%, transparent 70%);
		opacity: 0.2;
		animation: pulse 6s ease-in-out infinite;
	}

	.abstract-line {
		position: absolute;
		width: 3px;
		height: 200px;
		background: linear-gradient(180deg, var(--color-acid-green), transparent);
		z-index: 0;
		opacity: 0.4;
		animation: slideIn 3s ease-out infinite;
	}

	.l1 {
		top: 30%;
		left: 20%;
		transform: rotate(25deg);
	}

	.l2 {
		bottom: 25%;
		right: 30%;
		height: 150px;
		background: linear-gradient(180deg, var(--color-hot-pink), transparent);
		transform: rotate(-15deg);
		animation-delay: 1s;
	}

	.glass-shape {
		position: absolute;
		background: rgba(255, 255, 255, 0.05);
		border: 2px solid rgba(255, 255, 255, 0.2);
		z-index: 0;
		animation: float 8s ease-in-out infinite;
	}

	.g1 {
		top: 40%;
		right: 5%;
		width: 100px;
		height: 100px;
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.2;
			transform: scale(1);
		}
		50% {
			opacity: 0.3;
			transform: scale(1.1);
		}
	}

	@keyframes slideIn {
		0% {
			opacity: 0;
			transform: translateY(-50px) rotate(25deg);
		}
		50% {
			opacity: 0.4;
		}
		100% {
			opacity: 0;
			transform: translateY(50px) rotate(25deg);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-20px) rotate(5deg);
		}
	}

	@media (max-width: 768px) {
		.collage-container {
			grid-template-columns: 1fr;
			gap: var(--spacing-lg);
		}

		.project-wrapper {
			position: relative !important;
			margin-top: 0 !important;
			transform: rotate(0deg) !important;
		}

		.section-title {
			font-size: 3rem;
		}
		.filled {
			margin-left: 0;
		}
	}

	@media (max-width: 480px) {
		.section-title {
			font-size: 2.5rem;
		}
	}
</style>
