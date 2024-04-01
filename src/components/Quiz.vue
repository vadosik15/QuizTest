<script setup>
import QuizPoint from '../components/QuizPoint.vue';

const quizItems = [
  { id: 1, label: 'Label 1' },
  { id: 2, label: 'Label 2' },
  { id: 3, label: 'Label 3' },
  { id: 4, label: 'Label 4' },
  { id: 5, label: 'Label 5' },
  { id: 6, label: 'Label 6' },
  { id: 7, label: 'Label 7' },
];
</script>

<template>
    <div class="quiz">
      <QuizPoint v-for="item in quizItems" :key="item.id" :label="item.label" />
    </div>
  </template>
  

  <style>
  .quiz {
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
  }
  </style>
  