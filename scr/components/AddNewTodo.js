import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const AddNewTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const onButtonPress = () => {
        addTodo(todo);
        setTodo('');
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                value={todo}
                onChangeText={(text) => setTodo(text)}
            ></TextInput>
            <TouchableOpacity onPress={onButtonPress} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    Add Todo
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 15,
        padding: 5,
        margin: 5
    },
    buttonContainer: {
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        color: 'white'
    }
});

export default AddNewTodo;