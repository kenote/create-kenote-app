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
    },
    progress: {
      type: Number,
      default: 60
    }
  },
  mounted () {
    this.$store.dispatch('initialProgress', { pending: this.progress })
  },
  watch: {
    progress (val) {
      if (val >= 100) {
        this.$store.dispatch('initialProgress', { pending: val })
        .then( () => {
          this.$store.dispatch('initialComplete', { times: this.waitimes })
        })
      }
      else {
        this.$store.dispatch('initialProgress', { pending: val })
      }
    }
  }
}
</script>
