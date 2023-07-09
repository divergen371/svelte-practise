<script>
  import { derived, writable } from "svelte/store"
  export let name
  let count = 0

  const increment = () => {
    count += 1
  }
</script>

<h2>{name} コンポーネント</h2>

<div>
  <p>count: {count}</p>
</div>

{#if count < 5}
  <div>
    <button on:click={increment}>Up</button>
  </div>
{:else}
  <p>これ以上増やせません</p>
{/if}
