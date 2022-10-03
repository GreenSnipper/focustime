import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { FocusContext } from './src/contexts/FocusContexts';
import {Timer} from './src/features/Timer'
import {FocusHistory} from './src/features/FocusHistory'

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history,setHistory] = useState([]);
  return (
    <FocusContext.Provider value={{
      currentSubject, setCurrentSubject,
      history,setHistory,
    }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>HAQGROUP</Text>
        {!currentSubject ? (
          <>
          <Focus />
          <FocusHistory />
          </> ) 
          :
         (
          <Timer  />
        )}
      </SafeAreaView>
    </FocusContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.bg,
  },
  text: {
    color: colors.text,
    alignSelf: 'center',
  },
});
