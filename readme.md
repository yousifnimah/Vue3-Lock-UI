<p align="center">
<img alt="VueSecureLock" title="vue secure lock logo" src="https://i.imgur.com/yKoJZrb.png" width="450">
</p>
<h1 align="center">Vue Secure Lock</h1>
<p>A Vue library that empowers developers to easily integrate secure and user-friendly password-related UI components into their applications. </p>

<h3>Key Features:</h3>
<ul>
    <li>Vue 3 support</li>
    <li>TypeScript support</li>
    <li>Easy integration: Can quickly incorporate VueSecureLock's features into application without extensive effort.</li>
    <li>Customizable: VueSecureLock allows easy customization, enabling you to change colors and set expiration for state memory.</li>
    <li>Theming Support: The library provides light and dark theming support, allowing developers to match the password-related UI components with the overall design and branding of their Vue applications.</li>
    <li>Localization: Supports localization, making it easy for developers to translate and adapt the password-related UI components for a global audience</li>
</ul>

<h3>Installation</h3><hr>

```
npm install vuesecurelock
```

<h3>Using with Vue3</h3><hr>

```
<template>
  <div class="home">
    <LockElem :password="'1234'">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Hello World</h1>
    </LockElem>
  </div>
</template>
<script lang="ts">
  import LockElem from 'vuesecurelock'
</script>
```

<img style="border:1px solid #dedede" src="https://i.imgur.com/n2npalY.png">
<img style="border:1px solid #dedede" src="https://i.imgur.com/YTIf6dc.gif">


