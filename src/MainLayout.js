import React, {useState, useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { THEME } from './theme'
import {TodoContext} from './components/context/todo/todoContext'
import { ScreenContext } from './components/context/screen/screenContext'


export const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreenContext)
   
    //   const removeTodo = id => {
    //     const todo = todos.find(item=> id===item.id)
    //     Alert.alert(
    //       'Remove Todo',
    //       `Are you sure that you would remove "${todo.title}?"`,
    //       [
    //         {
    //           text: 'Cancel',
    //           style: 'cancel',
    //         },
    //         { 
    //           text: 'Remove', 
    //           style: 'destructive',
    //           onPress: () => {
    //             setTodoId(null)
    //             setTodos((prev)=> prev.filter(todo => todo.id !== id))
    //         }},
    //       ],
    //       {cancelable: true},
    //     );
    //   }
    
      let content = (
        <MainScreen 
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todos}
        openTodo={changeScreen}
      />
      )
      if (todoId) {
        const selectedTodo = todos.find(todo=>todo.id === todoId)
        content =  (
          <TodoScreen 
            goBack={() => changeScreen(null)}
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


const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20
    },
  })