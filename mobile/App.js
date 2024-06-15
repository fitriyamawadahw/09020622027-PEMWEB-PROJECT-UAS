import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://192.168.56.1:3000')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>News List</Text>
      <View style={styles.newsContainer}>
        {news.map(item => (
          <View key={item.id_berita} style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.judul_berita}</Text>
            <Text style={styles.newsSummary}>{item.ringkasan}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  newsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  newsItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsSummary: {
    fontSize: 17,
  },
});