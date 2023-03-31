import service from "./request";
const authService = {
  login: (param) => service.post("/security/auth_check", param),
};

export default authService;
