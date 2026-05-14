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
          :class="{ 'is-invalid': errors.email }"
        />
        <div class="invalid-feedback">
          {{ errors.username }}
        </div>
      </div>

      <div class="form-group">
        <label>電子信箱</label>
        <input
          type="email"
          v-model="formData.email"
          placeholder="example@mail.com"
          :class="{ 'is-invalid': errors.email }"
        />
        <div class="invalid-feedback">
          {{ errors.email }}
        </div>
      </div>

      <div class="form-group">
        <label>密碼</label>
        <input
          type="password"
          v-model="formData.password"
          placeholder="請輸入密碼"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">
          {{ errors.password }}
        </div>
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
import router from "../router";
import axios from "axios";
// 控制目前的狀態：true = 登入模式, false = 註冊模式
const isLogin = ref(true);

const formData = ref({
  username: "",
  email: "",
  password: "",
});
const errors = ref({
  email: "",
  password: "",
  username: "",
});

const vaildateForm = () => {
  let isVaild = true;
  errors.value = { username: "", password: "", email: "" };

  if (!formData.value.email) {
    errors.value.email = "請輸入Email";
    isVaild = false;
  } else if (!formData.value.email.includes("@")) {
    errors.value.email = "Email的格式不對";
    isVaild = false;
  }
  if (!formData.value.password) {
    errors.value.password = "請輸入密碼";
    isVaild = false;
  } else if (formData.value.password.length < 6) {
    errors.value.password = "密碼不能少於6個字";
    isVaild = false;
  }

  if (!isLogin.value) {
    if (!formData.value.username) {
      errors.value.username = "你沒填寫名字";
      isVaild = false;
    } else if (formData.value.username.length < 2) {
      errors.value.username = "最少輸入兩個字";
      isVaild = false;
    }
  }

  return isVaild;
};
const handleSubmit = async () => {
  const isFromVaild = vaildateForm();
  // console.log("驗證結果是：", isFromVaild);
  if (!isFromVaild) {
    console.log("驗證失敗，不發送請求");

    return;
  }
  try {
    // console.log(isLogin.value, "---isLogin.value");
    if (isLogin.value) {
      const res = await axios.get(
        `http://localhost:3000/users?email=${formData.value.email}&password=${formData.value.password}`,
      );
      // console.log(res, "--------------------");
      if (res.data.length > 0) {
        localStorage.setItem("users", JSON.stringify(res.data[0]));
        console.log("users", JSON.stringify(res.data[0]));
        alert("登入成功，歡迎" + res.data[0].username);
        router.push("/Dashboard");
      } else {
        alert("帳號密碼錯誤");
      }
      // console.log("執行登入邏輯", formData.value);
    } else {
      const checkRes = await axios.get(
        `http://localhost:3000/users?username=${formData.value.username}`,
      );
      if (checkRes.data.length > 0) {
        alert("姓名已被取走");
      } else {
        const res = await axios.post(
          "http://localhost:3000/users",
          formData.value,
        );
        alert("註冊成功，請重新登入");
        isLogin.value = true;
      }
      console.log("執行註冊邏輯", formData.value);
    }
  } catch (error) {
    alert("伺服器連線失敗，請檢查json-server是否啟用");
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
