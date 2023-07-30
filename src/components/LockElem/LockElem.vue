<script lang="ts">
import {defineComponent} from "vue";
import OverLay from "./OverLay.vue"

export default defineComponent({
  name: "LockElem",
  components: {
    OverLay,
  }
})
</script>

<template>
  <div class="container">
    <OverLay :password="'123456'" :dark="false" :blur="true" />
    <slot/>
  </div>
</template>

<style lang="scss">
@import "./src/styles/index";
</style>
