<script setup>
import { ref, computed, watch } from "vue";
defineProps(["id", "name", "position", "content"]);
</script>

<template>
  <div class="">
    <p>員編:{{ id }}</p>
    <p>姓名:{{ name }}</p>
    <p>工作內容:{{ position }}</p>
    <p>內心想法:{{ content }}</p>
  </div>
</template>

<style scoped></style>
