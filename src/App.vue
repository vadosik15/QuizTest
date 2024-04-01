<script setup>
import ContainerBtn from './components/ContainerBtn.vue';
import Quiz from './components/Quiz.vue';
import Header from './components/Header.vue';
import ProgressBar from './components/ProgressBar.vue';
import NameQuiz from './components/NameQuiz.vue';
import {quiz} from './components/helpers/helpers.js'

console.log(quiz)

const progresLength = quiz.length
</script>

<template>
  <div class="container">
    <main>
      <div>
        <Header :progresLength=progresLength></Header>
        <ProgressBar :progresLength=progresLength />
      </div>
      <NameQuiz></NameQuiz>
      <Quiz />
      <ContainerBtn @click="toggleCheckbox($event)" />
    </main>
  </div>
</template>

<style>
main {
  background: #F8F7FA;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
  justify-content: center;
  padding-bottom: 20px;
}

.container {
  max-width: 360px;
  width: 100%;
}
</style>
