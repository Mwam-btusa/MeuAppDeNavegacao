import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './scr/screens/HomeScreen';
import DetailsScreen from './scr/screens/DetailsScreen';
import ProfileScreen from './scr/screens/ProfileScreen';
// Tela de Login
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name ="Home" component={HomeScreen} />
        <Stack.Screen name ="Details" component={DetailsScreen} />
        <Stack.Screen name ="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


  function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Validação dos dados de entrada
      if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      // Lógica de login (verificar credenciais, etc.)
  
      // Após o login bem-sucedido, navegar para a tela principal
      navigation.navigate('Home');
    };
  
    return (
      <View>
        <Text>Tela de Login</Text>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  }
  
  export default LoginScreen;
  
  // Navegação para a tela de login
  import { createStackNavigator } from '@react-navigation/stack';
  import LoginScreen from './LoginScreen';
  
  const Stack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* Outras telas do aplicativo */}
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;
}