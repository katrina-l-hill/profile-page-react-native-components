import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Profile Page with React Native Core Components
        </Text>
        <StatusBar style="auto" />
      </View>

      <Image
        source={require('./assets/heart.png')}
        style={{ width: 100, height: 100, marginTop: 20 }}
      />

    <ScrollView>
      <Text>
        <View>
          <TextInput
            placeholder='Enter a name'
            value={text}
            onChangeText={newText => setText(newText)}           
          />
          <TextInput
            placeholder='Enter a comment'
            value={text}
            onChangeText={newText => setText(newText)}           
          />
          <Text>
            Submit
          </Text>
        </View>
      </Text>
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#85301e',
  },
});
