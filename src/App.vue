<script setup lang="ts">
import { Application } from 'vue3-pixi'
import MyComponent from './MyComponent.vue'
</script>

<template>
  <Application :width="300" :height="300">
    <MyComponent />
  </Application>
</template>

<style scoped></style>
