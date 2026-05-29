<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import axios from "axios";
import { type FunctionProductList } from "../../types";
import { getProductList } from "../../api/product";
import ProductCard from "../../components/ProductCard.vue";
import CartList from "../../components/CartList.vue";

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
  <div class="custom-min-wrapper">
    <div class="container my-5 mx-3">
      <div class="other">
        <router-link to="/" class="btn btn-outline-primary"
          >回導覽列</router-link
        >
        <h1 class="mb-4 fw-bold">Desserts</h1>
      </div>

      <div class="row">
        <div class="col-12 col-md-10 productlist">
          <div v-if="products.length > 0" class="row row-cols-1 row-cols-md-3">
            <div v-for="item in products" :key="item.id">
              <ProductCard :data="item" class="" />
            </div>
          </div>
        </div>

        <div class="col-12 col-md-2">
          <p>未來要放購物車</p>
          <div>
            <CartList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-min-wrapper {
  min-width: 375px;
  overflow-x: auto;
  .other {
    text-align: left;
  }
}
</style>
