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
      
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, 
        }}
      />

     
      <Stack.Screen
        name="auth/login"
        options={{
          title: 'Login', 
          headerShown: true, 
        }}
      />

      
      <Stack.Screen
        name="auth/signup"
        options={{
          title: 'Sign Up', 
          headerShown: true, 
        }}
      />
    </Stack>
  );
}