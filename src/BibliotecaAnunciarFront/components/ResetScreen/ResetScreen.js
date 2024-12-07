import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth'; 
import { useNavigation } from '@react-navigation/native'; 

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const navigation = useNavigation(); 

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira o e-mail.');
      return;
    }

    setIsLoading(true); 

    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        'Email Enviado',
        'Um e-mail para redefinição de senha foi enviado. Verifique sua caixa de entrada.',
        [{ text: 'OK', onPress: () => navigation.navigate('LoginScreen') }] 
      );
    } catch (error) {
      let errorMessage = 'Ocorreu um erro desconhecido.';
      
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'O e-mail fornecido não é válido.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'Não encontramos um usuário com esse e-mail.';
      }

      Alert.alert('Erro', errorMessage);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Recuperação de Senha</Text>
      <Text style={styles.instructions}>
        Digite seu e-mail. Você receberá um link para redefinir sua senha.
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={[styles.resetButton, { opacity: isLoading || !email ? 0.5 : 1 }]} 
        onPress={handlePasswordReset}
        disabled={isLoading || !email} 
      >
        <Text style={styles.resetButtonText}>
          {isLoading ? 'Enviando...' : 'Enviar Link de Recuperação'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.link}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  resetButton: {
    width: '80%',
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#007AFF',
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default ForgotPasswordScreen;