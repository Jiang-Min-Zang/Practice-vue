<template>
  <hr />
  <div>
    <input
      v-model.number.lazy="waterVolume"
      placeholder="今日飲水量，單位：ml"
    />
    <p>注意提醒:{{ waterMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
const waterVolume = ref();
const waterMsg = ref("");
watch(waterVolume, (judge) => {
  if (judge < 2000) {
    console.log("還不夠喔，再多喝點水！");
    waterMsg.value = "還不夠喔，再多喝點水！";
  } else if (judge < 4000 && judge >= 2000) {
    console.log("太棒了，今日飲水量已達標！");
    waterMsg.value = "太棒了，今日飲水量已達標！";
  } else {
    alert("飲水過量");
    waterMsg.value = "喝太多水了，請注意身體狀況！";
  }
});
// const usd = ref(0);
// const twd = ref(0);
// const rate = 32; // 假設匯率是 32

// watch(usd, async (newVal) => {
//   twd.value = newVal * rate;
//   if (newVal > 1000) {
//     alert("金額過大，請修改");
//     await nextTick();
//     usd.value = 0;
//   }
//   console.log(`美金變成了 ${newVal}，自動計算台幣中...`);
// });
</script>

<style scoped>
.watch {
  padding: 20px;
}
.No2 {
  margin-top: 10px;
}
</style>
