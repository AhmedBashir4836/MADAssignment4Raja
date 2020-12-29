import React, { useEffect, useState }  from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';

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
  
  const WorldStatistics = (props) => {
    const stats = useStats(props.url1, props.keyObj1);
    const pstats = useStats(props.url2, props.keyObj2);
  
    if (pstats && stats) var tpopulation = pstats.body.world_population;
  
    if (!stats && !pstats) return <View>Loading....</View>;
  
    return (
      
      <View>
        <View>Total Population : {tpopulation}</View>
        <View>
          Confirmed : {stats ? stats[0].confirmed : ""} Percentage :{' '}
          {stats ? ((stats[0].confirmed / tpopulation) * 100).toFixed(5) : ""}
        </View>
        <View>
          Deaths : {stats ? stats[0].deaths:""} Percentage :{' '}
          {stats ? ((stats[0].deaths / tpopulation) * 100).toFixed(5):""}
        </View>
        <View>
          Recovered : {stats ? stats[0].recovered:""} Percentage :{' '}
          {stats ? ((stats[0].recovered / tpopulation) * 100).toFixed(5):""}
        </View>
        <View>
          Critical Cases : {stats ? stats[0].critical: ""} Percentage :{' '}
          {stats ? ((stats[0].critical / tpopulation) * 100).toFixed(5): ""}
        </View>
        <View>Last Updated : {stats ? stats[0].lastUpdate: ""}</View>
        <View style={styles.buttons}>
          <Button
            title="Countries"
            onPress={() => props.navigation.navigate('CountriesScreen')}
          />
        </View>
      </View>
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

  export default WorldStatistics;