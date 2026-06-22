<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  isOpen: boolean;
  data: any[];
}>();

const emit = defineEmits(["close"]);

const totalPrice = computed(() => {
  return props.data.reduce((sum, item) => sum + item.price * item.quantity, 0);
});
</script>

<template>
  <div v-if="isOpen" class="modal-backdrop-custom">
    <div class="modal-content-custom">
      <div class="Modal-title">
        <img
          class="mb-3"
          src="../../public/Function-ProductList/images/icon-order-confirmed.svg"
          alt=""
        />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
      </div>
      <div v-for="item in data" :key="item.name" class="product-layout">
        <div class="product-item">
          <div class="pisture">
            <img
              :src="item.image.thumbnail"
              alt=""
              style="width: 48px; height: 48px; object-fit: cover"
            />
          </div>
          <div>
            <div class="product-name">
              {{ item.name }}
            </div>
            <div class="product-centent">
              <div class="product-amount">{{ item.quantity }}x</div>
              <div class="product-price">${{ item.price.toFixed(1) }}</div>
            </div>
          </div>
        </div>
        <div>${{ (item.price.toFixed(1) * item.quantity).toFixed(2) }}</div>
      </div>
      <hr />
      <div class="checkout">
        <p>Order Total</p>
        <p>${{ totalPrice.toFixed(2) }}</p>
      </div>
      <button class="close-button" @click="$emit('close')">
        Start New Order
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-backdrop-custom {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* 半透明黑底 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}
.modal-content-custom {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px; /* 這裡可以根據你的 Figma 寬度調整 */
}
.Modal-title {
  display: flex;
  flex-direction: column;
  text-align: left;
  > img {
    width: 40px;
  }
  h2 {
    font-weight: bolder;
  }
  p {
    color: rgb(153, 137, 135);
  }
}
.product-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
  justify-content: space-between;
  background-color: rgb(252, 248, 245);
  .product-item {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  .product-name {
    color: black;
    font-weight: bolder;
  }
  .product-centent {
    display: flex;
    justify-content: left;
    gap: 10px;
    width: 120px;
    .product-amount {
      color: rgb(188, 78, 44);
    }
    .product-price {
      color: rgb(153, 137, 135);
    }
  }
}

.checkout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bolder;
  color: black;
}
.close-button {
  background-color: rgb(200, 59, 14);
  color: white;
  border-radius: 25px;
  height: 32px;
  width: 100%;
  border: none;
}
</style>
