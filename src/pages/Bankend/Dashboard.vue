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
              <button
                v-if="isAdmin"
                class="btn btn-warning me-2"
                @click="openEditModal(user)"
              >
                編輯
              </button>
              <button
                v-if="isAdmin"
                class="btn btn-danger"
                @click="deleteUser(user.id)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        v-if="isModalOpen"
        style="display: block"
        class="modal"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">編輯會員權限</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="isModalOpen = false"
              ></button>
            </div>
            <div class="modal-body" v-if="editingUser">
              <div class="mb-3">
                <label class="form-label">修改帳號權限</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editingUser.username"
                />
                <select class="form-select" v-model="editingUser.role">
                  <option value="user">user (一般用戶)</option>
                  <option value="admin">admin (管理員)</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="isModalOpen = false"
              >
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="updateUser">
                儲存
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--  <div
        v-if="isModalOpen"
        class="modal fade show d-block"
        style="background: rgba(0, 0, 0, 0.5)"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">編輯使用者</h5>
              <button
                type="button"
                class="btn-close"
                @click="isModalOpen = false"
              ></button>
            </div>
            <div class="modal-body" v-if="editingUser">
              <div class="mb-3">
                <label class="form-label">帳號名稱</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editingUser.username"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">權限角色</label>
                <select class="form-select" v-model="editingUser.role">
                  <option value="user">user (一般用戶)</option>
                  <option value="admin">admin (管理者)</option>
                </select>
              </div>
            </div>
            <div class="modal-header d-flex justify-content-end gap-2">
              <button
                type="button"
                class="btn btn-secondary"
                @click="isModalOpen = false"
              >
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="updateUser">
                儲存修改
              </button>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { useUserManage } from "../../hooks/useUserManage";
const {
  userList,
  isAdmin,
  isModalOpen,
  editingUser,
  handleLogout,
  deleteUser,
  openEditModal,
  updateUser,
} = useUserManage();
// import { ref, onMounted } from "vue";
// import axios from "axios";
// import { useRouter } from "vue-router";
// const router = useRouter();
// const userList = ref([]);
// const handleLogout = () => {
//   localStorage.removeItem("users");
//   router.push("/LoginvView");
// };
// const fetchUsers = async () => {
//   const res = await axios.get("http://localhost:3000/users");
//   userList.value = res.data;
// };
// // 刪除使用者
// const deleteUser = async (id) => {
//   await axios.delete(`http://localhost:3000/users/${id}`);
//   fetchUsers();
// };

// onMounted(() => {
//   fetchUsers();
//   console.log("要記得把她打開");
// });
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
