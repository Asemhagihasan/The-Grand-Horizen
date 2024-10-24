import { updateCurrentUser } from "@/services/authApi";
import { UserMetaData } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const useUpdateUser = () => {
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: (formData: UserMetaData) => updateCurrentUser(formData),
    onSuccess: () => {
      console.log("success");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { updateUser, isUpdating };
};
