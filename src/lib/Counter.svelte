<script>
  import { writable } from "svelte/store"
  export let name = "Counter"
  let countValue
  const count = writable(0, set => {
    set(100)
  })
  // count.subscribe(value => {
  //   countValue = value
  // })
  const increment = () => {
    count.update(value => {
      console.log(value)
      return value + 1
    })
  }
</script>

<h2>{name}コンポーネント</h2>
<!-- <div>
  <p>カウント: {countValue}</p>
</div> -->
<div>
  <button on:click={increment}>Up</button>
</div>
