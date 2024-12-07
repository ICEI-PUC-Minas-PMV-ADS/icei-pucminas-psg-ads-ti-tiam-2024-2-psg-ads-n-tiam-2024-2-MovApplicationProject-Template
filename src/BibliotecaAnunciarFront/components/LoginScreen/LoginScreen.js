import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import {auth} from '../../FirebaseConfig'


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      console.log('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const userType = email.endsWith('@adm.anunciar') ? 'Administrador' : 'Usuário';

      console.log('Sucesso', `Bem-vindo, ${userType}`);

      
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          console.log('Erro', 'O email inserido é inválido.');
          break;
        case 'auth/user-not-found':
          console.log('Erro', 'Usuário não encontrado.');
          break;
        case 'auth/wrong-password':
          console.log('Erro', 'Senha incorreta.');
          break;
        default:
          console.log('Erro', 'Algo deu errado. Tente novamente.');
      }
          
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logoanunciar.png')} style={styles.logo} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.link}>Register</Text>
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
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    alignSelf: 'center', 
  },
  input: {
    width: '60%', 
    padding: 10,
    marginVertical: 8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 100, 
    height: 100,
    marginBottom: 20, 
    resizeMode: 'contain',
  },
  loginButton: {
    width: '60%',
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#007AFF',
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 14,
  },
  logo: {
    width: 150,           
    height: 150,           
    resizeMode: 'contain',  
    marginBottom: 20,      
    alignSelf: 'center', 
  }
});



export default LoginScreen;
