<script>
  import Counter from "./lib/Counter.svelte"
  export let name
</script>

<main>
  <h1>Hello {name}</h1>
  <p>
    Visit the <a href="https://svslte.dev/tutorual">Svelte Tutorial</a> to learn
    how to build Svelte service.
  </p>
  <Counter />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    min-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      min-width: none;
    }
  }
</style>
