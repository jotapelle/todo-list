import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Input(props) {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TextInput style={styles.task} value={task} onChangeText={text => setTask(text)}></TextInput>
                <MaterialIcons style={styles.add} name="done" onPress={() => handleAddTask(task)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#549a94',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5,
        minHeight: 40,
        flex: 1,
        color: 'black'
    },
    task: {
        width: '90%',
        fontSize: 14,
    },
    add: {
        marginLeft: 10,
        fontSize: 20,
    },
});