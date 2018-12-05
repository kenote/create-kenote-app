<template>
  <div class="layout-warpper">
    <Header :navs="navs" />
    <nuxt class="page" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

interface NavItem {
  key: string | number
  name: string
  link: string
}

@Component({})
export default class  extends Vue {

  data () {
    return {
      navs: Array<NavItem> (
        {
          key: 0,
          name: 'Home',
          link: '/'
        },
        {
          key: 1,
          name: 'About',
          link: '/about'
        }
      )
    }
  }

  mounted () {
    
  }
}
</script>


<style lang="scss">
@import '~/assets/scss/page.scss';
.layout-warpper {
  height: inherit;
}
</style>
