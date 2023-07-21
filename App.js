//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,StatusBar,Image,AppRegistry } from 'react-native';
import Inputs from './Input.js';
//import Routes from './Routes.js'
import WebViewExample from './web_view_example.js';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
     // <Inputs/>
      <WebViewExample/>
     // <Image source = {require("./Images/success.png")}/>
     <Text> "Aman"</Text>
      <StatusBar style="auto" />
    </View>
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
