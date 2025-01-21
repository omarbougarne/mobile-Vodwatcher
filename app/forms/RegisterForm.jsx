import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


function RegisterForm() {
   

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Movie app 🎥</Text>
            <Text style={styles.title}>Register</Text>
            <TextInput 
                style = {styles.input}
                placeholder = "Name"
            />
            <TextInput 
                style = {styles.input}
                placeholder = "Email"
            />
            <TextInput 
                style = {styles.input}
                placeholder = "Password"
            />
            
                <TouchableOpacity style={styles.button}>
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