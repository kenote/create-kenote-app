<template>
  <div v-if="$store.state.initialize.pending" class="initial-pending" :style="$store.state.initialize.progress === 100 && animation ? { animation } : {}">
    <div class="progress-span">Loading... {{ $store.state.initialize.progress }}%</div>
    <div class="layout-progress-bar">
      <div class="progress-bar-container">
        <div class="progress-bar-pending" :style="{ width: `${$store.state.initialize.progress}%` }" />
      </div>
    </div>
  </div>
  <div v-else class="app">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'initialize-component',
  props: {
    animation: {
      type: String,
      default: undefined
    },
    waitimes: {
      type: Number,
      default: 500
    }
  },
  mounted () {
    this.$store.dispatch('initialProgress', { pending: 65 })
    .then( () => {
      let { progress } = this.$store.state.initialize
      return this.$store.dispatch('initialProgress', { pending: 100 })
    })
    .then( () => {
      this.$store.dispatch('initialComplete', { times: this.waitimes })
    })
  },
}
</script>
