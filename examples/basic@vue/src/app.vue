<template>
  <div id="root">
    <initialize-component :animation="animation" :waitimes="waitimes" :progress="progress">
      <router-view></router-view>
    </initialize-component>
  </div>
</template>

<script>
var initialOptions = null
try {
  initialOptions = __INITIALIZE__
} catch (error) {
  
}

export default {
  data () {
    return {
      animation: '',
      waitimes: 500,
      progress: 60,
      ...initialOptions
    }
  },
  mounted () {
    setTimeout(() => {
      this.progress = 80
      setTimeout(() => {
        this.progress = 100
      }, 500)
    }, 500)
  },
}
</script>

<style lang="scss" >
@import './styles/common.scss'
</style>
