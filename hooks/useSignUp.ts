import { login, signup } from "@/services/authApi";
import { SignUpProps } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

export const useSignUp = () => {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ fullName, email, password }: SignUpProps) =>
      signup({ fullName, email, password }),
    onSuccess: () => {
      router.push("/");
    },
    onError: (err) => {
      Alert.alert("Error", err.message);
    },
  });

  return { signUp, isPending };
};
