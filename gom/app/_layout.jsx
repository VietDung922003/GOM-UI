import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="homeScreen">
      <Stack.Screen
        name="homeScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="videoView"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cameraView"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}