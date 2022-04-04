import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  TextInput,
  CheckBox
} from "react-native";
import { ListItem } from "react-native-elements";

// Import Axios
import axios from "axios"

import { Ionicons } from '@expo/vector-icons';

const ToDo = () => {
  //init 

  //Init State
  const [toDo, setToDo] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [newToDo, setNewToDo] = useState('')

  // Create LifeCycle
  //Function Exception
  useEffect(() => {
    getToDo()
  }, [])
  
  // Create Function to fetch
  const getToDo = () => {
    setIsLoading(true)
    axios
    .get("https://api.kontenbase.com/query/api/v1/bbbac56d-a3d1-4d40-876f-a16ac9e83733/todo?$sort[created_At]=-1")
    .then((res) => {
      setToDo(res)
      setIsLoading(false)
    })
    .catch(() => {
      alert("Error FETCH data")
      setIsLoading(false)
    })
  }
  
  const addToDo = () => {
    setIsLoading(true)
    axios
    .post("https://api.kontenbase.com/query/api/v1/bbbac56d-a3d1-4d40-876f-a16ac9e83733/todo", { ToDo : newToDo})
    .then(() => {
      getToDo()
      setNewToDo('')
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);
      alert("Error POST data")
      setIsLoading(false)
    })
  }

  const editToDo = (id, isDone) => {
    setIsLoading(true)
    axios
    .patch("https://api.kontenbase.com/query/api/v1/bbbac56d-a3d1-4d40-876f-a16ac9e83733/todo/" +  id, {isDone})
    .then(() => {
      getToDo()
      setIsLoading(false)
    })
    .catch((err) => {
      alert("Error PATCH data")
      setIsLoading(false)
    })
  }

  const delteToDo = (id) => {
    setIsLoading(true)
    axios
    .delete("https://api.kontenbase.com/query/api/v1/bbbac56d-a3d1-4d40-876f-a16ac9e83733/todo/" + id)
    .then(() => {
      getToDo()
      setIsLoading(false)
    })
    .catch(() => {
      alert("Error DELETE data")
      setIsLoading(false)
    })
  }

  const _renderItem = ({ item }) => {
    return (
      <ListItem
        key={item._id.toString()}
        bottomDivider
      >
        <ListItem.Content>
          <ListItem.Title h6 numberOfLines={1}>
          <TouchableOpacity 
          style={{
          backgroundColor: "#be185d",
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          display: "inline",
          }}
          onPress={()=> delteToDo(item._id.toString())}
          >
            <Ionicons name="trash" size={16} color="black" />
          </TouchableOpacity>

          <CheckBox
            value={item.isDone}
            onValueChange={()=> editToDo(item._id.toString(), !item.isDone)}
            style={{marginLeft:20}}
          />
          <Text style={{marginLeft:20}}>
            {item.ToDo}
          </Text>

          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View style={style.container}>
      <TextInput
        style={{
          height: 50,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 10,
          padding : 10
        }}
        placeholder="to do"
        value={newToDo}
        onChangeText={newToDo => setNewToDo(newToDo)}
      />
      
      <TouchableOpacity
        style={{
          backgroundColor: "#be185d",
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: 10,
          marginBottom: 30,
        }}
        onPress={addToDo}
      >
        <Text style={{ color: "white" }}>Add To Do</Text>
      </TouchableOpacity>

      <Text h2 style={{ fontWeight: "bold", fontSize: "40" }}>
        My To Do List
      </Text>

      <FlatList
        data={toDo.data}
        renderItem={_renderItem}
        keyExtractor={(item) => item._id.toString()}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getToDo} />
        }
      />
    </View>
  );
};

export default ToDo;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
