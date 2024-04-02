<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    question: Object,
    removeMyltuply: Function,
    addMyltuply: Function
});

const label = ref(props.question);
const isChecked = ref(false);
const toggleCheckbox = (event) => {
    if (isChecked.value) {
        props.removeMyltuply();
    } else {
        props.addMyltuply();
    }
    isChecked.value = !isChecked.value;
    const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
    checkbox.checked = isChecked.value;
    event.currentTarget.classList.toggle('active_point', isChecked.value);
}
</script>

<template>
    <div class="quiz__point" @click="toggleCheckbox">
        <input type="checkbox" :checked="isChecked">
        <p class="reaction">{{ label.smile }}</p>
        <p class="point-description">{{ label.text }}</p>
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
