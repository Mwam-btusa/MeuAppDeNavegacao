// scr/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Hook para acessar a navegação

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Lógica de login simulada
    if (email === 'test@example.com' && password === 'senha123') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Home'); // Navega para a tela principal
    } else {
      Alert.alert('Erro de Login', 'E-mail ou senha incorretos.');
    }
  };

  // Funções para navegar para as novas telas
  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  // Funções para login social (apenas placeholders)
  const handleGoogleLogin = () => {
    Alert.alert('Funcionalidade', 'Login com Google em desenvolvimento!');
    // Implementar autenticação com Google
  };

  const handleFacebookLogin = () => {
    Alert.alert('Funcionalidade', 'Login com Facebook em desenvolvimento!');
    // Implementar autenticação com Facebook
  };

  const handleAppleLogin = () => {
    Alert.alert('Funcionalidade', 'Login com Apple em desenvolvimento!');
    // Implementar autenticação com Apple (para iOS)
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
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} color="#1E90FF" />

      <TouchableOpacity onPress={handleForgotPasswordPress} style={styles.linkButton}>
        <Text style={styles.linkText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonsContainer}>
        <Button title="Login com Google" onPress={handleGoogleLogin} color="#DB4437" />
        <Button title="Login com Facebook" onPress={handleFacebookLogin} color="#4267B2" />
        {/* Adicione o botão para Apple Login, que geralmente é condicional a iOS */}
        {/* <Button title="Login com Apple" onPress={handleAppleLogin} color="#000000" /> */}
      </View>

      <TouchableOpacity onPress={handleRegisterPress} style={styles.registerButton}>
        <Text style={styles.registerText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F2F5',
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
  linkButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  linkText: {
    color: '#1E90FF',
    fontSize: 14,
  },
  socialButtonsContainer: {
    width: '90%',
    marginTop: 20,
    marginBottom: 30,
    gap: 10, // Adiciona espaço entre os botões sociais
  },
  registerButton: {
    marginTop: 20,
  },
  registerText: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen; // Certifique-se de exportar