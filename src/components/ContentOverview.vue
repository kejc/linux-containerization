<template>
  <aside id="content-overview" class="sidebar">
    <ul>
      <li v-for="i in 16"
        v-bind:key="i">
        Example Content
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
};
</script>
