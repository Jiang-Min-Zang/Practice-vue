<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { FunctionProductList } from "../../types";

const props = defineProps<{
  data: FunctionProductList;
}>();
const emit = defineEmits<{
  (e: "add-meal", product: FunctionProductList): void;
}>();
const addCardItem = () => {
  // console.log(props.data.name, "餐點名稱");
  emit("add-meal", props.data);
};
</script>

<template>
  <div class="card h-100 shadow-sm border-0">
    <div class="picture position-relative mb-4">
      <picture>
        <source :srcset="data.image.desktop" media="(min-width: 1200px)" />
        <source :srcset="data.image.tablet" media="(min-width: 768px)" />
        <source :srcset="data.image.mobile" media="(min-width: 375px)" />

        <img
          :src="data.image.desktop"
          :alt="data.name"
          class="card-img-top"
          style="height: 240px"
        />
      </picture>
      <div class="position-absolute top-100 start-50 translate-middle">
        <button
          class="btn btn-outline-warning button-color"
          @click="addCardItem"
        >
          <img
            src="../../public/Function-ProductList/images/icon-add-to-cart.svg"
            alt=""
          />
          Add to Cart
        </button>
      </div>
    </div>

    <div class="card-body">
      <span class="text-secondary">{{ data.category }}</span>
      <h5 class="card-title">{{ data.name }}</h5>
      <p class="text-danger">${{ data.price.toFixed(2) }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-color {
  color: black;
  border-color: gray;
  border-radius: 5%;
  background-color: white;
  font-size: small;
  border-radius: 20px;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
