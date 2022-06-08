
import { useState , useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../Components/StarteUI/PrimaryButton';
import React from 'react'; // get the React object from the react module
import CountDownWithQuestion from '../Components/Game/CountDownWithQuestion';
import { useRoute, StackActions } from '@react-navigation/native';


const StartGameScreen = ({ navigation }) =>{
    const route = useRoute()
    const finalPoints = route.params.finalPoints
    const duration = route.params.duration
    const teams = route.params.teams
    const teamWithScoreDictionary = route.params.teamWithScoreDictionary
    const score= route.params.currentScore
    var currentPlayer= route.params.currentPlayer
    const [currentScore, setcurrentScore] = useState(score)
    var isfinished = false
    var teamsWithScore = []
    
    const move2Result = () => {
        teamWithScoreDictionary[teams[currentPlayer]] += currentScore 
        if (teamWithScoreDictionary[teams[currentPlayer]] > finalPoints) {
          isfinished = true
        }
        var showResult = isfinished && currentPlayer == teams.length - 1
        currentPlayer = (currentPlayer+1)%teams.length
        teamsWithScore = []
        for (const [key, value] of Object.entries(teamWithScoreDictionary)) {
          teamsWithScore.push({text: key + ":" + value, id: Math.random().toString()})
        }
        if (showResult) {
            navigation.reset({
                index: 0,
                routes: [{name: 'Final Screen',params:{teamsWithScore: teamsWithScore,
                    dict: teamWithScoreDictionary}}],
              });
        }else {
              navigation.reset({
             index: 0,
             routes: [{name: 'Result',params:{ finalPoints: finalPoints,
             teamWithScoreDictionary: teamWithScoreDictionary, 
             score: currentScore, 
             teams: teams,
             duration: duration,
             teamsWithScore: teamsWithScore, 
             currentPlayer: currentPlayer}}],
           });
        }
      }

  return (
    <CountDownWithQuestion teamName = {teams[currentPlayer]}
     durationTime = {duration} 
     score = {teamWithScoreDictionary[teams[currentPlayer]]}
     sessionFinished = {move2Result}
     getScore = {(score) => {setcurrentScore(score)}}
    />
  );
  }

  export default StartGameScreen;