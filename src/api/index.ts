import axios from "axios";

// 建立唯一的 Axios 實體並匯出
export const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
