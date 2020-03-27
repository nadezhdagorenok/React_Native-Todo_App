import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert, Keyboard} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { THEME } from '../theme';

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    },
  

})

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = (e) => {
        if(value.trim()){
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
            return;
        }
        Alert.alert('Error! The deal name can not be empty!!!')
    }

    return (
    <View style={styles.block}>
        <TextInput 
          style={styles.input} 
          onChangeText={setValue}
          value={value}
          placeholder="Type deal name..."
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType="number-pad"
          />
          <AntDesign.Button onPress={pressHandler} name="pluscircleo">Add</AntDesign.Button>
        {/* <Button title={'Add'} onPress={pressHandler} /> */}
    </View>
    )
}
