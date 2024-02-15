import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function App() {
const [darkMode, setDarkMode] = useState(false)
const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  results: {
    backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
    width: '20%',
    marginRight: '15%',
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
  },
  buttons: {
    width: '20%',
    marginRight: '15%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    borderColor: darkMode ? "#3f4d5b" : "#e5e5e5",
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 90, 
    flex: 2,
  },
  content: {
    alignItems: 'center',
    alignContent: 'center',
  }
});

  return (
    <View style={styles.content}>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? "light-up" : 'moon'} size={24} color={darkMode ? "white" : 'black'}
           onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}/> 
        </TouchableOpacity>
        <Text style={styles.resultText}>2 + 2 = 5</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
        button === '=' ?
        <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#9dbc7b'}]}>
          <Text>{button}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) 
          === 'number' ? darkMode === true ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed'}]}>
          <Text>{button}</Text>
        </TouchableOpacity>
        )}
      </View>
    </View>
  );
}


