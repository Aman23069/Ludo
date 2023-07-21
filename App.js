//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Inputs from './Input.js';
export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <Inputs/>
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
