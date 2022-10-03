import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { FocusContext } from '../contexts/FocusContexts';
import { Countdown } from '../components/Counter';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';
import { Timing } from './Timing';

export const Timer = () => {
  useKeepAwake();
  
  const { currentSubject,setCurrentSubject,setHistory,history } = useContext(FocusContext);
  const [buttonpaused, setButtonpaused] = useState(true);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) =>{
     Vibration.vibrate([1000, 1000, 1000, 1000], false);
     setButtonpaused(true)
     setProgress(1)
     setHistory([...history,currentSubject])
     reset(); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={buttonpaused}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{ paddingTop: spacing.xl }}>
          <Text style={styles.tittle}>Focusing on:</Text>
          <Text style={styles.task}>{currentSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          color={colors.text}
          style={{ height: spacing.sm }}
          progress={progress}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={buttonpaused ? 'start' : 'pause'}
          onPress={() => {
            setButtonpaused(!buttonpaused);
          }}
        />
      </View>
      <View style={styles.clearsubject}>
      <RoundedButton size={50} title="-" onPress={()=>{setCurrentSubject(null)}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection:'row',
    alignItems: 'center',
    padding:spacing.md
  },
  tittle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  task: {
    color: colors.text,
    textAlign: 'center',
  },
  clearsubject:{
    justifyContent:'center',
    flexDirection:'row'
  }
});
