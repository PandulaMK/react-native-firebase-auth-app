import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth module

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  // Sign up function
  const handleSignUp = async () => {
    if (password !== confirm) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      // Create new user with email and password
      await auth().createUserWithEmailAndPassword(email, password);
      // You can also update the user's display name if needed
      await auth().currentUser.updateProfile({
        displayName: name,
      });
      
      navigation.navigate('Welcome'); // Navigate to Welcome screen upon successful sign-up
    } catch (error) {
      console.error(error);
      Alert.alert('Sign Up Error', error.message); // Show error message if sign-up fails
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />

      <TouchableOpacity onPress={handleSignUp}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>
          Have an account? <Text style={{ color: '#fcd577' }}>Sign In</Text>
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

export default SignUpScreen;
