import { View , Text, StyleSheet, TouchableOpacity, keyExtractor, TextInput, FlatList, Alert} from "react-native"
import { useState } from "react";
import GoalItem from "./GoalItem";
import PrimaryButton from "./PrimaryButton";

const  TeamInputs = (props) =>{
const [enteredText, setEnteredText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const inputTextChanged = (enteredText) => {
      props.onPress([...courseGoals, {text: enteredText, id: Math.random().toString()} ])
      setEnteredText(enteredText)
      
  }

  const onPressPlus = () => {
    if (enteredText.length < 1 || courseGoals.length > 3 ) {
      Alert.alert("Consider", "Team name must be more than 4, only 3 teams can play and choose new name for team", [
        {
          text: "Okay",
          style: "cancel",
        },
      ])
    }else {
      setCourseGoals(currentCourse => [...courseGoals, {text: enteredText, id: Math.random().toString()} ])
      
    }
    setEnteredText('')
}

const renderItem = ({ item }) => {

  return ( <GoalItem text = {item.text}/> );
};

   return (
       <View>
        <View style={styles.horizontalView}>
            <TextInput style = {styles.input} placeholder="enter team name"  onChangeText={inputTextChanged} value={enteredText}/>
            <TouchableOpacity onPress={onPressPlus} style={styles.smallButton}>
                    <Text> + </Text>
            </TouchableOpacity>
        </View>
    <FlatList
        data={courseGoals}
        renderItem={renderItem }
        keyExtractor={(item) => item.id}
      />
       </View>
    
   );
}

export default  TeamInputs;

const styles = StyleSheet.create({
    smallButton: {
        borderRadius: 20,
       width: 40,
       height: 40,
       backgroundColor: 'orange',
       alignItems: "center",
       justifyContent: "center", 
       marginHorizontal: "1%"
      },
      horizontalView: {
        height: 50,
        minWidth: "100%",
        top: 20,
        borderRadius: 10,
        flexDirection:'row',
         alignItems:'center',
          justifyContent:'center' ,
        marginBottom: 40
      },

      input: {
        color: 'black',
        minWidth: "80%",
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
      }
      });
  