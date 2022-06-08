import { View } from 'react-native';
import PrimaryButton from '../Components/StarteUI/PrimaryButton';
import React from 'react'; // get the React object from the react module
import TeamInputs from '../Components/StarteUI/TeamInput';
import { useRoute } from '@react-navigation/native';

const TeamsScreen = ({ navigation }) =>{
    const route = useRoute()
    const finalPoints = route.params.finalPoints
    const duration = route.params.duration
    var teamWithScoreDictionary = {}
    var teams = []
    const move2StartGame = () => {
        if (Object.entries(teamWithScoreDictionary).length == 0) {
            console.log("aq")
            teams.forEach(element => {
                teamWithScoreDictionary[element] = 0
             });
            }

            navigation.reset({
                index: 0,
                routes: [{name: 'Start Game',params:{ finalPoints: finalPoints,
                teamWithScoreDictionary: teamWithScoreDictionary, 
                score: 0, 
                teams: teams,
                duration: duration,
                currentPlayer: 0}}]})
    }

    const setTeam = (teamsss) => {
        teams = teamsss.map((item) => item.text)
    }

    return (
        <View >
          <TeamInputs onPress = {setTeam} />
        <PrimaryButton text = 'Next' onPress = {move2StartGame}/>
        </View>
      );
  }

  export default TeamsScreen;