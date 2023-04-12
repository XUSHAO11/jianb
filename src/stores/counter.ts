import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('counter', () => {
  let count = ref(false)

  function increment() {
    count.value=!count.value
  }

  return { count, increment}
})