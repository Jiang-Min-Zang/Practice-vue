<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import axios from "axios";
import { type FunctionProductList } from "../../types";

const products = ref<FunctionProductList[]>([]);
onMounted(async () => {
  try {
    const res = await axios.get<FunctionProductList[]>(
      "http://localhost:3000/Function-ProductList",
    );
    products.value = res.data;
    console.log("連線成功--------路徑沒改");
  } catch (error) {
    console.log("圖片抓取失敗", error);
  }
});
</script>

<template>
  <div class="">
    <router-link to="/" class="btn btn-outline-primary">回導覽列</router-link>
    <h5>123</h5>
    <p>目前抓到的商品數量：{{ products.length }} 筆</p>
    <div v-for="(item, index) in products" :key="index">
      <img :src="item.image.mobile" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
