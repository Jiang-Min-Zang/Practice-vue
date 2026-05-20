import { ref, computed, onMounted } from "vue";
import axios from "axios";
import router from "../router";
import type { User } from "../types";

export const useUserManage = () => {
  const userList = ref<User[]>([]);
  //登出按鈕
  const handleLogout = () => {
    localStorage.removeItem("users");
    router.push("/LoginvView");
  };
  //從 localStorage 拿到目前登入的人 (看不太懂 晚點查一下)
  const currentUser = computed(() => {
    const userJson = localStorage.getItem("users");
    console.log(userJson);
    return userJson ? JSON.parse(userJson) : null;
  });

  //判斷權限
  const isAdmin = computed(() => {
    return currentUser.value?.role === "admin";
  });
  //取得功能列表
  const fetchUsers = async () => {
    try {
      const res = await axios.get<User[]>("http://localhost:3000/users");
      userList.value = res.data;
    } catch (error) {
      console.error("沒抓到列表", error);
    }
  };
  // 刪除使用者
  const deleteUser = async (id: string) => {
    const isConfirmed = confirm(
      "警告：你確定要刪除這位使用者嗎？此操作無法復原！",
    );

    if (!isConfirmed) return;
    await axios.delete(`http://localhost:3000/users/${id}`);
    fetchUsers();
  };

  onMounted(() => {
    fetchUsers();
    console.log("我有被喚醒嗎---------------------");
  });

  const isModalOpen = ref(false);
  const editingUser = ref<User | null>(null);

  const openEditModal = (user: User) => {
    isModalOpen.value = true;
    editingUser.value = { ...user };
    console.log("-------有點下去吧?");
  };
  const updateUser = async () => {
    if (!editingUser.value) {
      alert("非管理員，關閉");
      return;
    }
    try {
      await axios.put(
        `http://localhost:3000/users/${editingUser.value.id}`,
        editingUser.value,
      );
      alert("修改成功");
      isModalOpen.value = false;
      await fetchUsers();
    } catch (error) {
      alert("修改失敗");
    }
  };
  // // ─── 3. 編輯功能相關狀態 ───
  // const isModalOpen = ref(false); // 控制彈出視窗開關
  // const editingUser = ref<User | null>(null); // 告訴ts說ref裡面只有User結構或null ，因為還沒按編輯 所以初始null

  // // 打開編輯彈窗，並把點選的那個人資料塞進去
  // const openEditModal = (user: User) => {
  //   editingUser.value = { ...user }; // 使用解構，避免直接修改到原本列表的資料
  //   isModalOpen.value = true;
  // };

  // // 儲存編輯 (送出 Update 請求)
  // const updateUser = async () => {
  //   if (!editingUser.value) return; //守衛條款
  //   try {
  //     // 使用 axios.put 或是 axios.patch 更新該 ID 的資料
  //     await axios.put(
  //       `http://localhost:3000/users/${editingUser.value.id}`,
  //       editingUser.value,
  //     );
  //     alert("修改成功！");
  //     isModalOpen.value = false; // 關閉彈窗
  //     await fetchUsers(); // 重新整理列表
  //   } catch (error) {
  //     alert("修改失敗");
  //   }
  // };
  return {
    userList,
    isAdmin,
    isModalOpen,
    editingUser,
    handleLogout,
    deleteUser,
    openEditModal,
    updateUser,
  };
};
