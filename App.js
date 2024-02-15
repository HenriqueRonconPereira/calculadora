import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function App() {
const [darkMode, setDarkMode] = useState(false)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  results: {
    backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
    width: '328%',
    minHeight: 280,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

  },
  resultText: {
    margin: 10,
    fontSize: 25,
    color: darkMode ? "#fff" : "#000",
  },
  themeButton: {
    alignSelf: 'flex-start',
    bottom: 130,
    margin: 15,
    backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderRadius: 25, 
  }
});

  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? "light-up" : 'moon'} size={24} color={darkMode ? "white" : 'black'}
           onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}/> 
        </TouchableOpacity>
        <Text style={styles.resultText}>2 + 2 = 5</Text>
      </View>
      <View style={styles.buttons}>

      </View>
    </View>
  );
}


