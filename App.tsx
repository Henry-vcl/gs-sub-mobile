import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation';

import { Home } from './src/screens/home';
import { Formulario } from './src/screens/formulario';
import { Detalhes } from './src/screens/detalhes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0284c7' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'ZelaBairro - Ocorrências' }}
        />
        <Stack.Screen
          name="Formulario"
          component={Formulario}
          options={{ title: 'Registrar / Editar' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: 'Detalhes da Ocorrência' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}