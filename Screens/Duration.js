import { useState , useEffect} from 'react';
import { View } from 'react-native';
import PrimaryButton from '../Components/StarteUI/PrimaryButton';
import Points from '../Components/StarteUI/Points';
import React from 'react'; // get the React object from the react module
import { useRoute } from '@react-navigation/native';


const DurationScreen = ({ navigation }) =>{
    const route = useRoute()
    const finalPoints = route.params.finalPoints
    const [duration, setDuration] = useState(20)

  const move2Teams = () => {
    navigation.navigate('Teams', {finalPoints: finalPoints, duration: duration})
    
  }
    return (
        <View >
        <Points text = {"Duration"} points = {duration} getPoints = {(points) => {setDuration(points)}}/>
        <PrimaryButton text = 'Next' onPress = {move2Teams}/>
        </View>
      );
  }

  export default DurationScreen;