import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
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
      <Stack.Screen
        name="videoView"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
