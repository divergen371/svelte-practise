<script>
  import { readable, writable } from "svelte/store"
  export let name

  const time = readable(null, set => {
    set(new Date())

    const interval = setInterval(() => {
      set(new Date())
    }, 1000)
  })
</script>

<h2>{name} コンポーネント</h2>

<div>{$time}</div>