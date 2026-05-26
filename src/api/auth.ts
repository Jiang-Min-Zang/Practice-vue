import { apiClient } from "./index";
import type { AuthResponse, User } from "../types";
export const authApi = {
  login: async (loginData: Pick<User, "username"> & { password: string }) => {
    // 透過 apiClient 發送請求
    const res = await apiClient.post<AuthResponse>("/login", loginData);
    return res.data;
  },
};
