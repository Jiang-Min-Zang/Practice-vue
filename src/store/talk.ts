import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
import { reactive } from "vue";
//選項式寫法
// export const useTalkStore = defineStore("talk", {
//   actions: {
//     async getATalk() {
//       let {
//         data: { hitokoto: title },
//       } = await axios.get("https://v1.hitokoto.cn");
//       // 把请求回来的字符串，包装成一个对象
//       let obj = { id: nanoid(), title };
//       // 放到数组中
//       this.talkList.unshift(obj);
//     },
//   },
//   //真正存儲數據的地方
//   state() {
//     return {
//       talkList: [
//         { id: "ftrfasdf01", title: "今天你有点怪，哪里怪？怪好看的！" },
//         { id: "ftrfasdf02", title: "草莓、蓝莓、蔓越莓，今天想我了没？" },
//         { id: "ftrfasdf03", title: "心里给你留了一块地，我的死心塌地" },
//       ],
//     };
//   },
// });

export const useTalkStore = defineStore("talk", () => {
  const talkList = reactive([
    { id: "ftrfasdf01", title: "今天你有点怪，哪里怪？怪好看的！" },
    { id: "ftrfasdf02", title: "草莓、蓝莓、蔓越莓，今天想我了没？" },
    { id: "ftrfasdf03", title: "心里给你留了一块地，我的死心塌地" },
  ]);

  async function getATalk() {
    try {
      let {
        data: { hitokoto: title },
      } = await axios.get("https://v1.hitokoto.cn");
      // 把请求回来的字符串，包装成一个对象
      let obj = { id: nanoid(), title };
      // 放到数组中
      talkList.unshift(obj);
    } catch (error) {
      alert("網址掛了");
    }
  }

  return { talkList, getATalk };
});
