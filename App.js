import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{marginTop: 100, borderWidth: 2, backgroundColor: 'ghostwhite'}}>
      <StatusBar style="auto" />

      <View style={{ marginTop: 50, paddingLeft: 50, borderWidth: 2, marginBottom: 50, marginRight: 2150, marginLeft: 90}}>
        <Text style={{ fontWeight: 'bold', fontSize: 50, color: 'darkslategray', marginTop: 20}}>Column</Text>
        <View style={(styles.boxContainer, {flexDirection: 'column'})}>
          <View style={[styles.boxStyle, styles.box1Style]}>
            <Text style={styles.boxText}>Child</Text>
          </View>
          <View style={[styles.boxStyle, styles.box2Style]}>
            <Text style={styles.boxText}>Child</Text>
          </View>
          <View style={[styles.boxStyle, styles.box3Style]}> 
            <Text style={styles.boxText}>Child</Text>      
          </View>
        </View>
      </View>

      <View style={{ marginTop: 20, paddingLeft: 50, borderWidth: 2, marginBottom: 50, marginRight: 1700, marginLeft: 100}}>
        <Text style={{fontWeight: 'bold', fontSize: 50, color: 'darkslategray', marginTop: 20, marginBottom: 20}}>Row</Text>
        <View style={styles.boxContainer}>
          <View style={[styles.boxStyle, styles.box1Style]}>
            <Text style={styles.boxText}>Child</Text>
          </View>
          <View style={[styles.boxStyle, styles.box2Style]}>
            <Text style={styles.boxText}>Child</Text>
          </View>
          <View style={[styles.boxStyle, styles.box3Style]}> 
            <Text style={styles.boxText}>Child</Text>      
          </View>
        </View>
      </View>

    </SafeAreaView>   
  );
}

const styles = StyleSheet.create({

  boxContainer: {
    width: 100,
    height: 100,
    flexDirection: 'row', // the main axis
    justifyContent: 'flex-start', // the main axis alignment
    alignItems: 'center', // the cross axis
    marginBottom: 20,
  },
  boxStyle: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'darkslategray',
    marginBottom: 30,
    marginLeft: 10,
  },
  box1Style: {
    backgroundColor: 'lightgray',
  },
  box2Style: {
    backgroundColor: 'lightgray',
  },
  box3Style: {
    backgroundColor: 'lightgray', 

  },
  
  boxText: {
    color: 'darkslategray',
    fontWeight: 'bold',
    fontSize: 50,
  },
  boxBorder: {

  },
});
