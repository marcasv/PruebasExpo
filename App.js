import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Esta es una app de pruebas sobre React-Native con Expo.</Text>
      <Image style={styles.images} source={{uri:"https://picsum.photos/300/300"}}/>
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
  images: {
    height: 300,
    width: 300,
    borderRadius: 150,
    margin: 100,
  }
});
