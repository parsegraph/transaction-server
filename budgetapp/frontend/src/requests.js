import http from "./http-common";

const saveLogin = (login)=>{
  localStorage.setItem('login', JSON.stringify(login));
}

const loadLogin = ()=>{
  try {
    const login = localStorage.getItem('login');
    if (login) {
      return JSON.parse(login);
    }
  }
  catch(ex) {
    console.log("Error occurred while loading login");
    console.log(ex);
    try {
      localStorage.removeItem("login");
    }
    catch (ex) {
      console.log("Error occurred while trying to clear invalid login");
      console.log(ex);
    }
  }
  return null;
}

const getLoginToken = ()=>{
  const login = loadLogin();
  return login ? login.token : "";
}

const isLoggedIn = ()=>{
  return !!loadLogin();
}

const getUsername = ()=>{
  const login = loadLogin();
  return login ? login.username : "";
}

const getAllAccounts = () => {
  return http.get(`/account/`);
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
  return http.get("/auth/user")
}

const createUser = (username, email, password) => {
  return http.post("/auth/register", {username, email, password});
}

export default {
  getAllAccounts,
  getAccount,
  createAccount,
  updateAccount,
  removeAccount,
  getUser,
  createUser,
  saveLogin,
  loadLogin,
  getLoginToken,
  getUsername,
  isLoggedIn,
};
