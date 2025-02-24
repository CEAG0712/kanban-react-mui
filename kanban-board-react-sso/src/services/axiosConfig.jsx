import axios from "axios";
import Swal from "sweetalert2";

const axiosConfig = axios.create({
  baseURL: "https://kanban-sso-mui-backend.azurewebsites.net/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Session time out, please login again",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      localStorage.removeItem("user");

      //change to use react router dom. this is vanilla js solution
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }

    return Promise.reject(error);
  }
);

export default axiosConfig;
