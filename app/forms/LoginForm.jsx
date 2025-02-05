import { useState } from "react";
import { View, Text, Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import axiosInstance from "../(services)/api/Client";
// critique !!!!!!  usestate, useeffect 
function LoginForm() {
    const apiUrl = process.env.EXPO_PUBLIC_APP_URL

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   async function handleLogin() {
  try {
    console.log("Initiating login...");

    const response = await axiosInstance.post(`auth/login`, {
      email,
      password,
    });
    
    console.log("Response received:", response);

    if (response.status === 200) {
      Alert.alert("Success", response.data.message);
      
      
    }
  } catch (error) {
    
    if (error.response) {
      
      console.error("Server error:", error.response.data);
    } else if (error.request) {
      
      console.error("No response received:", error.request);
    } else {
      
      console.error("Error setting up the request:", error.message);
    }
    Alert.alert("Error", "Login failed. Please try again.");
  }
}


    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Welcome back 📺</Text>
            <Text style={styles.title}>Login</Text>
            
            <TextInput 
                style = {styles.input}
                placeholder = "Email"
                value = {email}
                onChangeText={setEmail}
            />
            <TextInput 
                style = {styles.input}
                placeholder = "Password"
                value = {password}
                onChangeText={setPassword}
                secureTextEntry
            />
            
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text title="Login" style= {styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 40,
        textAlign: 'center',
    },
    input: {
        color: '#fff',
        width: 'fill',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },

    button: {
        backgroundColor: '#ff7e5f',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginForm;