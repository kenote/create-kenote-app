<template>
  <vue-layout>
    <core-header />
    <div class="page" :style="{ animation: 'pageMask 2.4s' }">
      <slot></slot>
    </div>
    <div class="page-loading" />
  </vue-layout>
</template>

<script>
import Layout from '../components/layout.vue'
import Header from './core-header.vue'
export default {
  components: {
    'vue-layout': Layout,
    'core-header': Header
  }
}
</script>

<style lang="scss">
@import '../styles/page.scss';
@import '../styles/page-loading.scss';
</style>
