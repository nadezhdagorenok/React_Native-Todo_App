import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({addTodo, removeTodo, todos, openTodo}) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            <FlatList 
              data={todos}
              renderItem={({item})=> (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />)}
              keyExtractor={item=>item.id}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    block: {}
})
