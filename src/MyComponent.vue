<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const text = computed(() => store.state.myModule.text)
console.log('text.value :>> ', text.value)
</script>

<template>
  <graphics
    :x="0"
    :y="0"
    @render="
      (graphics) => {
        graphics.clear()
        graphics.beginFill(0x00ff00)
        graphics.drawRect(0, 0, 10, 10)
        graphics.endFill()
      }
    "
  />
</template>
