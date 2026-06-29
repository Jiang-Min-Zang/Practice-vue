import { ref, onMounted } from "vue";
import axios from "axios";
import { type GoodsItem } from "@/types";

export function useGoodTable() {
  const goodsList = ref<GoodsItem[]>([]);
  const originalList = ref<GoodsItem[]>([]); // 備份原始資料，重置時可以用

  // 🎯 搜尋表單的狀態（雙向綁定用）
  const searchForm = ref({
    id: "",
    status: "請選擇", // 預設值
  });

  // 1. 從 json-server 撈取全部資料
  const fetchGoods = async () => {
    try {
      const res = await axios.get("http://localhost:3000/goods");
      goodsList.value = res.data;
      originalList.value = res.data; // 存一份備份
    } catch (error) {
      console.error("撈取商品失敗", error);
    }
  };
  //搜尋功能
  const handleSearch = () => {
    let result = [...originalList.value];
    if (searchForm.value.id.trim()) {
      result = result.filter((item) =>
        item.id.includes(searchForm.value.id.trim()),
      );
    }
    if (searchForm.value.status !== "請選擇") {
      result = result.filter((item) => item.status === searchForm.value.status);
    }
    goodsList.value = result;
  };

  // 重製功能
  const handleReset = () => {
    searchForm.value.id = "";
    searchForm.value.status = "請選擇";
    goodsList.value = [...originalList.value];
  };

  //新增功能 //寫一半好像沒辦法完成
  const handleCreateGoods = async (newGoodsData: Omit<GoodsItem, "id">) => {
    try {
      const newId = "g_" + Math.random().toString(36).substring(2, 9);

      const fullNewGoods = {
        id: newId,
        ...newGoodsData,
        updater: "admin", //預設操作者
      };
      //發送 POST 請求寫入 db.json
      await axios.post("http://localhost:3000/goods", fullNewGoods);
      //重新拉取最新資料
      await fetchGoods();

      return true;
    } catch (error) {
      console.error("新增商品失敗", error);
      return false;
    }
  };

  //更新狀態與時間
  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      // 1.取目前時間 格式化
      const now = new Date();
      const formattedTime = now
        .toLocaleString("zh-TW", { hour12: false })
        .replace(/\//g, "-");
      // 2.發送patch請求給db
      await axios.patch(`http://localhost:3000/goods/${id}`, {
        status: newStatus,
        updateTime: formattedTime, //新時間
      });
      // 3.重新撈取資料
      await fetchGoods();
    } catch (error) {
      alert("同步資料庫失敗");
    }
  };

  //刪除功能 目前不想弄
  const handleDeleteGoods = () => {
    alert("模擬一下刪除，不想真的刪");
  };

  onMounted(() => {
    fetchGoods();
  });

  return {
    goodsList,
    searchForm,
    handleSearch,
    handleReset,
    handleCreateGoods,
    handleUpdateStatus,
    handleDeleteGoods,
    refresh: fetchGoods, // 留著未來「新增/刪除成功後」重新整理用
  };
}
