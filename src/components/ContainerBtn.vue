<script setup>

</script>

<template>
    <div class="container_btn" @click="$emit('click')">
        <button class="btn_next">Continue</button>
    </div>
</template>

<style>
.container_btn {
    width: 100%;
    justify-content: center;
    padding: 0px 10px;
}
.btn_next:hover {
    box-shadow: 0px 0px 10px #806FFB;
}
.btn_next {
    cursor: pointer;
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
</style>