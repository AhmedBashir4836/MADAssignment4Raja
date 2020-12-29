import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Countries from './Screens/CountryStatistics';
import WorldStatistics from './Screens/WorldStatistics';
import CountriesDetailsScreen from './Screens/CountryDetail';

const Stack = createStackNavigator();



export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => (
            <WorldStatistics
              {...props}
              url1={'https://covid-19-data.p.rapidapi.com/totals?format=json'}
              keyObj1={{
                method: 'GET',
                headers: {
                  'x-rapidapi-key':
                    '19449ad71bmsh6ef1edc74267936p131d7ajsn96f451de877a',
                  'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                },
              }}
              url2={'https://world-population.p.rapidapi.com/worldpopulation'}
              keyObj2={{
                method: 'GET',
                headers: {
                  'x-rapidapi-key':
                    '19449ad71bmsh6ef1edc74267936p131d7ajsn96f451de877a',
                  'x-rapidapi-host': 'world-population.p.rapidapi.com',
                },
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="CountriesScreen"
          options={{ title: 'Countries', headerTitleAlign: 'center' }}>
          {(props) => (
            <Countries
              {...props}
              url1={
                'https://covid-19-data.p.rapidapi.com/country?name=italy&format=json'
              }
              keyObj1={{
                method: 'GET',
                headers: {
                  'x-rapidapi-key':
                    '19449ad71bmsh6ef1edc74267936p131d7ajsn96f451de877a',
                  'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                },
              }}
              url2={'https://world-population.p.rapidapi.com/allcountriesname'}
              keyObj2={{
                method: 'GET',
                headers: {
                  'x-rapidapi-key':
                    '19449ad71bmsh6ef1edc74267936p131d7ajsn96f451de877a',
                  'x-rapidapi-host': 'world-population.p.rapidapi.com',
                },
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="CountriesDetailsScreen"
          options={{ title: 'Countries', headerTitleAlign: 'center' }}>
          {(props) => (
            <CountriesDetailsScreen
              {...props}
              url1={
                'https://covid-19-data.p.rapidapi.com/country?name='
              }
              
              url2={
                'https://world-population.p.rapidapi.com/population?country_name='
              } 
              keyObj1={{
                method: 'GET',
                headers: {
                  'x-rapidapi-key':
                    '19449ad71bmsh6ef1edc74267936p131d7ajsn96f451de877a',
                  'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
                }
              }}
              keyObj2={{
                method: 'GET',
                headers: {
                  'x-rapidapi-key':
                    '19449ad71bmsh6ef1edc74267936p131d7ajsn96f451de877a',
                  'x-rapidapi-host': 'world-population.p.rapidapi.com',
                },
              }}
               
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});