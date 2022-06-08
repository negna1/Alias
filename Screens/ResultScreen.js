
import { useState , useEffect} from 'react';
import {  View } from 'react-native';
import PrimaryButton from '../Components/StarteUI/PrimaryButton';
import React from 'react'; 
import ResultList from '../Components/Result/ResultList';
import { useRoute } from '@react-navigation/native';

const ResultScreen = ({ navigation }) =>{
    const route = useRoute()
    const finalPoints = route.params.finalPoints
    const duration = route.params.duration
    const teams = route.params.teams
    const teamWithScoreDictionary = route.params.teamWithScoreDictionary
    const score= route.params.currentScore
    const teamsWithScore = route.params.teamsWithScore
    const currentPlayer = route.params.currentPlayer
    const [currentScore, setcurrentScore] = useState(score)
    
    const move2StartGame = () => {
        if (Object.entries(teamWithScoreDictionary).length == 0) {
            console.log("aq")
            teams.forEach(element => {
                teamWithScoreDictionary[element] = 0
             });
            }
        navigation.navigate('Start Game', {finalPoints: finalPoints, 
            duration: duration, 
            teams: teams,
            teamWithScoreDictionary: teamWithScoreDictionary, 
            currentScore: 0, 
            currentPlayer: currentPlayer})
        
    }

    return (
        <View >
          <ResultList teams = {teamsWithScore}/>
        <PrimaryButton text = 'Next' onPress = {move2StartGame}/>
        </View>
      );
  }

  export default ResultScreen;