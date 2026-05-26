import { ref } from "vue";
import axios from "axios";
import router from "../router";
import { authApi } from "../api/auth";
import Swal from "sweetalert2";

export const useLogin = () => {
  // 控制目前的狀態：true = 登入模式, false = 註冊模式
  const isLogin = ref(true);

  const formData = ref({
    username: "",
    email: "",
    password: "",
    role: "user",
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
          // alert("登入成功，歡迎" + res.data[0].username);
          Swal.fire({
            title: "登入成功，歡迎" + res.data[0].username,
            icon: "success",
            timer: 3000,
            position: "top",
            confirmButtonText: "我知道了",
          }).then(() => {
            window.location.href = "/Dashboard"; //強制更新
          });
          router.push("/Dashboard");
        } else {
          Swal.fire({
            title: "帳號密碼錯誤",
            icon: "error",
            timer: 3000,
          });
        }
        // console.log("執行登入邏輯", formData.value);
      } else {
        const checkRes = await axios.get(
          `http://localhost:3000/users?username=${formData.value.username}`,
        );
        if (checkRes.data.length > 0) {
          alert("姓名已被取走");
        } else {
          await axios.post("http://localhost:3000/users", formData.value);
          alert("註冊成功，請重新登入");
          isLogin.value = true;
        }
        console.log("執行註冊邏輯", formData.value);
      }
    } catch (error) {
      alert("伺服器連線失敗，請檢查json-server是否啟用");
    }
  };
  return {
    isLogin,
    formData,
    errors,
    handleSubmit,
  };
};
