<template>
  <div>
    <VLockUI Password="1234">
      <h1>Hello</h1>
    </VLockUI>
  </div>
</template>

<script setup lang="ts">
import VLockUI from "@/components/VLockUI/VLockUI.vue";
import {defineComponent} from "vue";

defineComponent({
  name: "App",
  components: {VLockUI}
})
</script>

<style lang="scss"></style>
