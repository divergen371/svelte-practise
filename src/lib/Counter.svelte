<script>
  export let name = "Counter"
  let count = 0
</script>

<h2>{name}コンポーネント</h2>
<p>カウント: {count}</p>
<div>
  <button on:click={() => (count += 1)}>Up</button>
</div>
