<template>
  <vue-layout>
    <vue-header />
    <div class="page" :style="{ animation: 'pageMask 2.4s' }">
      <slot></slot>
    </div>
    <div class="page-loading" />
  </vue-layout>
</template>

<script>
import Layout from './components/layout.vue'
import Header from './header.vue'
export default {
  components: {
    'vue-layout': Layout,
    'vue-header': Header
  }
}
</script>

<style lang="scss">
.page {
  display: flex;
  height: inherit;
  max-width: 800px;
  margin: auto;
  position: relative;

  h1 {
    margin: auto;
  }
}

@keyframes pageMask {
  0% {
    opacity: 0;
    margin-top: 100px;
  }
  20% {
    opacity: .2;
    margin-top: 0;
  }
  40% {
    opacity: .4;
  }
  60% {
    opacity: .6;
  }
  80% {
    opacity: .8;
  }
  100% {
    opacity: 1;
  }
}

.page-loading {
  height: 4px;
  background: linear-gradient(to right, rgb(238, 92, 73), rgba(238, 92, 73, .8) 90%, rgba(238, 92, 73, 0) 100%);
  position: absolute;
  top: 0;
  padding: 0;
  transition: all .2s ;
  animation: pageLoading 3s;
}

@keyframes pageLoading {
  0% {
    width: 0;
  }
  80% {
    width: 100%;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
</style>
