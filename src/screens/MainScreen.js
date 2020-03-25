import React from 'react'
import { View, FlatList, StyleSheet, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({addTodo, removeTodo, todos, openTodo}) => {
    let content = (
      <FlatList 
        data={todos}
        renderItem={({item})=> (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />)}
        keyExtractor={item=>item.id}
      />
    )
    if (todos.length === 0) {
        content = (
            <View style={styles.imageWrap} >
                <Image 
                  style={styles.image}
                  source={require('../../assets/no-items.png')} 
                />
            </View>
        )
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
         </View>
    )
}
const styles = StyleSheet.create({
    block: {},
    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    }
})
