<template>
  <h2>練習題</h2>
  <div class="box" v-for="item in products" :key="item.name">
    <span>品項:{{ item.name }}</span>
    <input
      class="input"
      v-model="item.count"
      type="number"
      placeholder="請輸入數量"
    />
  </div>
  <h3>總共需要支付:{{ finalPayble }}元</h3>
  <hr />
  <h3>當前模式為:{{ isVip ? "VIP，9折" : "VIP已關閉" }}</h3>
  <ul>
    <li v-for="value in activePromotionList" :key="value.name">
      {{ value.name }}-特價:{{ value.price }}
    </li>
  </ul>

  <button @click="isVip = !isVip">使用VIP</button>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
const isVip = ref(false);
const products = ref([
  { name: "電競滑鼠", price: 1500, count: 0 },
  { name: "機械鍵盤", price: 3000, count: 0 },
  { name: "便宜傳輸線", price: 150, count: 0 },
  { name: "高階顯示卡", price: 25000, count: 0 },
]);
const activePromotionList = computed(() => {
  if (isVip.value == true) {
    return products.value
      .filter((item) => item.price >= 1000)
      .map((item) => {
        return {
          name: "優惠:" + item.name,
          price: item.price * 0.9,
        };
      });
  } else {
    return products.value;
  }
});
const finalPayble = computed(() => {
  let sum = 0;
  products.value.forEach((item) => {
    if (isVip.value === true && item.price >= 1000) {
      sum += item.price * 0.9 * item.count;
    } else {
      sum += item.price * item.count;
    }
  });
  return sum;
});
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}
.input {
  width: 50%;
}
</style>
