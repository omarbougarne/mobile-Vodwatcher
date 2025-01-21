import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';


export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#ff7e5f', '#feb47b']} 
      style={styles.container}
    >
      <RegisterForm />
      
      <Text>OR</Text>
      <View>
        <Link href="../forms/LoginForm" style={styles.linkText}>
        <Text>Log in</Text>
        </Link>
        <Link href="../Movies" style={styles.linkText}>
        <Text>Movies</Text>
        </Link>
        </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});