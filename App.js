import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity, View, 
  TouchableWithoutFeedback ,
  Pressable,
} from 'react-native';
import { theme } from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity><Text style={styles.btnText}>Work</Text></TouchableOpacity>
        <Pressable onPress={() => console.log("touch")}>
          <Text style={styles.btnText}>Rest</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 30,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 100,
  },
  btnText: {
    color: 'white',
    fontSize: 40,
    fontWeight: "600"
  }
});
