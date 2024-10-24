import { login } from "@/services/authApi";
import { SignInProps } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

export const useLogin = () => {
  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ email, password }: SignInProps) =>
      login({ email, password }),
    onSuccess: () => {
      console.log("success");
      router.push("../(userRoot)/(tabs)/cabins");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { signIn, isPending };
};
