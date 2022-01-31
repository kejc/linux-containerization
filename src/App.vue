<template>
  <div id="site-wrapper">
    <Header />
    <ContentOverview />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ContentOverview from '@/components/ContentOverview.vue';

export default {
  beforeCreate() {
    this.$store.commit('initLocalStorageCache');
  },

  components: {
    ContentOverview,
    Header,
  },
};
</script>

<style lang="scss">
@use './assets/scss/app.scss';
</style>
