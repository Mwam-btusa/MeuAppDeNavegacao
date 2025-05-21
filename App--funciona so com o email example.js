import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'; // Importar Alert para mensagens
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe suas telas
import HomeScreen from './scr/screens/HomeScreen';
import DetailsScreen from './scr/screens/DetailsScreen';
import ProfileScreen from './scr/screens/ProfileScreen';

const Stack = createStackNavigator();

// --- Componente da Tela de Login ---
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validação básica dos dados de entrada
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // --- Lógica de login (simulada) ---
    // Em um aplicativo real, você faria uma chamada API para autenticar o usuário aqui.
    // Por exemplo:
    // try {
    //   const response = await fetch('sua_api_de_login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     // Salvar token ou dados do usuário (por exemplo, com AsyncStorage)
    //     navigation.navigate('Home');
    //   } else {
    //     Alert.alert('Erro de Login', data.message || 'Credenciais inválidas.');
    //   }
    // } catch (error) {
    //   Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    // }

    // Simulação de login bem-sucedido para demonstração:
    if (email === 'test@example.com' && password === 'senha123') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Home'); // Navega para a tela principal após o login
    } else {
      Alert.alert('Erro de Login', 'E-mail ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none" // Para não capitalizar a primeira letra do e-mail
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true} // Esconde o texto digitado
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} color="#1E90FF" />
      {/* Você pode adicionar um botão para "Esqueceu a senha?" ou "Criar Conta" aqui */}
    </View>
  );
}

// --- Componente Principal da Aplicação ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* A tela de Login é a primeira a ser mostrada */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho de navegação na tela de login
        />
        {/* As outras telas do aplicativo, acessíveis após o login */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// --- Estilos para a Tela de Login ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F2F5', // Um fundo claro e suave
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '90%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
});