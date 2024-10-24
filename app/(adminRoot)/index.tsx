import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLogout } from "@/hooks/useLogout";

const index = () => {
  const { isPending, logout } = useLogout();
  if (isPending) return <ActivityIndicator size="large" />;
  return (
    <SafeAreaView className="h-full flex-1 items-center justify-center bg-primary-950 p-5">
      <Text className="text-white mb-6">Admin panael page</Text>
      <TouchableOpacity
        disabled={isPending}
        activeOpacity={0.6}
        className="p-5 w-full bg-accent-500 items-center justify-center rounded-full"
        onPress={() => logout()}
      >
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;
