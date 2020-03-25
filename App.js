import React, { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
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
  const [todos, setTodos] = useState([
    {id: '1', title: 'Study React Native'},
    {id: '2', title: 'Create App'}
  ]);

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
    const todo = todos.find(item=> id===item.id)
    Alert.alert(
      'Remove Todo',
      `Are you sure that you would remove "${todo.title}?"`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { 
          text: 'Remove', 
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos((prev)=> prev.filter(todo => todo.id !== id))
        }},
      ],
      {cancelable: false},
    );
    // setTodos((prev)=>prev.filter(todo=>todo.id!=id))
  }
  const updateTodo = (id, title) => {
    setTodos(old=> old.map(todo => {
      if (todo.id !== id){
        todo.title = title
      }
      return todo
    })
    )
  }

  let content = (
    <MainScreen 
    addTodo={addTodo}
    removeTodo={removeTodo}
    todos={todos}
    openTodo={setTodoId}
  />
  )
  if (todoId) {
    const selectedTodo = todos.find(todo=>todo.id === todoId)
    content =  (
      <TodoScreen 
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onRemove={removeTodo}
        onSave={updateTodo}
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


