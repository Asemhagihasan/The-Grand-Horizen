import React, { useEffect } from "react";
import { Redirect, router } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import { useUser } from "@/hooks/useUser";
import * as SplashScreen from "expo-splash-screen";
const Index = () => {
  const { isLoadingUser, isAuthonticated, metaData } = useUser();

  // useEffect(() => {
  //   // Wait until loading is complete before navigating
  //   if (!isAuthonticated && !isLoadingUser) {
  //     router.push("/welcome");
  //   }
  // }, [isAuthonticated, isLoadingUser]);

  const role = metaData?.roleType;

  if (isLoadingUser)
    return (
      <View className="h-full bg-primary-950 items-center justify-center">
        <ActivityIndicator size="large" color="#B7C7D7" />
      </View>
    );

  return isAuthonticated ? (
    role === "user" ? (
      <Redirect href={`./(userRoot)/(tabs)/cabins`} />
    ) : (
      <Redirect href={`./(adminRoot)`} />
    )
  ) : (
    <Redirect href={`./welcome`} />
  );
};

export default Index;
