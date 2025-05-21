// scr/screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, digite seu e-mail.');
      return;
    }
    // Lógica para enviar e-mail de recuperação de senha (chamada à API)
    Alert.alert(
      'Instruções Enviadas',
      `Um e-mail de redefinição de senha foi enviado para ${email}. Por favor, verifique sua caixa de entrada.`
    );
    navigation.goBack(); // Volta para a tela anterior (Login)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.description}>
        Digite seu e-mail abaixo para receber um link de redefinição de senha.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Redefinir Senha" onPress={handleResetPassword} color="#FFC107" />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
    color: '#555',
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

export default ForgotPasswordScreen;