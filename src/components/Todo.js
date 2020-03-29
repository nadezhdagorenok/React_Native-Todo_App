import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {AppText} from '../components/ui/AppText'

export const Todo = ({todo, onRemove, onOpen}) => {
    return (
        <TouchableOpacity 
          activeOpacity={0.5} 
          onPress={()=>onOpen(todo.id)}
          onLongPress={onRemove.bind(null, todo.id)}
        >
          <View style={styles.todo}>
            <AppText style={styles.title} >{todo.title}</AppText>
          </View>
        </TouchableOpacity>
    )
}


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