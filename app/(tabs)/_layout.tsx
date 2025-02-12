import { Stack } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      {/* Tabs Navigation */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // Hide the header for tabs
        }}
      />

      {/* Login Screen */}
      <Stack.Screen
        name="auth/login"
        options={{
          title: 'Login', // Set the title for the Login screen
          headerShown: true, // Show the header for the Login screen
        }}
      />

      {/* Signup Screen */}
      <Stack.Screen
        name="auth/signup"
        options={{
          title: 'Sign Up', // Set the title for the Signup screen
          headerShown: true, // Show the header for the Signup screen
        }}
      />
    </Stack>
  );
}