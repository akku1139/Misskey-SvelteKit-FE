<script lang="ts">
import Sidebar from "./sidebar.svelte";
</script>

<style>
#container {
  display: grid;
  grid-template:
    "side top  panel" auto
    "side main panel" auto /
    auto  auto auto ;
}
</style>

<div id="container">
  <div id="top" style="grid-area: top;">top</div>
  <div id="sidebar" style="grid-area: side;"><Sidebar /></div>
  <div id="contents" style="grid-area: main;"><slot></slot></div>
  <div id="panel" style="grid-area: panel;">panel</div>
</div>
