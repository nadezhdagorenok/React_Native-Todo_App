import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { THEME } from '../theme'
import {AppCard} from '../components/ui/AppCard'

export const TodoScreen = ({goBack, todo, onRemove}) => {
    const [modal, setModal] = useState(false)
    return (
        <View>
            <Text>{todo.title}</Text>
            <AppCard style={styles.card}>
              <Text style={styles.title}>{todo.title}</Text>
              <Button title="Edit" />
            </AppCard>
            <View style={styles.buttons}>
              <View style={styles.button}>
                <Button title="Back" color={THEME.GREY_COLOR} onPress={goBack} />
              </View>
              <View style={styles.button}>
                <Button title="Remove" color={THEME.DANGER_COLOR} onPress={()=>console.log('remove')}  onPress={()=>onRemove(todo.id)} />
              </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '40%'
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    title: {
        fontSize: 20
    }
})
