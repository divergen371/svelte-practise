<script>
  import { writable } from "svelte/store"
  export let name = "Counter"
  const count = writable(0, set => {
    set(100)
  })
  const increment = () => {
    count.update(value => {
      console.log(value)
      return value + 1
    })
  }
</script>

<h2>{name}コンポーネント</h2>
<div>
  <p>カウント: {$count}</p>
</div>
<div>
  <button on:click={increment}>Up</button>
</div>
