<script setup>
import { defineProps} from 'vue';

const props = defineProps({
  progresLength: Number
});

console.log(props.progresLength)
</script>



<template>
  <div class="progress-bar">
    <div class="progress-bar__string"></div>
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

  width: 40%;
  background: #806FFB;
}
</style>