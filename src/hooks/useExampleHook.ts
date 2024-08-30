import { useQuery } from "react-query";
import { fetchData } from "../services/api";

export const useExampleData = () => {
  return useQuery("exampleData", fetchData);
};
