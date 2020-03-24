import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { MainScreen } from './src/screens/MainScreen'
import { Navbar } from './src/components/Navbar'
import { TodoScreen } from './src/screens/TodoScreen'


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
})

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    // setTodos((prevTodos)=> [
    //     ...prevTodos,
    //     {
    //       id: Date.now().toString(),
    //       title: title
    //     }
    //   ])
  }
  const removeTodo = id => {
    // setTodos((prev)=>prev.filter(todo=>todo.id!=id))
  }

  let content = (
    <MainScreen 
    addTodo={addTodo}
    removeTodo={removeTodo}
    todos={todos}
  />
  )
  if (todoId) {
    content =  (
      <TodoScreen 
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todos}
      />
    )
  }

  return (
    <View>
      <Navbar title = {'Todo App!'} />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  )
}


