import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore("user", () => {
  //一啟動就去 LocalStorage 拿存好的 users 資料
  const localUser = localStorage.getItem("users");
  const parsedUser = localUser ? JSON.parse(localUser) : null;
  // 模擬當前登入使用者的資料（登入成功後要把這些塞進來）
  const role = ref("user");
  const menuIds = ref<string[]>(parsedUser?.menuIds || []);

  // 靜態定義全域所有的菜單對照表
  const allMenus = [
    { id: "1", name: "首頁", path: "/Dashboard" },
    { id: "2", name: "商品管理", path: "/goods" },
    // { id: "3", name: "用戶管理", path: "/user" },
  ];

  // 利用 computed 在 Pinia 內部直接算出該角色「看得到的菜單」
  const visibleMenus = computed(() => {
    return allMenus.filter((menu) => menuIds.value.includes(menu.id));
  });
  // 提供一個登入成功時可以立刻更新狀態的方法（非強制重整時好用）
  const loginSuccess = (userData: any) => {
    menuIds.value = userData.menuIds;
    role.value = userData.role;
  };

  return {
    role,
    menuIds,
    visibleMenus,
    loginSuccess,
  };
});
