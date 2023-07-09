<script>
  import { onMount } from "svelte"
  let users = []
  onMount(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
    users = data
  })
</script>

<h2>ユーザー一覧</h2>
<ul>
  {#each users as user}
    <li>{user.name}</li>
  {/each}
</ul>
