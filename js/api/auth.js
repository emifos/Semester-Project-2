import { post } from "apiClient.js";

export async function registerUser(userData) {
  try {
    const register = await post(`/auth/register`, userData);
    return register;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
