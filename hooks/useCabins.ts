import { getCabins } from "@/services/apiCabins";
import { Cabin, FilterValues } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useCabins = () => {
  const {
    isPending: isLoadingCabins,
    data: cabins,
    error,
  } = useQuery<Cabin[]>({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { cabins, isLoadingCabins };
};
