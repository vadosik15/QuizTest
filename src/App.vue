<script setup>

import { ref } from 'vue';

const toggleCheckbox = (event) => {
  const checkbox = event.currentTarget.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
  event.currentTarget.classList.toggle('active_point',checkbox.checked )
}
</script>

<template class="container">
  <header>

    <img src="./img/Icon Left.png" class="header__arrow" alt="">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="black" />
      <path
        d="M26 16.4289C26 15.06 25.1333 13.8822 23.8822 13.3267C24.3667 12.7444 24.66 12.02 24.66 11.2289C24.66 9.32667 22.9867 7.78222 20.9244 7.78222C20.2311 7.78222 19.5867 7.95778 19.0311 8.26C18.6889 6.96444 17.4267 6 15.9156 6C14.4356 6 13.1933 6.92444 12.8244 8.18222C12.3022 7.92889 11.7089 7.78222 11.0778 7.78222C9.01556 7.78222 7.34222 9.32444 7.34222 11.2289C7.34222 12.02 7.63333 12.7467 8.12 13.3267C6.86667 13.8822 6 15.0622 6 16.4289C6 18.0356 7.19556 19.3844 8.81111 19.7644C8.77111 19.9667 8.74667 20.1756 8.74667 20.3889C8.74667 22.2911 10.42 23.8356 12.4822 23.8356C13.2444 23.8356 13.9533 23.6244 14.5444 23.2622H14.5467V26H17.4622V23.2644C18.0511 23.6244 18.7578 23.8333 19.5178 23.8333C21.58 23.8333 23.2533 22.2911 23.2533 20.3867C23.2533 20.1733 23.2289 19.9644 23.1889 19.7622C24.8044 19.3844 26 18.0378 26 16.4289Z"
        fill="url(#paint0_linear_11_109)" />
      <defs>
        <linearGradient id="paint0_linear_11_109" x1="18.6111" y1="13.3889" x2="6" y2="26"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="#B0B0B0" />
        </linearGradient>
      </defs>
    </svg>
    <div class="header__count">1/10</div>
  </header>
  <div class="progress-bar">
    <div class="progress-bar__string"></div>
  </div>
  <main>
    <div class="name-quiz">
      <h1 class="name-quiz__title">Heading</h1>
      <p class="name-quiz__type">Choose all that apply</p>
    </div>
    <div class="quiz">
      <div class="quiz__point" @click="toggleCheckbox($event)">
        <input type="checkbox">
        <p class="reaction">😓</p>
        <p class="point-description">Label</p>
      </div>
      <div class="quiz__point" @click="toggleCheckbox($event)">
        <input type="checkbox">
        <p class="reaction">😓</p>
        <p class="point-description">Label</p>
      </div>
      <div class="quiz__point" @click="toggleCheckbox($event)">
        <input type="checkbox">
        <p class="reaction">😓</p>
        <p class="point-description">Label</p>
      </div>
      <div class="quiz__point" @click="toggleCheckbox($event)">
        <input type="checkbox">
        <p class="reaction">😓</p>
        <p class="point-description">Label</p>
      </div> 
      <div class="quiz__point" @click="toggleCheckbox($event)">
        <input type="checkbox">
        <p class="reaction">😓</p>
        <p class="point-description">Label</p>
      </div>
      <div class="quiz__point" @click="toggleCheckbox($event)">
        <input type="checkbox">
        <p class="reaction">😓</p>
        <p class="point-description">Label</p>
      </div>
      <div class="quiz__point" @click="toggleCheckbox($event)">
        <input type="checkbox">
        <p class="reaction">😓</p>
        <p class="point-description">Label</p>
      </div>
      <div class="quiz__point" @click="toggleCheckbox($event)">
        <input type="checkbox">
        <p class="reaction">😓</p>
        <p class="point-description">Label</p>
      </div>
      <div class="quiz__point" @click="toggleCheckbox($event)">
        <input type="checkbox">
        <p class="reaction">😓</p>
        <p class="point-description">Label</p>
      </div>
    </div>
    <div class="container_btn" @click="toggleCheckbox($event)">
      <button class="btn_next">Continue</button>
    </div>
  </main>
</template>

<style>
.container_btn {
  width: 100%;
  justify-content: center;
  padding: 0px 10px;
}

.btn_next {
  margin: 0 auto;
  border: none;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 328px;
  width: 100%;
  height: 48px;
  padding: 8px 12px 8px 12px;
  gap: 8px;
  background: #806FFB;
  transition: 0.3s;
  opacity: 0px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.5px;
  text-align: center;

}
.active_point {
  border: 0.04rem solid #806FFB !important;
  box-shadow: 0px 6px 24px 0px #1819251A;

}

.quiz__point input[type="checkbox"]:checked + .point-description {
  font-weight: bold; /* Наприклад, змінити стиль тексту для виділення обраного пункту */
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

main {
  background: #F8F7FA;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
  justify-content: center;
}

.quiz {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 0px 10px;
}

.name-quiz__type {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;

}

.name-quiz__title {
  text-align: center;
  font-weight: 700;
  font-size: 22px;
}

.container {
  max-width: 360px;
  width: 100%;
}

.header__arrow {
  width: 16px;
  height: 16px;
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 56px;
  padding: 8px 16px;
  z-index: 5;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
}

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
