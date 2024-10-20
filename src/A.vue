<script setup lang="ts">
import { onUnmounted, ref } from "vue"

class Leak {
    // arbitrarily large object just to make it obvious in dev tools
    data = [...new Array(2**20)].map(() => { return {} })
}

const leak = ref(new Leak())

onUnmounted(() => console.log("unmounted"));
</script>

<template>
  <div>
    <!--reference things in hopes that build doesn't optimize them away-->
    <div>leakClassname={{Leak}}, leakSize={{ leak.data.length }}</div>
    <br/>
    <br/>
    <input type="text"   @input="() => {/*do stuff, incidentally capturing surrounding scope*/}"/>
  </div>
</template>
