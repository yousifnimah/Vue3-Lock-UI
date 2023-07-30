<template>
  <div class="switch-container">
    <label class="switch">
      <input disabled type="checkbox" :checked="locked">
      <span><em></em><strong></strong></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "LockedIcon",
  props: {
    locked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>
