<script setup>
import { defineProps, ref } from 'vue';
import QuizPoint from './QuizPoint.vue';
import NameQuiz from './NameQuiz.vue';

const props = defineProps({
  btnActive: Function,
  quizData: Array,
  onIncrement: Function,
});

let arrayIndexes = ref(0)

const addMyltuply = () => {
  arrayIndexes.value++
  if (arrayIndexes.value >= 2) {
    props.btnActive(false);
  } else {
    props.btnActive(true);
  }
}

const removeMyltuply = () => {
  arrayIndexes.value--

  if (arrayIndexes.value >= 2) {
    props.btnActive(false);
  } else {
    props.btnActive(true);
  }
}

let isBlocked = ref(false)

const blockClick = () => {
  if (props.quizData.title = props.quizData.title) {
    isBlocked.value = true
  }
}
const clickPoint = (index) => {
  if (props.quizData.type === 'single') {
    blockClick()
    setTimeout(() => {
      props.onIncrement();
    }, 1000);
  }
};
</script>

<template>
  <div class="quiz" :class="{ 'innactive': isBlocked, ...customClasses }">
    <NameQuiz :name="props.quizData.title" />
    <QuizPoint @click="clickPoint()" :quizType=props.quizData :removeMyltuply="removeMyltuply"
      :addMyltuply="addMyltuply" v-if="props.quizData" v-for="(question, index) in props.quizData.answers" :key="index"
      :question="question" />
  </div>
</template>

<style>
.innactive {
  pointer-events: none;
}

.quiz {
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
}
</style>
