import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from 'react-native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  logoContainer: {
    marginBottom: 60
  },
  logo: {
    width: 100,
    height: 100
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    fontSize: 16
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});
export default SignUpScreen;