<script>
	export let title = '';
	export let subtitle = '';
	export let tags = [];
	export let link = '';
	export let rotation = '0deg'; // Random rotation passed from parent
	export let desc = '';
</script>

<div class="chaos-card" style="--rotation: {rotation}">
	<div class="card-inner">
		<div class="card-content">
			{#if title}
				<div class="card-header">
					<h3 class="card-title">{title}</h3>
					{#if subtitle}
						<span class="card-subtitle">{subtitle}</span>
					{/if}
				</div>
			{/if}

			<div class="card-body">
				<slot />
			</div>

			{#if tags.length > 0 || link}
				<div class="card-footer">
					{#if tags.length > 0}
						<div class="tags">
							{#each tags as tag}
								<span class="tag">#{tag}</span>
							{/each}
						</div>
					{/if}

					{#if link}
						<a href={link} target="_blank" rel="noopener noreferrer" class="card-link">
							VISIT ->
						</a>
					{/if}
				</div>
			{/if}
		</div>
	</div>

	<!-- Decorative Elements -->
	<div class="shard shard-1"></div>
	<div class="shard shard-2"></div>
</div>

<style>
	.chaos-card {
		position: relative;
		width: 100%;
		height: 100%;
		transform: rotate(var(--rotation));
		transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		z-index: 1;
	}

	.chaos-card:hover {
		transform: rotate(0deg) scale(1.08);
		z-index: 100;
	}

	.card-inner {
		background: rgba(240, 240, 240, 0.95);
		border: 3px solid rgba(0, 0, 0, 0.8);
		padding: var(--spacing-md);
		height: 100%;
		display: flex;
		flex-direction: column;
		clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%);
		box-shadow:
			15px 15px 0px rgba(0, 0, 0, 0.15),
			0 0 40px rgba(204, 255, 0, 0.2);
		transition: all 0.3s ease;
	}

	.chaos-card:hover .card-inner {
		background: rgba(255, 255, 255, 1);
		box-shadow:
			25px 25px 0px var(--color-acid-green),
			0 0 60px var(--color-hot-pink);
		border-color: #000;
		transform: translateY(-5px);
	}

	.card-content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: var(--spacing-sm);
	}

	.card-title {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 800;
		color: var(--color-text-main);
		line-height: 0.9;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
		transform: translateX(-10px);
	}

	.card-subtitle {
		font-family: var(--font-mono);
		font-size: 0.9rem;
		color: var(--color-deep-purple);
		background: var(--color-acid-green);
		padding: 2px 8px;
		display: inline-block;
	}

	.card-body {
		font-family: var(--font-body);
		font-size: 1.1rem;
		line-height: 1.4;
		flex-grow: 1;
	}

	.card-footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-top: var(--spacing-md);
		flex-wrap: wrap;
		gap: var(--spacing-sm);
		border-top: 2px solid #000;
		padding-top: var(--spacing-sm);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 700;
		color: var(--color-text-muted);
	}

	.card-link {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.2rem;
		color: var(--color-text-main);
		text-decoration: none;
		background: var(--color-electric-blue);
		color: white;
		padding: 5px 15px;
		transform: rotate(-2deg);
		transition: transform 0.2s;
	}

	.card-link:hover {
		transform: rotate(2deg) scale(1.1);
		background: var(--color-hot-pink);
	}

	/* Shards */
	.shard {
		position: absolute;
		background: var(--color-hot-pink);
		z-index: -1;
		opacity: 0;
		transition: all 0.3s ease;
	}

	.chaos-card:hover .shard {
		opacity: 1;
	}

	.shard-1 {
		top: -10px;
		right: -10px;
		width: 50px;
		height: 50px;
		clip-path: polygon(0 0, 100% 0, 0 100%);
	}

	.shard-2 {
		bottom: -10px;
		left: -10px;
		width: 40px;
		height: 40px;
		background: var(--color-electric-blue);
		clip-path: polygon(100% 100%, 100% 0, 0 100%);
	}
</style>
