<script setup lang="ts">
import { computed } from "vue";
import type { FunctionProductList } from "../../types";
const props = defineProps<{
  data: any[];
}>();

const totalCount = computed(() => {
  return props.data.reduce((sum, item) => sum + item.quantity, 0);
});

const totalPrice = computed(() => {
  return props.data.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
const emit = defineEmits<{
  (e: "remove", name: FunctionProductList): void;
  (e: "open-modal"): void;
}>();
const removeItem = (itemName: FunctionProductList) => {
  emit("remove", itemName);
};
const confirmOrder = () => {
  emit("open-modal");
};
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

  <div v-else class="cartList">
    <div class="cartList-title">
      <h4>Your Cart({{ totalCount }})</h4>
    </div>
    <div v-for="item in data" :key="item.name" class="product-layout">
      <div class="product-item">
        <div class="product-name">
          {{ item.name }}
        </div>
        <div class="product-centent">
          <div class="product-amount">{{ item.quantity }}x</div>
          <div>${{ item.price.toFixed(1) * item.quantity }}</div>
          <div class="product-price">${{ item.price.toFixed(1) }}</div>
        </div>
      </div>
      <div class="刪除按鈕">
        <button
          type="button"
          class="btn-close btn-close-black"
          aria-label="Close"
          @click="removeItem(item.name)"
        ></button>
      </div>
    </div>
    <hr />
    <div class="checkout">
      <p>Order Total</p>
      <p>${{ totalPrice.toFixed(2) }}</p>
    </div>
    <div class="checkout-span">
      <span @click="confirmOrder">Comfirm Order</span>
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
    width: 120px;
    .product-amount {
      color: rgb(188, 78, 44);
    }
    .product-price {
      color: black;
    }
  }
}
.checkout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  color: black;
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
