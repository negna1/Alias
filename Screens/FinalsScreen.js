import { View } from 'react-native';
import PrimaryButton from '../Components/StarteUI/PrimaryButton';
import React from 'react'; 
import FinalList from '../Components/Result/FinalList';
import { useRoute } from '@react-navigation/native';

const getWinner = (dict) => {
    var maxValue = -100
    var winner = '-'
    for (const [key, value] of Object.entries(dict)) {
      if (maxValue < value) {
        maxValue = value
        winner = key
      }
    }
    return winner
  }

const FinalScreen = ({ navigation }) =>{
    const route = useRoute()
    const teamsWithScore = route.params.teamsWithScore
    const dict = route.params.dict

    const move2Restart = () => {
      navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
    }

    return (
        <View >
          <FinalList text = {'Final Result: the winner is ' + getWinner(dict)} teams = {teamsWithScore}/>
        <PrimaryButton text = 'Restart' onPress = {move2Restart}/>
        </View>
      );
  }

  export default FinalScreen;