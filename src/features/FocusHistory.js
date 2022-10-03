import React,{useContext} from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { FocusContext } from '../contexts/FocusContexts';
import{colors} from '../utils/colors'
import{fontSizes,spacing} from '../utils/sizes'

export const FocusHistory = () =>{
 const { history } = useContext(FocusContext);
 const renderItem = ({item}) => <Text style={styles.item}> > {item}</Text>

  if (!history || !history.length) return <Text style={styles.title}>We havven't focused on anything today!! :(</Text>
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:spacing.md,
    flex:1
  },
  title:{
     color:colors.text,
     fontSize:fontSizes.md,
     fontWeight:'bold',
     paddingTop:spacing.sm
  },
  item:{
    fontSize:fontSizes.md,
    color:colors.text,
    paddingTop:spacing.sm
  }
})