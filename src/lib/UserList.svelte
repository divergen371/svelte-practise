<script>
  import { onMount } from "svelte"
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    if (response.ok) {
      return users
    } else {
      throw new Error(response.status)
    }
  }
  let promise = fetchUsers()
</script>

<h2>ユーザー一覧</h2>
{#await promise}
  <p>Loading...</p>
{:then users}
  <ul>
    {#each users as user}
      <li>{user.name}</li>
    {/each}
  </ul>
{:catch error}
  <!-- promise was rejected -->
  <p>Something went wrong: {error.message}</p>
{/await}
