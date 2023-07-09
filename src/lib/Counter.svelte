<script>
  import { writable } from "svelte/store"
  import { onDestroy } from "svelte"
  export let name = "Counter"
  let countValue
  const count = writable(0, () => {
    return () => {
      console.log("unsubscribe execute")
    }
  })
  const unsubscribe = count.subscribe(value => {
    countValue = value
  })
  const increment = () => {
    count.update(value => {
      console.log(value)
      return value + 1
    })
  }
  onDestroy(() => {
  unsubscribe()
  })
</script>

<h2>{name}コンポーネント</h2>
<div>
  <p>カウント: {$count}</p>
</div>
<div>
  <button on:click={increment}>Up</button>
</div>
