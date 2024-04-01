import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { text: 'ggg', id: '1' },
        { text: 'ttt', id: '2' },
        { text: 'hhh', id: '3' },
    ]);

    const addTodo = (text) => {
        setTodos([...todos, { text: text, id: `${Math.random()}` }]);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <Text>{item.text}</Text>
                }}
            />
            <AddNewTodo addTodo={addTodo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },

});

export default TodoList;
