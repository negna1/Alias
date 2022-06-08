
import {  View, FlatList, Text} from 'react-native';
import React from 'react'; 
import { useState } from 'react';
import GoalItem from '../StarteUI/GoalItem';
import { StyleSheet } from 'react-native';

const ResultList = (props) => {

  const renderItem = ({ item }) => {

    return ( <GoalItem text = {item.text}/> );
  };
  console.log(props.teams)
  return (
    
    <View >
      <FlatList
        data={props.teams}
        renderItem={renderItem }
        keyExtractor={(item) => item.id}
      />
    </View>
  );  
}
export default ResultList;  

