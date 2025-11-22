<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
					}
				});
			},
			{ threshold: 0.2 }
		);

		const section = document.querySelector('#about');
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	});

	const skills = [
		{ name: 'GOLANG', color: 'var(--color-acid-green)', rotate: '-5deg' },
		{ name: 'C#', color: 'var(--color-hot-pink)', rotate: '3deg' },
		{ name: 'JAVA', color: 'var(--color-electric-blue)', rotate: '-2deg' },
		{ name: 'C', color: 'var(--color-neon-orange)', rotate: '4deg' },
		{ name: 'PYTHON', color: 'var(--color-deep-purple)', rotate: '-3deg' },
		{ name: 'GIT', color: 'white', bg: 'black', rotate: '2deg' },
		{ name: 'TYPESCRIPT', color: 'var(--color-acid-green)', rotate: '-4deg' },
		{ name: 'REST', color: 'var(--color-hot-pink)', rotate: '5deg' },
		{ name: 'gRPC', color: 'var(--color-electric-blue)', rotate: '-2deg' },
		{ name: 'SVELTE', color: 'var(--color-neon-orange)', rotate: '4deg' }
	];
</script>

<section id="about" class="about-chaos">
	<div class="chaos-container">
		<!-- Sticky Header -->
		<div class="header-col">
			<h2 class="vertical-title">
				WHO<br />AM<br />I?
			</h2>
		</div>

		<!-- Content Explosion -->
		<div class="content-col">
			{#if visible}
				<!-- Massive Bio Text -->
				<div class="bio-block">
					<p class="giant-text" in:fly={{ y: 100, duration: 800 }}>
						<span class="font-display">HELLO,</span> I'M
						<span class="highlight">ALEX</span>.
						<br /><br /> I AM A 2ND YEAR
						<span class="font-serif italic">COMPUTER SCIENCE</span>
						<span class="highlight">STUDENT</span> INTERESTED IN BACKEND
						<span class="font-mono glitch-text">SYSTEMS</span> &
						<span class="font-display text-red">INFRASTRUCTURE</span>.
					</p>

					<p class="giant-text delay-1" in:fly={{ y: 100, duration: 800, delay: 200 }}>
						OPEN TO <span class="sticker-text">SUMMER 2026</span>
						OPPORTUNITIES. <br />
					</p>
				</div>

				<!-- Sticker Bomb Skills -->
				<div class="sticker-bomb">
					{#each skills as skill, i}
						<div
							class="sticker"
							style="
								--rotate: {skill.rotate}; 
								--color: {skill.color}; 
								--bg: {skill.bg || 'black'};
								top: {Math.random() * 20 - 10}px;
								left: {Math.random() * 20 - 10}px;
							"
							in:fly={{ y: 200, duration: 600, delay: 400 + i * 50 }}
						>
							<span class="sticker-content">{skill.name}</span>
							<div class="barcode">||| || |||</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- Raw Background Elements -->
	<div class="tape-strip"></div>
	<div class="torn-paper"></div>
</section>

<style>
	.about-chaos {
		position: relative;
		min-height: 100vh;
		background-color: var(--color-bg-secondary);
		padding: var(--spacing-xl) var(--spacing-md);
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.chaos-container {
		max-width: var(--container-width);
		width: 100%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 12rem; /* Increased spacing */
	}

	/* Sticky Vertical Header */
	.header-col {
		position: relative;
		height: 100%;
	}

	.vertical-title {
		position: sticky;
		top: 20vh;
		font-family: var(--font-display);
		font-size: 7rem;
		line-height: 0.8;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		transform: rotate(180deg);
		color: black;
		text-shadow: 8px 8px 0px var(--color-acid-green);
		white-space: nowrap;
	}

	/* Content Column */
	.content-col {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
		position: relative;
		padding-top: var(--spacing-lg); /* Push content down slightly */
	}

	/* Giant Typography */
	.giant-text {
		font-family: var(--font-body);
		font-weight: 800;
		font-size: clamp(2.5rem, 5vw, 5rem);
		line-height: 0.9;
		color: black;
		text-transform: uppercase;
		margin-bottom: var(--spacing-lg);
	}

	.font-serif {
		font-family: var(--font-serif);
		font-weight: 400;
	}
	.italic {
		font-style: italic;
	}
	.font-mono {
		font-family: var(--font-mono);
		letter-spacing: -0.05em;
	}
	.font-display {
		font-family: var(--font-display);
	}

	.highlight {
		background: var(--color-acid-green);
		padding: 0 10px;
		color: black;
		display: inline-block;
		transform: skewX(-10deg);
	}

	.text-red {
		color: var(--color-neon-orange);
		text-shadow: 4px 4px 0px black;
	}

	.sticker-text {
		background: black;
		color: white;
		padding: 5px 15px;
		transform: rotate(-2deg);
		display: inline-block;
		font-family: var(--font-mono);
	}

	/* Glitch Effect */
	.glitch-text {
		position: relative;
		display: inline-block;
	}

	.glitch-text::before,
	.glitch-text::after {
		content: 'SYSTEMS';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-bg-secondary);
	}

	.glitch-text::before {
		left: 2px;
		text-shadow: -1px 0 var(--color-hot-pink);
		clip: rect(24px, 550px, 90px, 0);
		animation: glitch-anim-2 3s infinite linear alternate-reverse;
	}

	.glitch-text::after {
		left: -2px;
		text-shadow: -1px 0 var(--color-electric-blue);
		clip: rect(85px, 550px, 140px, 0);
		animation: glitch-anim 2.5s infinite linear alternate-reverse;
	}

	@keyframes glitch-anim {
		0% {
			clip: rect(14px, 9999px, 127px, 0);
		}
		20% {
			clip: rect(82px, 9999px, 13px, 0);
		}
		40% {
			clip: rect(49px, 9999px, 97px, 0);
		}
		60% {
			clip: rect(122px, 9999px, 55px, 0);
		}
		80% {
			clip: rect(36px, 9999px, 39px, 0);
		}
		100% {
			clip: rect(68px, 9999px, 16px, 0);
		}
	}

	@keyframes glitch-anim-2 {
		0% {
			clip: rect(65px, 9999px, 100px, 0);
		}
		20% {
			clip: rect(12px, 9999px, 56px, 0);
		}
		40% {
			clip: rect(95px, 9999px, 18px, 0);
		}
		60% {
			clip: rect(13px, 9999px, 82px, 0);
		}
		80% {
			clip: rect(129px, 9999px, 45px, 0);
		}
		100% {
			clip: rect(42px, 9999px, 118px, 0);
		}
	}

	/* Sticker Bomb */
	.sticker-bomb {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
		position: relative;
	}

	.sticker {
		position: relative;
		background: var(--bg);
		color: var(--color);
		padding: 10px 20px;
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: 1.2rem;
		border: 2px solid var(--color);
		transform: rotate(var(--rotate));
		box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
		transition: transform 0.2s ease;
		cursor: default;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
	}

	.sticker:hover {
		transform: scale(1.1) rotate(0deg) !important;
		z-index: 10;
		box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.4);
	}

	.barcode {
		height: 10px;
		font-size: 8px;
		letter-spacing: 2px;
		opacity: 0.5;
		background: repeating-linear-gradient(
			90deg,
			var(--color),
			var(--color) 1px,
			transparent 1px,
			transparent 3px
		);
		width: 100%;
	}

	/* Decor */
	.tape-strip {
		position: absolute;
		top: 10%;
		right: -5%;
		width: 300px;
		height: 50px;
		background: rgba(255, 255, 255, 0.2);
		transform: rotate(45deg);
		backdrop-filter: blur(5px);
		border: 1px dashed rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 968px) {
		.chaos-container {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
		}

		.vertical-title {
			writing-mode: horizontal-tb;
			transform: rotate(0deg);
			font-size: 4rem;
			margin-bottom: var(--spacing-lg); /* Increased margin for mobile separation */
			position: relative;
			top: 0;
			text-shadow: 4px 4px 0px var(--color-acid-green);
		}

		.giant-text {
			font-size: 2.5rem;
		}
	}
</style>
