<script lang="ts">
  import {
    getCount,
    increment,
    decrement,
    reset,
  } from "../../2-application/settings.facade";

  let count: number = 0;

  getCount((newCount) => {
    count = newCount;
  });
</script>

<button on:click={increment}>
  Increment: {count}
</button>

<button on:click={decrement}>
  Decrement: {count}
</button>

<button on:click={reset}>
  Reset: {count}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
