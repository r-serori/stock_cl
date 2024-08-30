import axios from "axios";

export const fetchData = async () => {
  const response = await axios.get("/api/data");
  return response.data;
};
