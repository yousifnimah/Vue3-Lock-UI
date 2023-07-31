<p align="center">
  <img alt="VueLockUI" title="vue lock ui logo" src="https://i.imgur.com/yKoJZrb.png" width="450">
</p>
<h1 align="center">Vue3 Lock UI</h1>


A Vue library that empowers developers to easily integrate secure and user-friendly password-related UI components into their applications.

## Demo

---

<img style="border: 1px solid #dedede" src="https://i.imgur.com/HuudLm4.gif">

## Key Features:

- Vue 3 support
- TypeScript support
- Easy integration: Can quickly incorporate VueSecureLock's features into the application without extensive effort.
- Customizable: VueLockUI allows easy customization, enabling you to change colors and set expiration for state memory.
- Theming Support: The library provides light and dark theming support, allowing developers to match the password-related UI components with the overall design and branding of their Vue applications.
- Localization: Supports localization, making it easy for developers to translate and adapt the password-related UI components for a global audience.


<h3>Installation</h3><hr>

```
npm install v-lock-ui
```

<h3>Usage</h3><hr>

<p>To use VueLockUI, simply import the component:<p>

```js
import VLockUi from 'v-lock-ui'
``` 

<p>Then register it as a Vue component:</p>

```vue
defineComponent({
  components: {VLockUi}
});
```

Last step, inside the template add any element or UI component into it and set the **password** that you want to match with.

```vue

<template>
  <div class="home">
    <VLockUi Password="1234">
      <!--UI kits that you want to lock with password -->
    </VLockUi>
  </div>
</template>
```

Full Example:

``` vue
<template>
  <div class="home">
    <VLockUI Password="1234">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </VLockUI>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import VLockUI from "@/components/VLockUI/VLockUI.vue";

defineComponent({
  name: "HomeView",
  components: {
    VLockUI,
    HelloWorld
  }
});
</script>
```

## Props:

- Password (Required)

  Set the matching password that unlocks a UI element.

  ```
  Type: String 
  ```

  Example:

   ```vue
   <VLockUI Password="1234">
     <!--UI kits that you want to lock with password -->
   </VLockUI>
   ```

<hr />

- RememberState

  Enable/disable LockUI overlay with expiration minutes.

  ```
  Type: Object{enabled: Boolean, expiryMin: Number} 
  ```

  Example:

   ```vue
   <VLockUI :RememberState="{enabled: true, expiryMin: 10}" Password="1234">
     <!--UI kits that you want to lock with password -->
   </VLockUI>
   ```

<hr />

- Button Color

  Customize the color for the unlock button.

  ```
  Type: String 
  ```

  Example:

   ```vue
   <VLockUI ButtonColor="#008000" Password="1234">
     <!--UI kits that you want to lock with password -->
   </VLockUI>
   ```

<hr />

- Locked Color

  Customize the color for the lock icon in a locked situation.

  ```
  Type: String 
  ```

  Example:

    ```vue
    <VLockUI LockedColor="#e90000" Password="1234">
      <!--UI kits that you want to lock with password -->
    </VLockUI>
    ```

<hr />

- Unlocked Color

  Customize the color for the icon in an unlocked situation.

  ```
  Type: String 
  ```

  Example:

  ```vue
  <VLockUI UnlockedColor="#e90000" Password="1234">
    <!--UI kits that you want to lock with password -->
  </VLockUI>
  ```

<hr />

- Title

  Change the title of the overlay.

  ```
  Type: String 
  ```

  Example:

     ```vue
     <VLockUI Title="This element is locked" Password="1234">
       <!--UI kits that you want to lock with password -->
     </VLockUI>
     ```

<hr />

- Subtitle

  Change the subtitle of the overlay.

  ```
  Type: String 
  ```

  Example:

    ```vue
    <VLockUI Subtitle="Enter the password to unlock the element" Password="1234">
      <!--UI kits that you want to lock with password -->
    </VLockUI>
    ```

<hr />

- ButtonText

  Change the text of the unlock button.

   ```
   Type: String 
   ```

  Example:

    ```vue
    <VLockUI ButtonText="Click button" Password="1234">
      <!--UI kits that you want to lock with password -->
    </VLockUI>
    ```

<hr />

- Dark

  Support dark theme.

   ```
   Type: Boolean 
   ```

  Example:

    ```vue
    <VLockUI :Dark="true" Password="1234">
      <!--UI kits that you want to lock with password -->
    </VLockUI>
    ```

<hr />

- Blur

  Change the background to a backdrop blur.

    ```
    Type: Boolean 
    ```

  Example:

    ```vue
    <VLockUI :Blur="true" Password="1234">
      <!--UI kits that you want to lock with password -->
    </VLockUI>
    ```

## Functions:

- ### lock()
  This function is used to lock elements. Here is an example of how to use it:

```vue

<template>
  <div class="home">
    <VLockUI ref="VLockUIRef" LockedColor="#e90000" Password="1234">
      <!--UI kits that you want to lock with password -->
    </VLockUI>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, ref} from "vue";
import VLockUI from "@/components/VLockUI/VLockUI.vue";

const VLockUIRef = ref(null)
VLockUI.value.lock() //This function used to lock elements 

defineComponent({
  components: {VLockUI}
});

</script>

```


## Contributing
Contributions are welcome! If you find any issues or want to add new features or improvements, please create a pull request.

## Acknowledgments

Special thanks to all the contributors who have helped in the development and improvement of Vue3 Lock UI. Your valuable contributions have made this project possible and better.

We would also like to express our gratitude to the Vue.js community for their continuous support, feedback, and inspiration.

This project is built upon the great work of the Vue.js team and the Vue ecosystem, which has provided a solid foundation for the development of Vue3 Lock UI.

Thank you to all the open-source projects and libraries that have been utilized in this project, as they have played a crucial role in enhancing the functionality and user experience of Vue3 Lock UI.

