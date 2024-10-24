import { useUser } from "@/hooks/useUser";
import { Redirect, Stack } from "expo-router";

export default function UserLayout() {
  const { metaData } = useUser();
  console.log(metaData);
  if (metaData?.roleType !== "admin") return <Redirect href="../not-found" />;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" />
    </Stack>
  );
}
