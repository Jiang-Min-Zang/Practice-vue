import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
// export const useCountStore = defineStore("count", {
//   //actions裡放置的是function 用來響應式的動作
//   actions: {
//     increment(value: number) {
//       console.log("increment被調用了", value);
//       if (this.sum < 10) {
//         this.sum += 1;
//       }
//     },
//   },
//   //真正存儲數據的地方
//   state() {
//     return {
//       sum: 1,
//       school: "HKU",
//       address: "歡迎來到沙鹿",
//     };
//   },
//   getters: {
//     bigSum(state) {
//       return state.sum * 10;
//     },
//     upperSchool(state): string {
//       return state.school.toUpperCase();
//     },
//   },
// });

export const useCountStore = defineStore("count", () => {
  const sum = ref(1);
  const school = ref("hku");
  const address = ref("歡迎來到沙鹿");

  const bigSum = computed(() => sum.value * 10);
  const upperschool = computed(() => {
    return school.value.toUpperCase();
  });

  function increment(value: number) {
    console.log("increment被調用了", value);
    if (sum.value < 10) {
      sum.value += 1;
    }
  }

  return {
    sum,
    school,
    address,
    bigSum,
    upperschool,
    increment,
  };
});
