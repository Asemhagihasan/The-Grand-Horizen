import { SignUpProps } from "@/types";
import { supabase } from "./supabase";
import { UpdatedUserSchema } from "@/types/schema";

export async function signup(formData: SignUpProps) {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        fullName: formData.fullName,
        roleType: "user",
      },
    },
  });
  console.log(error);
  if (error) throw new Error(error.message);

  return data;
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session, error: sessionError } =
    await supabase.auth.getSession();

  if (!session.session || sessionError) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function updateCurrentUser(formData: typeof UpdatedUserSchema) {
  if (formData.newPassword) {
    const { data, error } = await supabase.auth.updateUser({
      password: formData.newPassword,
    });
    if (error) throw new Error(error.message);
    return data;
  }
  const { data, error } = await supabase.auth.updateUser({
    data: formData,
  });
  if (error) throw new Error(error.message);
  return data;
}
