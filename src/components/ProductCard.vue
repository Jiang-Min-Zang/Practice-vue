<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { FunctionProductList } from "../types";

defineProps<{
  data: FunctionProductList;
}>();
</script>

<template>
  <div class="card h-100 shadow-sm border-0">
    <picture>
      <source :srcset="data.image.desktop" media="(min-width: 1200px)" />
      <source :srcset="data.image.tablet" media="(min-width: 768px)" />
      <source :srcset="data.image.mobile" media="(min-width: 375px)" />

      <img
        :src="data.image.desktop"
        :alt="data.name"
        class=""
        style="height: 240px"
      />
    </picture>

    <div class="card-body">
      <span>{{ data.category }}</span>
      <h5>{{ data.name }}</h5>
      <p>${{ data.price.toFixed(2) }}</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-outline-warning button-color">
        <img
          src="../../public/Function-ProductList/images/icon-add-to-cart.svg"
          alt=""
        />Add to Cart
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button-color {
  color: black;
  border-color: gray;
  border-radius: 5%;
}
</style>
