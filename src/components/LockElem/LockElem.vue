<template>
  <div class="container">
    <div v-if="!Secured" class="overlay" :class="{'overlay-light': !dark, 'overlay-dark': dark}">
      <form @submit.prevent="unlock" class="overlay-content">
        <div class="box">
          <Icon :locked-color="LockedColor" :locked="Locked"/>
          <h2 class="overlay-title">{{ title }}</h2>
          <p class="overlay-subtitle">{{ subtitle }}</p>
          <input ref="password" v-model="InputPassword" autofocus class="overlay-input" :class="{'shake-animation': shakeAnimation, 'has-error': msg !== ''}" type="password" id="password" name="password">
          <button type="submit" :style="{'background-color': ButtonColor}" class="overlay-button">{{ buttonText }}</button>
        </div>
      </form>
      <div class="overlay-bg" :class="{'blur': blur}"/>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, defineProps, onMounted, ref} from "vue";
import Icon from "./Icon.vue";

const props = defineProps({
  ButtonColor: {
    type: String,
    default: '#ee9828'
  },
  LockedColor: {
    type: String,
    default: '#ee9828'
  },
  UnLockedColor: {
    type: String,
    default: '#d3d3d3'
  },
  rememberState: {
    type: Object,
    default: () => {
      return {enabled: true, expiryMin: 10}
    },
  },
  password: {
    type: String,
    default: null
  },
  dark: {
    type: Boolean,
    default: false
  },
  blur: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "This element is locked"
  },
  subtitle: {
    type: String,
    default: "Enter the password to unlock this element"
  },
  buttonText: {
    type: String,
    default: "Unlock"
  }
})

const InputPassword: any = ref(null);
const Locked = ref(true);
const Secured = ref(false);
const msg = ref("");
const shakeAnimation = ref(false)

const lock = () => {
  localStorage.removeItem('Expiry')
}

const unlock = () => {
  msg.value = "";
  if (InputPassword.value === props.password) {
    Locked.value = false;
    setTimeout(() => {
      Secured.value = true
      SetCacheState()
    }, 1000);
  } else {
    msg.value = "Wrong password";
    shakeAnimation.value = true
    setTimeout(() => {
      shakeAnimation.value = false
    }, 1000)
  }
};

const SetCacheState = () => {
  if (props.rememberState?.enabled) {
    const ExpirationMinutes = props.rememberState.expiryMin
    const Expiry = addMinutesToCurrentDateTime(ExpirationMinutes)
    localStorage.setItem('Expiry', Expiry.toString())
  }
}

const CheckCachedState = () => {
  let Expiry = null
  if (props.rememberState?.enabled) {
    Expiry = localStorage.getItem('Expiry')
    Secured.value = isValidCacheState(Expiry)
  }
}

const isValidCacheState = (Expiry: any) => {
  if (!Expiry || isExpired(Expiry)) {
    localStorage.removeItem('Expiry')
    return false
  }
  return true
}

const addMinutesToCurrentDateTime = (minutes: any) => {
  const now = new Date();
  // 60000 milliseconds in a minute
  return new Date(now.getTime() + minutes * 60000);
}

const isExpired = (targetDateTime: any) => {
  const currentDateTime = new Date();
  const targetDateTimeObj = new Date(targetDateTime);

  return targetDateTimeObj <= currentDateTime;
}


onMounted(() => {
  CheckCachedState()
})

defineComponent({
  name: "LockElem",
  components: {
    Icon
  }
});
</script>

<style lang="scss">
@import "./src/styles/index";
</style>
