<p align="center">
<img alt="VueLockUI" title="vue secure lock logo" src="https://i.imgur.com/yKoJZrb.png" width="450">
</p>
<h1 align="center">Vue3 Lock UI</h1>
<p>A Vue library that empowers developers to easily integrate secure and user-friendly password-related UI components into their applications. </p>

<h2>Demo<h2><hr>
<img style="border:1px solid #dedede" src="https://i.imgur.com/HuudLm4.gif">

<h3>Key Features:</h3>
<ul>
    <li>Vue 3 support</li>
    <li>TypeScript support</li>
    <li>Easy integration: Can quickly incorporate VueSecureLock's features into application without extensive effort.</li>
    <li>Customizable: VueLockUI allows easy customization, enabling you to change colors and set expiration for state memory.</li>
    <li>Theming Support: The library provides light and dark theming support, allowing developers to match the password-related UI components with the overall design and branding of their Vue applications.</li>
    <li>Localization: Supports localization, making it easy for developers to translate and adapt the password-related UI components for a global audience</li>
</ul>

<h3>Installation</h3><hr>

```
npm install v-lock-ui
```

<h3>Usage</h3><hr>

<p>To use v-lock-ui, simply import component<p>

```js
import VLockUi from 'v-lock-ui'
``` 

<p>Then register it to vue components</p>

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

Full example:

``` vue
<template>
  <div class="home">
    <VLockUi Password="1234">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Hello World</h1>
    </VLockUi>
  </div>
</template>
<script setup lang="ts">
  import {defineComponent} from "vue";
  import VLockUi from 'v-lock-ui'
  defineComponent({
      components: {VLockUi}
  });
</script>
```


## Props:

- Password (Required)

  It uses to set the matching password that unlocks a UI element.

  ```
  Type: String 
  ```

  Example:

   ```vue
   <VLockUI Password="1234">
     <!--UI kits that you want to lock with password -->
   </VLockUI>
   ```

 - RememberState

   It uses to make enable/disable LockUI overlay with expiration minutes.
    
   ```
   Type: Object{enabled: Boolean, expiryMin: Number} 
   ```
   
   Example:
   
    ```vue
    <VLockUI :RememberState="{enabled: true, expiryMin: 10}" Password="1234">
      <!--UI kits that you want to lock with password -->
    </VLockUI>
    ```
 

 - Button Color

    It uses to customize a color for the unlock button

   ```
   Type: String 
   ```
   
    Example:

    ```vue
    <VLockUI ButtonColor="#008000" Password="1234">
      <!--UI kits that you want to lock with password -->
    </VLockUI>
    ```
   
 - #### Locked Color
   It uses to customize a color for lock icon in locked situation

   ```
   Type: String 
   ```
   
   Example:

     ```vue
     <VLockUI LockedColor="#e90000" Password="1234">
       <!--UI kits that you want to lock with password -->
     </VLockUI>
     ```

 - #### Unlocked Color
   To customize a color for icon in unlocked situation

   ```
   Type: String 
   ```
   
   Example:

   ```vue
   <VLockUI UnlockedColor="#e90000" Password="1234">
     <!--UI kits that you want to lock with password -->
   </VLockUI>
   ```

 - #### Title
   to change the title of the overlay.
    
   ```
   Type: String 
   ```
     
   Example:

      ```vue
      <VLockUI Title="This element is locked" Password="1234">
        <!--UI kits that you want to lock with password -->
      </VLockUI>
      ```

 - #### Subtitle
   to change the subtitle of the overlay.

   ```
   Type: String 
   ```

 - Example:

     ```vue
     <VLockUI Subtitle="Enter the password to unlock the element" Password="1234">
       <!--UI kits that you want to lock with password -->
     </VLockUI>
     ```

