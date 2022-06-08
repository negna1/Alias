
import { useState } from 'react';
import { View } from 'react-native';
import PrimaryButton from '../Components/StarteUI/PrimaryButton';
import Points from '../Components/StarteUI/Points';
import React from 'react'; 

const HomeScreen = ({ navigation }) =>{
  const move2Duration = () => {
    navigation.navigate('Duration', {finalPoints: finalPoints})
    
  }

    const [finalPoints, setfinalPoints] = useState(20)
    return (
        <View >
        <Points text = {"Winner Points"}   points = {finalPoints} getPoints = {(points) => {setfinalPoints(points)}}/>
        <PrimaryButton text = 'Next' onPress = {move2Duration}/>
        </View>
      );
  }

  export default HomeScreen;