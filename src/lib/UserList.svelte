<script>
  import { onMount } from "svelte"
  onMount(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
  })
</script>

<h2>ユーザー一覧</h2>