import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { AddTodo } from './src/AddTodo'
import { Navbar } from './src/Navbar'
import { Todo } from './src/Todo'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
})

export default function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos((prevTodos)=> [
        ...prevTodos,
        {
          id: Date.now().toString(),
          title: title
        }
      ])
  }
  const removeTodo = id => {
    setTodos((prev)=>prev.filter(todo=>todo.id!=id))
  }

  return (
    <View>
      <Navbar title = {'Todo App!'} />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList 
          data={todos}
          renderItem={({item})=> (<Todo todo={item} onRemove={removeTodo} />)}
          keyExtractor={item=>item.id}
        />
      </View>
    </View>
  )
}


