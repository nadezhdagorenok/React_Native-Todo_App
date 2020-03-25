import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'


const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#eee',
        marginBottom: 10
    },
})

export const Todo = ({todo, onRemove, onOpen}) => {
    return (
        <TouchableOpacity 
          activeOpacity={0.5} 
          onPress={()=>onOpen(todo.id)}
          onLongPress={onRemove.bind(null, todo.id)}
          >
          <View style={styles.todo}>
            <Text>{todo.title}</Text>
          </View>
        </TouchableOpacity>
    )
}