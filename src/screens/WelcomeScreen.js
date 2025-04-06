import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth

const WelcomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await auth().signOut(); // Sign out the user
      navigation.navigate('Login'); // Navigate to Login screen after logout
    } catch (error) {
      console.error(error);
      Alert.alert('Logout Error', error.message); // Show error message if logout fails
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App!</Text>

      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log Out</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Go to Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
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
});

export default WelcomeScreen;
