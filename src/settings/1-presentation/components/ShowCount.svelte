<script lang="ts">
  import { getCount } from "../../2-application/settings.facade";

  let count: number = 0;

  getCount((newCount) => {
    count = newCount;
  });
</script>

<div>Otro componenteeee: {count}</div>
