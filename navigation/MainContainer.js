import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Keyboard, ActivityIndicator } from 'react-native';
import Item from '../components/Item';
import Input from '../components/Input';
import dataFunctions from '../utilities/dataFunctions';

export default function MainContainer() {

    const [tasks, setTasks] = useState([]);
    const [isLoad, setIsLoad] = useState(true);

    const addTask = (task) => {
        if (task == null || tasks.length > 6) return;
        let data = [...tasks, task];
        setTasks(data);
        dataFunctions.storeData(data);
        Keyboard.dismiss();
    }

    const clearTask = (clearIndex) => {
        let data = tasks.filter((value, index) => index != clearIndex)
        setTasks(data);
        dataFunctions.storeData(data);
    }

    useEffect(() => {
        if (isLoad) {
            dataFunctions.getData().then(data => {
                setTasks(data);
                setIsLoad(false);
            })
        }
    })

    return (
        isLoad ? (
            <View style={styles.container}>
                <Text style={styles.loader}>Loading <ActivityIndicator size="small" color="black" /></Text>
            </View>
        ) : (
            <View style={styles.container}>
                <View style={styles.heading}>
                    <View style={styles.headingBox}>
                        <Text style={styles.headingTitle}>TODO LIST</Text>
                    </View>
                </View>
                <View style={styles.divider}></View>
                {tasks.map((value, index) => {
                    return (
                        <Item key={index + 1} task={value} clearTask={() => clearTask(index)} />
                    );
                })}
                <Input addTask={addTask} />
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80BAB5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingBox: {
        padding: 10,
        width: 400,
        backgroundColor: "#549a94",
        borderRadius: 6
    },
    headingTitle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'monospace'
    },
    heading: {
        position: 'absolute',
        top: 50,
        left: -100,
        marginBottom: 200
    },
    loader: {
        fontSize: 20,
        fontFamily: 'monospace',
        color: 'black',
        fontWeight: 'bold'
    },
    divider: {
        paddingTop: 160
    }
});