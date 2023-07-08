<script>
  export let name = "Counter"
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<h2>{name}コンポーネント</h2>
<p>カウント: {count}</p>
<div><button on:click={increment}>Up</button></div>
