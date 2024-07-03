import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <Text> Fusion! </Text>
      <StatusBar style='auto'/>
    <Link href="/profile" style={{color: 'black'}}>Go to Profile </Link>
  </View> 
  );

}

