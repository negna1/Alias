
import {  View, FlatList, Text} from 'react-native';
import React from 'react'; 
import { useState } from 'react';
import GoalItem from '../StarteUI/GoalItem';
import { StyleSheet } from 'react-native';

const FinalList = (props) => {

  const renderItem = ({ item }) => {

    return ( <GoalItem text = {item.text}/> );
  };
  return (
    
    <View >
      <View style = {styles.MainContainer}>
      <Text style = {styles.MainText}> {props.text}</Text>
      </View>
     
      <FlatList
        data={props.teams}
        renderItem={renderItem }
        keyExtractor={(item) => item.id}
      />
    </View>
  );  
}
export default FinalList;  

const styles = StyleSheet.create({
  MainContainer: {
      width: "100%",
      height: 40,
      borderRadius: 10,
      borderColor: "gray",
      alignItems: 'center',
      marginTop: 40,
      bottom: 5
    },

    MainText: {
      fontWeight: "bold",
      fontSize: 20,
      textShadowColor: "orange",
      color: "green"
  }
    });
