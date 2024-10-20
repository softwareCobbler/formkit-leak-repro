<script setup lang="ts">
import A from "./A.vue"

import { ref } from "vue"

const showA = ref(false)
</script>

<template>
  <div>
    <div v-if="showA">
      <A></A>
    </div>
    <button type="button" @click="() => showA = !showA">Toggle</button>
  </div>
</template>
