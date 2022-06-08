import { View , Text, StyleSheet, TouchableOpacity, FlatList, keyExtractor} from "react-native"
import PrimaryButton from "./PrimaryButton";
import HorizontalButtons from "./HorizontalRoundButtons";
import { useState } from "react";

const  Points = (props) =>{

    const [points, setpoints] = useState(20)

    const onPressPlus = () => {
      props.getPoints(points + 1)
        setpoints(points + 1)
        
    }

    const onPressMinus = () => {

      props.getPoints(points - 1)
        setpoints(points - 1)
    }

   return (
    <View style = {styles.MainContainer}>
      <Text style = {styles.MainText}>{props.text}</Text>
      <HorizontalButtons onPressMinus = {onPressMinus} onPressPlus = {onPressPlus} middleText = {points}/>
      
      </View>
   );
}

export default  Points;

const styles = StyleSheet.create({
    MainContainer: {
        width: "60%",
        marginHorizontal: "20%",
        height: "50%",
        borderRadius: 10,
        backgroundColor: "cyan",
        borderColor: "gray",
        alignItems: 'center',
        marginTop: 40,
        bottom: 5
      },

      MainText: {
        marginBottom: 40
    }
      });
  