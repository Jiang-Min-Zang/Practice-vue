import { apiClient } from "./index";
import type { User } from "../types";

export const userApi = {
  getAll: async () => {
    const res = await apiClient.get<User[]>("/users");
    return res.data;
  },
  update: async (id: string, userData: Partial<User>) => {
    const res = await apiClient.put<User>(`/users/${id}`, userData);
    return res.data;
  },
  delete: async (id: string) => {
    const res = await apiClient.delete(`/users/${id}`);
    return res.data;
  },
};
