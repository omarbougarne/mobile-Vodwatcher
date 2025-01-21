import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const movies = [
   { id: '1', title: 'Inception', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Interstellar', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'The Dark Knight', image: 'https://via.placeholder.com/150' },
];

function Movies() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  movieItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  movieTitle: {
    fontSize: 18,
  },
});

export default Movies;