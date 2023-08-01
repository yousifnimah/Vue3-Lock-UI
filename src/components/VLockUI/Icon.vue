<template>
  <div class="switch-container">
    <label ref="switchLabel" class="switch">
      <input disabled type="checkbox" :checked="locked">
      <span id="switch-slider" class="switch-slider"><em></em><strong></strong></span>
    </label>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, onMounted, ref, watch} from "vue";
const switchLabel :any= ref(null);

const props = defineProps({
  LockedColor: {
    type: String,
    default: '#ee9828'
  },
  UnlockedColor: {
    type: String,
    default: '#d3d3d3'
  },
  locked: {
    type: Boolean,
    default: true
  }
})

watch(() => props.locked, () => {
  updateStyle()
});

const updateStyle = () => {
  const spanSlider = switchLabel.value.querySelector(".switch-slider");
  if (props.locked) {
    spanSlider.style.setProperty('--background', props.LockedColor);
  } else {
    spanSlider.style.setProperty('--background', props.UnlockedColor);
  }
}

onMounted(() => {
  updateStyle()
})

defineComponent({
  name: "LockedIcon",
})
</script>

<style scoped>
.switch-slider::before {
  background: var(--background)!important;
}
.switch-slider em {
  background: var(--background)!important;
}
.switch-slider em:after {
  border-color: var(--background)!important;
}
</style>
