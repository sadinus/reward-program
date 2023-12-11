import { baseApi } from "./base";
import { useQuery } from "@tanstack/react-query";

function fetchTransactions() {
  return baseApi
    .get("transactions")
    .then((res) => res.data)
    .catch((error) => {
      console.log(`${fetchTransactions.name} ->`, error);
    });
}

export const useTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });
};
