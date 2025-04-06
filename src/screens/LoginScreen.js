import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth module

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Sign in with Firebase Authentication
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Welcome'); // Navigate to the Welcome screen upon successful login
    } catch (error) {
      console.error(error);
      Alert.alert('Login Error', error.message); // Show error message
    }
  };

  const handleSignUp = async () => {
    try {
      // Sign up with Firebase Authentication
      await auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('Welcome'); // Navigate to the Welcome screen upon successful sign-up
    } catch (error) {
      console.error(error);
      Alert.alert('Sign Up Error', error.message); // Show error message
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignUp}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>
          Don't have an account? <Text style={{ color: '#fcd577' }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#2c2c2e',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fcd577',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
  },
  link: {
    textAlign: 'center',
    color: '#aaa',
  },
});

export default LoginScreen;
