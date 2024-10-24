import { getCountries } from "@/services/data-service";
import { useQuery } from "@tanstack/react-query";

export const useCountries = () => {
  const { data: countryOptions, isPending: isLoadingCountries } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  return {
    countryOptions,
    isLoadingCountries,
  };
};
