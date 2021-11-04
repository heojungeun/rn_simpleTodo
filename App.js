import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ScrollView,
  TextInput,
} from 'react-native';
import { theme } from './colors';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const rest = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const addToDo = () => {
    if(text === ""){
      return
    }
    // const newToDos = Object.assign(
    //   {}, 
    //   toDos, 
    //   {[Date.now()]: {text, work:working}}
    // );
    const newToDos = {
      ...toDos, 
      [Date.now()]: {text, work:working},
    };
    setToDos(newToDos);
    setText("");
  };
  console.log(toDos);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color: working? "white": theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={rest}>
          <Text style={{...styles.btnText, color: working? theme.grey: "white"}}>Rest</Text>
        </TouchableOpacity>
      </View>
      <TextInput 
        returnKeyType="done"
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        placeholder={working ? "Add a To Do": "what do you want to rest?"} 
        style={styles.input}/>
      <ScrollView>{
        Object.keys(toDos).map(key => 
          <View style={styles.toDoBox} key={key} >
            <Text style={styles.toDoitem}>{toDos[key].text}</Text>
          </View>
        )}
      </ScrollView>
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
    fontSize: 40,
    fontWeight: '600'
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDoBox:{
      backgroundColor: theme.grey,
      marginBottom: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 15,

  },
  toDoitem:{
    color: 'white',
    fontSize: 16,
    fontWeight: "500",
  },
});
