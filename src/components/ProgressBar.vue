<script setup>

import { defineProps, watch, ref } from 'vue';

const props = defineProps({
  progresLength: Number,
  actualnumber: Number,
});
const actualWidth = ref((props.actualnumber * 100) / props.progresLength);

watch(() => props.actualnumber, (newVal) => {
  actualWidth.value = (newVal * 100) / props.progresLength;
});

</script>

<template>
  <div class="progress-bar" ref="progressBar">
    <div class="progress-bar__string" :style="{ width: actualWidth + '%' }">
    </div>
  </div>
</template>

<style>
.progress-bar {
  z-index: 2;
  width: 100%;
  height: 4px;
  background: #D8D7E1;

}

.progress-bar__string {
  height: 100%;
  background: #806FFB;
}
</style>
