import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://115.140.87.3/api",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accToken = localStorage.getItem("access");
    const refToken = localStorage.getItem("refresh");

    if (accToken) {
      config.headers["Authorization"] = `Bearer ${accToken}`;
    }

    if (refToken) {
      config.headers["Refresh-Token"] = refToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 403) {
      const { access, refresh } = error.response.data;
      console.log(access, refresh);
      if (access && refresh) {
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);

        const originalRequest = error.config;
        originalRequest.headers["Authorization"] = `Bearer ${access}`;
        originalRequest.headers["Refresh-Token"] = refresh;

        return axiosInstance(originalRequest);
      } else {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
      }
    }

    return Promise.reject(error);
  }
);

export const login = async (id: string, email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      id: id,
      email: email,
      password: password,
    });

    console.log(response.data.token);

    const accessToken = response.data.token;

    return {
      access: accessToken,
      id: response.data.id,
      message: response.data.message,
    };
  } catch (error) {
    throw error;
  }
};

export default axiosInstance;
