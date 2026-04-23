import { post } from "./apiClient.js";

export async function registerUser(userData) {
  try {
    const register = await post("/auth/register", userData);
    return register;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function loginUser(credentials) {
  try {
    const login = await post("/auth/login", credentials);
    return login;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
