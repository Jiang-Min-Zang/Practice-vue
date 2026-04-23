<template>
  <div>
    <h2>產品詳情</h2>
    <p>編號：{{ id }}</p>
    <p>名稱：{{ name }}</p>
    <p>價格：${{ price }}</p>
    <button @click="handleBack">回列表 (1秒後跳轉)</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

// 接收路由傳過來的 Props
const props = defineProps(["id", "name", "price"]);
const router = useRouter();

const handleBack = () => {
  console.log("正在處理返回邏輯...");
  setTimeout(() => {
    // 編程式導航
    router.push("/home");
  }, 1000);
};
</script>

<style scoped></style>
