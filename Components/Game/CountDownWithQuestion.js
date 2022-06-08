import CountDown from 'react-native-countdown-component'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react'; 
import * as data from './Lexicon.json';
import { useState } from 'react';
import HorizontalButtons from '../StarteUI/HorizontalRoundButtons';
import WordItem from './WordItem';
import TeamWithScore  from './TeamWithScore';

const word = data.data;
console.log(word); // output 'testing'

const CountDownWithQuestion = (props) => {
  const [points, setpoints] = useState(0)
  const [currentWord, setCurrentWord] = useState(word[0])
  const onPressPlus = () => {
    props.getScore(points + 1)
      setpoints(points + 1)
      var randomItem = word[Math.floor(Math.random()*word.length)]
      setCurrentWord(randomItem)
  }

  const onPressMinus = () => {
    props.getScore(points - 1)
      setpoints(points - 1)
      var randomItem = word[Math.floor(Math.random()*word.length)]
      setCurrentWord(randomItem)
  }
  //until={props.durationTime}
  return (
    
    <View>
      <TeamWithScore text = {props.teamName} score = {props.score}/>
      <CountDown
            until={props.durationTime}
            size={30}
            onFinish={props.sessionFinished}
            digitStyle={{backgroundColor: '#FFF'}}
            digitTxtStyle={{color: '#1CC625'}}
            timeToShow={['S']}
            timeLabels={{s: 'წამი'}}
          />
        <WordItem text = {currentWord}/>
        <HorizontalButtons onPressMinus = {onPressMinus} onPressPlus = {onPressPlus} middleText = {points}/>
    </View>
  );  
}
export default CountDownWithQuestion;  

