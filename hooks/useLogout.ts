import { supabase } from "@/services/supabase";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

export const useLogout = () => {
  const {
    mutate: logout,
    isPending,
    error,
  } = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error(error.message);
      return true;
    },
    onSuccess: () => {
      router.replace("/(auth)/welcome");
    },
  });

  return { logout, isPending, error };
};
