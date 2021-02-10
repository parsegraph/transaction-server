import http from "./http-common";

const getAllAccounts = () => {
  return http.get("/accounts");
};

const getAccount = (id) => {
  return http.get(`/accounts/${id}`);
};

const createAccount = (data) => {
  return http.post("/accounts", data);
};

const updateAccount = (id, data) => {
  return http.put(`/accounts/${id}`, data);
};

const removeAccount = (id) => {
  return http.delete(`/accounts/${id}`);
};

export default {
  getAllAccounts,
  getAccount,
  createAccount,
  updateAccount,
  removeAccount,
};
