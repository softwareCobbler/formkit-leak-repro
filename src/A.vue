<script setup lang="ts">
import { FormKit } from "@formkit/vue"
import { ref } from "vue"

defineProps({useFormKit: Boolean})

class Leak {
    // arbitrarily large object just to make it obvious in dev tools
    data = [...new Array(2**20)].map(() => { return {} })
}

const leak = ref(new Leak())

</script>

<template>
  <div>
    <!-- try to use it so it doesn't optimize away -->
    <div>classname={{Leak}}</div>
    <div>length={{ leak.data.length }}, useFK={{ useFormKit }}</div>
    <div v-if="useFormKit">
        <FormKit type="text" @input="() => {/*do stuff, incidentally capturing surrounding scope*/}"/>
    </div>
    <div v-else>
        <input type="text"   @input="() => {/*do stuff, incidentally capturing surrounding scope*/}"/>
    </div>
  </div>
</template>
