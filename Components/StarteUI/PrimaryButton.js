import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react'; 

const PrimaryButton = (props) => {
  
  return (  
  <View style = {styles.MainContainer}>
    <TouchableOpacity
    onPress={props.onPress}
      style={styles.roundButton1}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  </View>
 
);  
}
export default PrimaryButton;  

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    marginTop: 20
    
  },
  roundButton1: {
    borderRadius: 5,
    minWidth: "90%",
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    
  }
});