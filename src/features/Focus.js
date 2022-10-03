import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper'
import {colors} from '../utils/colors'
import {spacing} from '../utils/sizes'
import {RoundedButton} from '../components/RoundedButton'
import {FocusContext} from '../contexts/FocusContexts'

export const Focus = () =>{
  const {setCurrentSubject} = useContext(FocusContext)
  const [subject,setSubject]= useState()
  return (
   <View style={styles.container}>
    <View style={styles.inputContainer} >
     <TextInput
      style={styles.textinput}
      label='What you planning to do?'
      onChangeText={setSubject}
      />
      <View style={styles.button} >
         <RoundedButton title="+" size={40} onPress={()=>setCurrentSubject(subject)} />
      </View>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
   
  },
  button:{
    justifyContent:'center'
  },
  textinput:{
    flex:1,
    color:colors.text,
    marginRight:spacing.sm
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'top',
    padding:spacing.lg,
  }

});
