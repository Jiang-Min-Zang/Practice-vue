import { ref, onMounted } from "vue";
import axios from "axios";
import { type FunctionProductList } from "../types";

const products = ref<FunctionProductList[]>([]);
onMounted(async () => {
  try {
    const res = await axios.get<FunctionProductList[]>(
      "http://localhost:3000/Function-ProductList",
    );
    products.value = res.data;
    console.log("連線成功--------路徑沒改");
  } catch (error) {
    console.log("圖片抓取失敗", error);
  }
});
