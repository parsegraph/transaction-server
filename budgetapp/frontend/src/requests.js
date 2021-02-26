import http from "./http-common";

const getAllAccounts = () => {
  return http.get("/account/");
};

const getAccount = (id) => {
  return http.get(`/account/${id}`);
};

const createAccount = (data) => {
  return http.post("/account/", data);
};

const updateAccount = (id, data) => {
  return http.put(`/account/${id}`, data);
};

const removeAccount = (id) => {
  return http.delete(`/account/${id}`);
};

// Login Requests

const getUser = (id) => {
  return http.get("/auth/user/")
}

export default {
  getAllAccounts,
  getAccount,
  createAccount,
  updateAccount,
  removeAccount,
  getUser,
};
