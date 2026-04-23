<script setup>
import { ref, computed, watch } from "vue";

const products = [
  { id: "p01", name: "頂級黑咖啡", price: 120 },
  { id: "p02", name: "特選拿鐵", price: 150 },
  { id: "p03", name: "焦糖瑪奇朵", price: 180 },
];
</script>

<template>
  <div class="Products">
    <div>
      <h1>產品列表</h1>
      <ul>
        <li v-for="p in products" :key="p.id">
          <RouterLink
            :to="{
              name: 'ProductsList',
              params: { id: p.id, name: p.name, price: p.price },
            }"
          >
            {{ p.name }} - 查看詳情
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="Products-box">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.Products {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.Products-box {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
