<template>
  <div class="auth-card">
    <h3>{{ isLogin ? "會員登入" : "立即註冊" }}</h3>

    <div class="form-container">
      <div v-if="!isLogin" class="form-group">
        <label>姓名</label>
        <input
          type="text"
          v-model="formData.username"
          placeholder="請輸入真實姓名"
        />
      </div>

      <div class="form-group">
        <label>電子信箱</label>
        <input
          type="email"
          v-model="formData.email"
          placeholder="example@mail.com"
        />
      </div>

      <div class="form-group">
        <label>密碼</label>
        <input
          type="password"
          v-model="formData.password"
          placeholder="請輸入密碼"
        />
      </div>

      <div class="button-group">
        <button class="btn-primary" @click="handleSubmit">
          {{ isLogin ? "登入系統" : "完成註冊" }}
        </button>

        <button class="btn-outline" @click="isLogin = !isLogin">
          切換至 {{ isLogin ? "註冊" : "登入" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Header">
import { ref } from "vue";

// 控制目前的狀態：true = 登入模式, false = 註冊模式
const isLogin = ref(true);

const formData = ref({
  username: "",
  email: "",
  password: "",
});

const handleSubmit = () => {
  if (isLogin.value) {
    console.log("執行登入邏輯", formData.value);
  } else {
    console.log("執行註冊邏輯", formData.value);
  }
};
</script>

<style lang="scss" scoped>
.auth-card {
  width: 100%;
  min-width: 375px;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: #666;
}

input {
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1.5rem;
}

button {
  padding: 0.8rem;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  font-weight: bold;
}

.btn-primary {
  background-color: #42b883; /* Vue 綠 */
  color: white;
}

.btn-outline {
  background: transparent;
  color: #42b883;
  border: 1px solid #42b883;
}
</style>
