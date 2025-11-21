<script>
  export let shape = "circle"; // circle, triangle, heart, abstract
  export let size = 200;
  export let top = "10%";
  export let left = "10%";
  export let rotation = "0deg";
</script>

<div 
  class="dithered-shape {shape}"
  style="
    width: {size}px;
    height: {size}px;
    top: {top};
    left: {left};
    transform: rotate({rotation});
  "
></div>

<style>
  .dithered-shape {
    position: absolute;
    z-index: 0;
    pointer-events: none;
    opacity: 0.6;
    /* Dither/threshold effect using filter */
    filter: contrast(1000%) brightness(1.5);
    image-rendering: pixelated;
  }

  .circle {
    background: radial-gradient(
      circle at 40% 40%,
      black 0%,
      black 30%,
      transparent 30%,
      transparent 35%,
      black 35%,
      black 50%, 
      transparent 50%
    );
    border-radius: 50%;
  }

  .triangle {
    width: 0 !important;
    height: 0 !important;
    border-left: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 200px solid black;
    filter: url(#threshold);
  }

  .heart {
    background: 
      radial-gradient(circle at 33% 0%, black 30%, transparent 30%),
      radial-gradient(circle at 67% 0%, black 30%, transparent 30%),
      linear-gradient(180deg, transparent 30%, black 30%, black 80%, transparent 80%);
    clip-path: polygon(
      50% 100%,
      0% 40%,
      0% 20%,
      20% 0%,
      40% 0%,
      50% 10%,
      60% 0%,
      80% 0%,
      100% 20%,
      100% 40%
    );
  }

  .abstract {
    background: 
      repeating-conic-gradient(
        from 0deg,
        black 0deg 15deg,
        transparent 15deg 30deg
      );
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
  }
</style>
