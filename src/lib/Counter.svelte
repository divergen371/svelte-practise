<script>
  import { derived, writable } from "svelte/store"
  export let name

  const count = writable(0)
  const doubleCount = derived(count, $count => $count * 2)

  const increment = () => {
    count.update(value => {
      return value + 1
    })
  }
</script>

<h2>{name} コンポーネント</h2>

<div>
  <p>count: {$count}</p>
  <p>doubleCount: {$doubleCount}</p>
</div>

<div>
  <button on:click={increment}>Up</button>
</div>