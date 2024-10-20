<script setup lang="ts">
import A from "./A.vue"

import { ref } from "vue"

const showA = ref(false)
const showB = ref(false)
const showC = ref(false)
</script>

<template>
  <div>
    <div v-if="showA">
      <A></A>
    </div>
    <button type="button" @click="() => showA = !showA">Toggle</button>
  </div>
  <div>
    <div v-if="showB">
      <A></A>
    </div>
    <button type="button" @click="() => showB = !showB">Toggle</button>
  </div>
  <div>
    <div v-if="showC">
      <A></A>
    </div>
    <button type="button" @click="() => showC = !showC">Toggle</button>
  </div>
</template>
