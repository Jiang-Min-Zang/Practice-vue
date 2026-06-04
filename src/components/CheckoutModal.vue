<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
  data: any[];
}>();

const emit = defineEmits(["close"]);
</script>

<template>
  <div v-if="isOpen" class="modal-backdrop-custom">
    <div class="modal-content-custom">
      <div v-for="item in data" :key="item.name" class="product-layout">
        <div class="這是假圖片">
          <img
            src="../../public/Function-ProductList/images/image-baklava-thumbnail.jpg"
            alt=""
            style="width: 48px; height: 48px; object-fit: cover"
          />
        </div>
        <div class="product-item">
          <div class="product-name">
            {{ item.name }}
          </div>
          <div class="product-centent">
            <div class="product-amount">{{ item.quantity }}x</div>
            <div class="product-price">${{ item.price.toFixed(1) }}</div>
          </div>
        </div>
        <div>${{ item.price.toFixed(1) * item.quantity }}</div>
      </div>
      <hr />
      <div class="checkout">
        <p>Order Total</p>
        <p>$15 預設的</p>
      </div>

      <button @click="$emit('close')">暫時關閉按鈕</button>
    </div>
  </div>

  <!-- 下面這是Cartlist一模一樣的部分 先備著 -->
  <!-- <div v-for="item in data" :key="item.name" class="product-layout">
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
  </div>
  <hr />
  <div class="checkout">
    <p>Order Total</p>
    <p>${{ totalPrice }}</p>
  </div> -->
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
</style>
