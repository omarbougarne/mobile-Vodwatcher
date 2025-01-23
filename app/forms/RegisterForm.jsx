import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            console.log('Sending registration request...');
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                email,
                name,
                password,
            });

            console.log('Response received:', response);

            if (response.status === 200) {
                Alert.alert('Registered successfully');
            } else {
                console.log('Error response status:', response.status);
                console.log('Error response data:', response.data);
                Alert.alert('Error in registration', response.data.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Registration error:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
                Alert.alert('Error in registration', error.response.data.message || 'An error occurred');
            } else if (error.request) {
                console.error('Error request:', error.request);
                Alert.alert('Error in registration', 'No response from server');
            } else {
                console.error('Error message:', error.message);
                Alert.alert('Error in registration', error.message);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Movie app 🎥</Text>
            <Text style={styles.title}>Register</Text>
            <TextInput 
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput 
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 40,
        textAlign: 'center',
    },
    input: {
        color: '#000',
        width: '100%',
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

export default RegisterForm;