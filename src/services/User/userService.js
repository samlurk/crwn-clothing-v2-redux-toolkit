import httpService from "../Http/HttpService";

const userService = {
  getUsers: async () => {
    const response = await httpService.get("user");
    return response;
  },
};
export default userService;
