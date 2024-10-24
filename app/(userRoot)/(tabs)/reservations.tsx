import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const reservations = () => {
  return (
    <SafeAreaView className="h-full flex-1 bg-primary-950">
      <View className="">
        <Text>Reservations </Text>
      </View>
    </SafeAreaView>
  );
};

export default reservations;
