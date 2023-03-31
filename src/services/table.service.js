import service from "./request";
const getAllService = {
  table: (current) => service.get(`/variations?page=${current}`),
};

export default getAllService;
