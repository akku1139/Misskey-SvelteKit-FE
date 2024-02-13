<script lang="ts">
import { streaming } from "$lib/misskey/streaming.ts";

streaming.send(JSON.stringify({"type":"connect","body":{"channel":"homeTimeline","id":"1","params":{"withRenotes":true}}}));

let messages = [];

streaming.addEventListener("message", (e) => {
  messages.push(e);
});
</script>

{#each messages as message}
JSON.stringify(message)
{/each}
