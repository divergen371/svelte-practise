<script>
  export let name = "Counter"
  let count = 1
  const increment = () => {
    count += 1
  }
  $: double = count * 2
</script>

<h2>{name}コンポーネント</h2>
<div>
  <p>カウント: {count}</p>
  <p>ダブルカウント: {double}</p>
</div>
<div>
  <button on:click={increment}>Up</button>
</div>
