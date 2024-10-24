import { useUser } from "@/hooks/useUser";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function UserLayout() {
  const { metaData } = useUser();
  if (metaData?.roleType !== "user") return <Redirect href="../not-found" />;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
