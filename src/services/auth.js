import service from "./request";
const authService = {
  login: (param) => service.post("api/login", param),
};

export default authService;
