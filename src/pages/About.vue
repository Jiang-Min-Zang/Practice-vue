<template>
  <div class="about">
    <router-link to="/" class="button-style">回導覽列</router-link>
    <h2>這是說明</h2>
    <i-bi-cart style="font-size: 24px; color: royalblue" />
    <bootstrap-test />
  </div>
</template>

<script setup lang="ts" name="About">
import { onMounted, onUnmounted } from "vue";
import bootstrapTest from "../components/bootstrapTest.vue";
onMounted(() => {
  console.log("About出生");
});
onUnmounted(() => {
  console.log("About死了");
});
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgb(85, 84, 84);
  font-size: 18px;

  .button-style {
    color: black;
    font-size: 15px;
  }
}
</style>
