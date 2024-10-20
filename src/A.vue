<script setup lang="ts">
import { onUnmounted, ref } from "vue"
//import { registerFinalizer } from "./shared"

class Leak {
    // arbitrarily large object just to make it obvious in dev tools
    data = new ArrayBuffer(1024 * 1024 * 100) // 100 MiB
}

const leak = ref(new Leak())
let v = {}

// registerFinalizer(leak, "if this runs then the gc has collected the ref obj");
// registerFinalizer(v, "if this runs then the gc has collected the non-ref obj");

// {
//   registerFinalizer({}, "if this runs then the gc has collected the ephemeral obj");
// }

onUnmounted(() => console.log("unmounted"));

</script>

<template>
  <div>
    <!--reference things in hopes that build doesn't optimize them away-->
    <div>leakClassname={{Leak}}, leakSize={{ typeof leak.data }} {{ v }}</div>
    <br/>
    <br/>
    <input type="text"   @input="() => {/*do stuff, incidentally capturing surrounding scope*/}"/>
  </div>
</template>
