import { View , Text, StyleSheet, TouchableOpacity} from "react-native"

function WordItem(props) {
   return (
    <View style = {styles.ViewGoal}>
       <Text style = {styles.Goal} >  {props.text} </Text>
       </View>
   );
}

export default  WordItem;

const styles = StyleSheet.create({
    ViewGoal: {
        maxWidth: "50%",
        marginHorizontal: "25%",
        height: 70,
        borderRadius: 10,
        backgroundColor: "gray",
        borderColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: 5,
        bottom: 5
      },
      Goal: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }
});
  