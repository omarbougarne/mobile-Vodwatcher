import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from "axios";

function RegisterForm() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
   const handleRegister = async () =>{
        try{
            const response = axios.post('http://localhost:5000/api/auth/register',{
                email,
                name,
                password
            });
            if(response === 200){
                Alert.alert     ('Registered successfully')       
            }else {
                console.log('Error response status:', response.status);
                console.log('Error response data:', response.data);
                Alert.alert('Error in registration', response.data.message || 'An error occurred');
            }
   }catch(error){
        console.log(error)
        Alert.alert('Error in registration')
   }
}


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
            
                <TouchableOpacity style={styles.button} onPress = {handleRegister}>
                <Text title="Register" style= {styles.buttonText}>Register</Text>
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

export default RegisterForm;