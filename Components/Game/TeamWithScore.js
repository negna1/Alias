import { View , Text, StyleSheet, TouchableOpacity} from "react-native"

function TeamWithScore(props) {
   return (
    <View style = {styles.ViewGoal}>
        <View style = {styles.horizontalView}> 
            <Text style = {styles.BoldInput} >  {"Team: "} </Text>
            <Text style = {styles.Goal} >  {props.text} </Text>
        </View>

        <View style = {styles.horizontalView}> 
            <Text style = {styles.BoldInput} >  {"Score: "} </Text>
            <Text style = {styles.Goal} >  {props.score} </Text>
        </View>
        
       </View>
   );
}

export default  TeamWithScore;

const styles = StyleSheet.create({
    horizontalView: {
        flexDirection:'row',
         alignItems:'center',
          justifyContent:'center' 
      },
    ViewGoal: {
        minWidth: "50%",
        marginHorizontal: "25%",
        height: 100,
        borderRadius: 10,
        backgroundColor: "cyan",
        borderColor: "gray",
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
        fontSize: 20,
        fontWeight: "bold"
      }, 
      BoldInput: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18
      }
});
  