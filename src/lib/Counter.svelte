<script>
  import { beforeUpdate, onDestroy, onMount, afterUpdate } from "svelte"
  export let name

  beforeUpdate(() => {
    console.log("beforeUpdate execute")
  })

  onMount(() => {
    console.log("onMount execute")
  })

  onDestroy(() => {
    console.log("onDestroy execute")
  })

  afterUpdate(() => {
    console.log("afterUpdate execute")
  })
  console.log("script execute")
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<h2>{name} コンポーネント</h2>
<div>
  <p>カウント: {count}</p>
</div>

<div>
  <button on:click={increment}>Up</button>
</div>