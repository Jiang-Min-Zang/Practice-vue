import { type User } from "./user";

export interface AuthResponse {
  token: string; // 後端發給前端的通行證
  user: User; // 順便複用上面定義好的 User 結構
  loginTime: string; // 登入時間（舉例）
}
