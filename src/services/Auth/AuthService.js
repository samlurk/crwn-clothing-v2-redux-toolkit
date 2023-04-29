import httpService from "../Http/HttpService";

const authService = {
  login: async (username, password) => {
    const response = await httpService.post("auth/login", {
      username,
      password,
    });
    // Save token to local storage or state
    localStorage.setItem("token", response.token);
    return response;
  },
  googleLogin: async () => {
    const response = await httpService.get("auth/google");
    window.location.href = response.data.redirectUrl;
    // localStorage.setItem("token", response.token);
    return response;
  },
  logout: () => {
    // Remove token from local storage or state
    localStorage.removeItem("token");
  },
  isLoggedIn: () => {
    // Check if token exists in local storage or state
    return !!localStorage.getItem("token");
  },
};

export default authService;
