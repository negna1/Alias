import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react'; 

const HorizontalButtons = (props) => {
  
  return (  
    <View style={styles.horizontalView}>
        <TouchableOpacity
            onPress={ props.onPressMinus} 
            style={styles.smallButton}>
            <Text>-</Text>
        </TouchableOpacity>

        <View style={styles.bigButton}>
            <Text>
                {props.middleText}
            </Text>
        </View>

        <TouchableOpacity
            onPress={ props.onPressPlus} 
            style={styles.smallButton}>
            <Text>+</Text>
        </TouchableOpacity>
    </View>
 
);  
}
export default HorizontalButtons;  

const styles = StyleSheet.create({
    smallButton: {
        borderRadius: 20,
       width: 40,
       height: 40,
       backgroundColor: 'orange',
       alignItems: "center",
       justifyContent: "center"
      },
      bigButton: {
        borderRadius: 40,
       width: 80,
       height: 80,
       backgroundColor: 'orange',
       alignItems: "center",
       justifyContent: "center"
      },
      horizontalView: {
        height: "20%",
        minWidth: "48%",
        top: 20,
        borderRadius: 10,
        flexDirection:'row',
         alignItems:'center',
          justifyContent:'center' 
      }
});