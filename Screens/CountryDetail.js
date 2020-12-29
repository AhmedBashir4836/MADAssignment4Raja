import React, { useEffect, useState }  from 'react';
import { StyleSheet,ScrollView,Button, Text, View } from 'react-native';


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



const CountryDetailsScreen = (props) => {

    if(props.route.params.country!="United States"){
    
    var querryString1 = props.url1 + props.route.params.country + '&format=json';}
    else{
      querryString1 = props.url1 + 'USA' + '&format=json';
    }
    var querryString2 = props.url2 + props.route.params.country;
     
     console.log(querryString2);
    
    const cdata = useStats(querryString1, props.keyObj1);
    const pdata = useStats(querryString2, props.keyObj2);
     
    if (pdata) var cpopulation = pdata.body.population
    
    if (pdata) console.log(pdata); 
     
      if (!pdata) return <View>Loading....</View>;   
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
          
          <ScrollView style={styles.sView}>
            <View style={styles.list}>
              <View>
                <Text style={{ margin: 10, fontWeight: 'bold' }}>Country : {props.route.params.country}</Text>
                 <Text style={{ margin: 10 }}>
                   Population: {(pdata) ? cpopulation : ""} 
                </Text> 
                <Text style={{ margin: 10 }}>
            Confirmed : {cdata ? cdata[0].confirmed : ""} Percentage :{' '}
            {cdata ? ((cdata[0].confirmed / cpopulation) * 100).toFixed(5) : ""}
          </Text>
          <Text style={{ margin: 10 }}>
            Deaths : {cdata ? cdata[0].deaths:""} Percentage :{' '}
            {cdata ? ((cdata[0].deaths / cpopulation) * 100).toFixed(5):""}
          </Text>
          <Text style={{ margin: 10 }}>
            Recovered : {cdata ? cdata[0].recovered:""} Percentage :{' '}
            {cdata ? ((cdata[0].recovered / cpopulation) * 100).toFixed(5):""}
          </Text>
          <Text style={{ margin: 10 }}>
            Critical Cases : {cdata ? cdata[0].critical: ""} Percentage :{' '}
            {cdata ? ((cdata[0].critical / cpopulation) * 100).toFixed(5) : ""}
          </Text>
              </View> 
            </View>
          </ScrollView>
          
          <View style={styles.buttons}>
            <Button title="Back" onPress={() => props.navigation.goBack()} />
            <Button title="Home" onPress={() => props.navigation.popToTop()} />
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

export default CountryDetailsScreen;