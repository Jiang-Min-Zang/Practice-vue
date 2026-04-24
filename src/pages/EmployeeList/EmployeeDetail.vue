<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
defineProps(["id", "name", "position", "content"]);
const router = useRouter();
const backToList = () => {
  setTimeout(() => {
    router.push("/Employee");
  }, 1000);
};
</script>

<template>
  <div class="">
    <p>員編:{{ id }}</p>
    <p>姓名:{{ name }}</p>
    <p>工作內容:{{ position }}</p>
    <p>內心想法:{{ content }}</p>
    <button @click="backToList">返回列表</button>
  </div>
</template>

<style scoped></style>
