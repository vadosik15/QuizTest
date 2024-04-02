<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  question: Object
});

const isChecked = ref([]);

const toggleCheckbox = (answerIndex) => {
  if (props.question.type === 'multiple') {
    isChecked.value[answerIndex] = !isChecked.value[answerIndex];
  } else if (props.question.type === 'single') {
    isChecked.value = Array(props.question.answers.length).fill(false);
    isChecked.value[answerIndex] = true;
  }
}

</script>

<template>
  <div class="question">
    <h2>{{ question.title }}</h2>
    <p>{{ question.description }}</p>
    <div class="answers">
      <div v-for="(answer, index) in question.answers" :key="index" @click="toggleCheckbox(index)">
        <input v-if="question.type === 'multiple'" type="checkbox" :checked="isChecked[index]">
        <input v-else-if="question.type === 'single'" type="radio" :checked="isChecked[index]">
        <label>{{ answer.text }}</label>
      </div>
    </div>
  </div>
</template>
<style>
.active_point {
  border: 0.04rem solid #806FFB !important;
  box-shadow: 0px 6px 24px 0px #1819251A;
}
.btn_next:hover {
  box-shadow: 0px 0px 10px #806FFB;
}

.reaction {
  font-family: Montserrat;
  font-size: 32px;
  font-weight: 400;
  line-height: 39.01px;
  text-align: left;
}

.quiz__point {
cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  height: 64px;
  width: 100%;
  max-width: 328px;
  padding: 0px 16px;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #EAE9F0;
}

.point-description {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
}
</style>
