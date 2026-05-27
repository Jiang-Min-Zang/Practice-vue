<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import axios from "axios";
import { type FunctionProductList } from "../../types";
import { getProductList } from "../../api/product";
import ProductCard from "../../components/ProductCard.vue";

const products = ref<FunctionProductList[]>([]);
onMounted(async () => {
  try {
    products.value = await getProductList();
    console.log("連線成功--------api.ts成功");
  } catch (error) {
    console.log("圖片抓取失敗", error);
  }
});
</script>

<template>
  <div class="">
    <router-link to="/" class="btn btn-outline-primary">回導覽列</router-link>

    <p>目前抓到的商品數量：{{ products.length }} 筆</p>
    <!-- <div v-for="(item, index) in products" :key="index">
      <img :src="item.image.mobile" alt="" />
    </div> -->
  </div>
  <div v-if="products.length > 0">
    <div v-for="item in products" :key="item.id">
      <ProductCard :data="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
