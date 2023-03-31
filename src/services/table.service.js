import service from "./request";
const getAllService = {
  table: () => service.get("/variations"),
};

export default getAllService;
