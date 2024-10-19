<script setup lang="ts">
import A from "./A.vue"

import { ref } from "vue"

const showA = ref(false)

const useFormKit = window.location.search === "?fk"
const mode = useFormKit ? "formkit" : "native dom element"

</script>

<template>
  <div>
    <div>mode={{ mode }}</div>
    <div v-if="showA">
      <A :useFormKit="useFormKit"></A>
    </div>
    <button type="button" @click="() => showA = !showA">Toggle</button>
  </div>
</template>
