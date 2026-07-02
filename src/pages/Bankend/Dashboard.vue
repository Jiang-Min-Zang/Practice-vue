<template>
  <div class="container mt-5">
    <div class="topBar">
      <h2>餐廳管理後台</h2>
      <Navbar :user="currentUser">
        <template #action-button>
          <button @click="handleLogout" class="btn btn-outline-danger">
            登出
          </button>

          <button @click="toggleTheme" class="btn btn-secondary">
            當前模式：{{ theme === "light" ? "🌞 明亮" : "🌙 暗黑" }}
          </button>
        </template>
      </Navbar>
      <!-- <button @click="handleLogout" class="btn btn-outline-danger">登出</button> -->
    </div>
    <div class="row">
      <div class="col-sm-2">
        <Sidebar />
        <!-- <nav class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">首頁</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/goods">菜單管理</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">還在想</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">還在想</a>
          </li>
        </nav> -->
      </div>
      <div class="col-sm-10">
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
                  <i-svg-spinners:12-dots-scale-rotate />
                  編輯
                </button>
                <button
                  v-if="isAdmin"
                  class="btn btn-danger"
                  @click="deleteUser(user.id)"
                >
                  <i-lucide:badge-x />
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="updateUser"
                >
                  儲存
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserManage } from "../../hooks/useUserManage";
import Navbar from "@/components/backend/Navbar.vue";
import Sidebar from "@/components/backend/Sidebar.vue";
import { useTheme } from "@/hooks/useTheme";
const { theme, toggleTheme } = useTheme();
const {
  userList,
  isAdmin,
  isModalOpen,
  currentUser,
  editingUser,
  handleLogout,
  deleteUser,
  openEditModal,
  updateUser,
} = useUserManage();
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--bg-color);
  color: var(--text-color);
}
.topBar {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}
.nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(245, 245, 245);
}

@media (min-width: 768px) {
}
</style>
