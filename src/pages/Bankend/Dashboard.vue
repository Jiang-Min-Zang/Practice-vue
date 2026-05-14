<template>
  <div class="container mt-5">
    <div class="topBar">
      <h2>餐廳管理後台</h2>
      <button @click="handleLogout" class="btn btn-outline-danger">登出</button>
    </div>
    <div>
      <nav class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">首頁</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">權限設定</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">還在想</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">還在想</a>
        </li>
      </nav>
    </div>
    <div>
      <table class="table table-hover">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>帳號名稱</th>
            <th>Email</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button class="btn btn-danger" @click="deleteUser(user.id)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const userList = ref([]);
const handleLogout = () => {
  localStorage.removeItem("users");
  router.push("/LoginvView");
};
const fetchUsers = async () => {
  const res = await axios.get("http://localhost:3000/users");
  userList.value = res.data;
};
// 刪除使用者
const deleteUser = async (id) => {
  await axios.delete(`http://localhost:3000/users/${id}`);
  fetchUsers();
};

onMounted(() => {
  fetchUsers();
  console.log("要記得把她打開");
});
</script>

<style lang="scss" scoped>
.topBar {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}
.nav {
  display: flex;
  justify-content: center;
  gap: 10px;
}

@media (min-width: 768px) {
}
</style>
