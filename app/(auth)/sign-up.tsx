import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import InputField from "@/components/InputField";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import { Link, router } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import { signup as signUpApi } from "@/services/authApi";
import { SignUpProps } from "@/types";
import { useSignUp } from "@/hooks/useSignUp";

const SignUp = () => {
  const [form, setForm] = useState<SignUpProps>({
    fullName: "",
    email: "",
    password: "",
  });

  const { signUp, isPending } = useSignUp();

  const handleSubmit = () => {
    if (!form.fullName || !form.email || !form.password) return;
    signUp(form, {
      onSettled: () => setForm({ fullName: "", email: "", password: "" }),
    });
  };

  return (
    <ScrollView className="flex-1 bg-primary-950">
      <View className="flex-1 mt-16 p-5">
        <View className="relative w-full h-[250px] flex-col items-center gap-4">
          <Image source={require("../../assets/images/logo.png")} />
          <Text className="text-2xl text-primary-100 font-bold">
            Create Your Account
          </Text>
        </View>
        <View>
          <InputField
            label="Full Name"
            labelStyle="text-primary-100"
            placeholder="Enter your full name"
            selectionColor="white"
            icon={() => (
              <Ionicons
                size={24}
                name="person"
                color="#B7C7D7"
                style={{ marginLeft: 16 }}
              />
            )}
            value={form.fullName}
            onChangeText={(text) => setForm({ ...form, fullName: text })}
          />
          <InputField
            label="Email"
            labelStyle="text-primary-100"
            selectionColor="white"
            placeholder="example@gmail.com"
            icon={() => (
              <MaterialCommunityIcons
                size={24}
                name="email"
                color="#B7C7D7"
                style={{ marginLeft: 16 }}
              />
            )}
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <InputField
            label="Password"
            inputStyle="text-primary-100"
            selectionColor="white"
            labelStyle="text-primary-100"
            placeholder="********"
            secureTextEntry={true}
            icon={() => (
              <FontAwesome
                size={24}
                name="lock"
                color="#B7C7D7"
                style={{ marginLeft: 16 }}
              />
            )}
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={isPending}
          className="w-full p-4 items-center justify-center bg-accent-500 rounded-full mt-4"
          onPress={handleSubmit}
        >
          <Text className="text-primary-800 text-lg font-semibold shadow-lg">
            {isPending && <ActivityIndicator size="small" color="#fff" />}
            Sign Up
          </Text>
        </TouchableOpacity>
        <Link
          href="/sign-in"
          className="text-lg text-center text-primary-200 mt-4"
        >
          Already have an account?
          <Text className="text-accent-500">Log In</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SignUp;
