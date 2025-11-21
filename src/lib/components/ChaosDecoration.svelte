<script>
  import { onMount } from 'svelte';

  const words = ["SYSTEM", "ERROR", "NULL", "CHAOS", "GLITCH"];
  const shapes = ["circle", "rect"];
  
  let elements = [];

  onMount(() => {
    // Reduced to 5 elements for performance
    for (let i = 0; i < 5; i++) {
      elements.push({
        type: Math.random() > 0.5 ? 'text' : 'shape',
        content: words[Math.floor(Math.random() * words.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        rotation: Math.random() * 360 + 'deg',
        scale: 0.5 + Math.random() * 1,
        opacity: 0.05 + Math.random() * 0.15,
        animationDuration: 10 + Math.random() * 20 + 's'
      });
    }
  });
</script>

<div class="chaos-layer">
  {#each elements as el}
    <div 
      class="chaos-element {el.type}"
      style="
        top: {el.top};
        left: {el.left};
        transform: rotate({el.rotation}) scale({el.scale});
        opacity: {el.opacity};
        animation-duration: {el.animationDuration};
      "
    >
      {#if el.type === 'text'}
        {el.content}
      {:else}
        <div class="shape {el.shape}"></div>
      {/if}
    </div>
  {/each}
  
  <!-- Liquid glass panes with maximalist colors -->
  <div class="glass-pane p1"></div>
  <div class="liquid-orb orb-1"></div>
  <div class="liquid-orb orb-2"></div>
</div>

<style>
  .chaos-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .chaos-element {
    position: absolute;
    font-family: var(--font-mono);
    font-weight: 700;
    color: var(--color-text-muted);
    animation: float infinite ease-in-out;
    will-change: transform;
  }

  .shape {
    background: var(--color-acid-green);
    opacity: 0.3;
  }

  .shape.circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .shape.rect {
    width: 60px;
    height: 90px;
    background: var(--color-electric-blue);
  }

  .glass-pane {
    position: absolute;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1;
    will-change: transform;
  }

  .p1 {
    top: 20%;
    right: 10%;
    width: 200px;
    height: 300px;
    transform: rotate(15deg);
    animation: floatSlow 20s infinite ease-in-out;
  }

  .liquid-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    z-index: 1;
    animation: floatSlow 15s infinite ease-in-out;
  }

  .orb-1 {
    top: 30%;
    left: 20%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--color-hot-pink) 0%, transparent 70%);
    animation-delay: -5s;
  }

  .orb-2 {
    bottom: 20%;
    right: 25%;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, var(--color-electric-blue) 0%, transparent 70%);
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(var(--rotation)); }
    50% { transform: translate(20px, -20px) rotate(var(--rotation)); }
  }

  @keyframes floatSlow {
    0%, 100% { transform: rotate(15deg) translate(0, 0); }
    50% { transform: rotate(15deg) translate(15px, -15px); }
  }
</style>
