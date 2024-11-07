import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Login } from './src/screens/Login';
import { Recuperaçãosenha } from './src/screens/Recuperaçãosenha';
import { Signup } from './src/screens/Signup';
import { Splash } from './src/screens/Splash';
import { ThemeProvider } from './src/screens/temadark'; // Importando o contexto de tema

const Stack = createStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 5000); // Troca a tela após 5 segundos
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    // Envolvendo o aplicativo com o ThemeProvider para permitir o acesso global ao tema
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Recuperaçãosenha" component={Recuperaçãosenha} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
