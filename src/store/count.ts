import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  //actions裡放置的是function 用來響應式的動作
  actions:{
    increment(value:any){
      console.log("increment被調用了",value)
      if(this.sum<10){
        this.sum +=1
      }
    }
  },
  //真正存儲數據的地方
  state() {
    return {
      sum: 6,
      school : "HKU",
      address : "歡迎來到沙鹿"
    };
  },
});
