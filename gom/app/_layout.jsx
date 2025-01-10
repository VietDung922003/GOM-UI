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
      <Stack.Screen
        name="homeScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="postView"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="photoView"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profileView"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="addPost"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
