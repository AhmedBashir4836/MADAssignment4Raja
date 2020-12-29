import React, { useEffect, useState }  from 'react';
import { StyleSheet,ScrollView, Text, View } from 'react-native';

const useStats = (url, keyObj) => {
    const [getStats, setStats] = useState();
  
    useEffect(() => {
      async function fetchData() {
        console.log('Fecting Data...');
  
        const data = await fetch(url, keyObj).then((resp) => resp.json());
  
        setStats(data);
      }
      fetchData();
    }, []);
    return getStats;
  };



  const Countries = (props) => {
    const cdata = useStats(props.url1, props.keyObj1);
    const cnames = useStats(props.url2, props.keyObj2);
  
    if (!cnames) return <View>Loading....</View>;
  
    return (
        <ScrollView>
          {Object.entries(cnames.body.countries).map(([code,country]) => (
            <Text
              onPress={() =>
                props.navigation.navigate('CountriesDetailsScreen', {
                  country
                })
              }>
              {country}
            </Text>
          ))}
        </ScrollView>
    );
  };

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    buttons: {
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
  export default Countries;