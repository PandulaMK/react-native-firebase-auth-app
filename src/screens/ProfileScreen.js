import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'; // Import Firebase Auth

const ProfileScreen = ({ navigation }) => {
  const user = auth().currentUser; // Get the current user

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user?.displayName || 'No name set'}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email}</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: '#2c2c2e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  label: {
    color: '#aaa',
    fontSize: 12,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#fcd577',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProfileScreen;
