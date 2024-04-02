<script setup>
import ContainerBtn from './components/ContainerBtn.vue';
import Quiz from './components/Quiz.vue';
import Header from './components/Header.vue';
import ProgressBar from './components/ProgressBar.vue';
import { quiz } from './components/helpers/helpers.js'
import { reactive } from 'vue'
import { watch, ref } from 'vue'

const quizCopy = [...quiz];
const progresLength = quizCopy.length;

let btnBoolean = ref(true)

const btnActive = (index) => {
  if (index) {
    btnBoolean.value = true
  } else {
    btnBoolean.value = false
  }
}

let actualnumber = reactive({
  count: 0
});

let index = reactive({
  count: 0
});

watch(index, () => {
  quizCopy;
  actualnumber.count = index.count;
  
})

const increment = () => {
  if (index.count !== quizCopy.length - 1) {
    index.count++;
  }
  actualnumber.count = index.count
};


const decrement = () => {
  if (index.count !== 0) {
    index.count--;
  }
  actualnumber.count = index.count
}
</script>

<template>
  <div class="container">
    <main>
      <div>
        <Header 
          :progresLength=progresLength 
          :decrement="decrement" 
          :actualnumber=actualnumber.count></Header>
        <ProgressBar 
          :progresLength=progresLength 
          :actualnumber=actualnumber.count />
      </div>

      <Quiz 
          :btnActive="btnActive" 
          :quizData="quizCopy[index.count]" 
          :key="index.count"
          :onIncrement="increment" />
      <div 
        :class="{ 
          'innactive': btnBoolean,
          ...customClasses }">
        <ContainerBtn 
          @click="increment" />
      </div>
    </main>
  </div>
</template>


<style>
.innactive {
  pointer-events: none;
}

main {
  background: #F8F7FA;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  padding-bottom: 20px;
}

.container {
  max-width: 360px;
  width: 100%;
}
</style>
