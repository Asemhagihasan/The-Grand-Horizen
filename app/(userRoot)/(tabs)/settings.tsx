import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLogout } from "@/hooks/useLogout";

const Settings = () => {
  const { isPending, logout } = useLogout();

  if (isPending) return <ActivityIndicator />;
  return (
    <SafeAreaView className="h-full flex-1 items-center bg-primary-950">
      <Text>Settings</Text>
      <TouchableOpacity
        onPress={() => logout()}
        className="p-5 w-full bg-white"
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;
