<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { FunctionProductList } from "../types";
defineProps<{
  data: any[];
}>();
</script>

<template>
  <div v-if="data.length === 0" class="cartList">
    <div class="cartList-title">
      <h4>Your Cart(0)</h4>
    </div>
    <div class="">
      <img
        src="../../public/Function-ProductList/images/illustration-empty-cart.svg"
        alt=""
      />
      <p>Your added items will appear here</p>
    </div>
  </div>

  <div v-else v-for="item in data" :key="item" class="cartList">
    <div class="cartList-title">
      <h4>Your Cart({{ item.quantity }})</h4>
    </div>
    <div class="product-layout">
      <div class="product-item">
        <div class="product-name">
          {{ item.name }}
        </div>
        <div class="product-centent">
          <div class="product-amount">{{ item.quantity }}x</div>
          <div class="product-price">${{ item.price }}</div>
        </div>
      </div>
      <div class="刪除按鈕">
        <button
          type="button"
          class="btn-close btn-close-black"
          aria-label="Close"
        ></button>
      </div>
    </div>
    <hr />
    <div class="checkout">
      <p>Order Total</p>
      <p>comuted</p>
    </div>
    <div class="checkout-span">
      <span>Comfirm Order</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cartList {
  background-color: rgb(252, 248, 245);
  padding: 5px 15px;
  width: 100%;
  height: auto;
  font-size: 13px;
  color: rgb(153, 137, 135);
  .cartList-title {
    text-align: left;
    color: rgb(188, 78, 44);
  }
}
.product-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .product-name {
    color: black;
    font-weight: bolder;
  }
  .product-centent {
    display: flex;
    justify-content: space-between;
    .product-amount {
      color: rgb(188, 78, 44);
    }
  }
}
.checkout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.checkout-span {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 25px;
  color: white;
  background-color: rgb(200, 59, 14);
}
</style>
