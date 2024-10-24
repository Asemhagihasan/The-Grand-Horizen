import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import InputField from "@/components/InputField";
import { useLogin } from "@/hooks/useLogin";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { signIn, isPending } = useLogin();

  const handleSubmit = () => {
    if (!form.email || !form.password) return;
    signIn(form, { onSettled: () => setForm({ email: "", password: "" }) });
  };

  return (
    <ScrollView className="flex-1 bg-primary-950">
      <View className="flex-1 mt-16 p-5">
        <View className="relative w-full h-[250px] flex-col items-center gap-4">
          <Image source={require("../../assets/images/logo.png")} />
          <Text className="text-2xl text-primary-100 font-bold">
            Login To Your Account
          </Text>
        </View>
        <View>
          <InputField
            label="Email"
            labelStyle="text-primary-100"
            selectionColor="white"
            placeholder="example@gmail.com"
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <InputField
            label="Password"
            inputStyle="text-primary-100"
            selectionColor="#B7C7D7"
            labelStyle="text-primary-100"
            placeholder="********"
            secureTextEntry={true}
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSubmit}
          disabled={isPending}
          className="w-full p-4 items-center justify-center bg-accent-500 rounded-full mt-4"
        >
          <Text className="text-primary-800 text-lg font-semibold shadow-lg">
            {isPending ? "Loading..." : "Sign In"}
          </Text>
        </TouchableOpacity>
        <Link
          href="/sign-up"
          className="text-lg text-center text-primary-200 mt-4"
        >
          Don't have an account?{" "}
          <Text className="text-accent-500">Sign Up</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignIn;
