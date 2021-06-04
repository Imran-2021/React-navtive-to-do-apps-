import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from "./Components/Activites";
import {Platform} from 'react-native';
export default function App() {
  const [activites, seTactivites] = useState();
  const [Items, setItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setItems([...Items, activites])
    seTactivites(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...Items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {
            Items.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={activites} onChangeText={text => seTactivites(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 83,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 34,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 55,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: 'orange',
    color:"#000",
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 260,
  },
  addWrapper: {
    width: 62,
    height: 62,
    backgroundColor: 'red',
    borderRadius: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 2,
  },
  addText: {},
});