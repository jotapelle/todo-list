import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Item(props) {
    return (
        <View style={styles.container}>
            <View style={styles.box} key={props.item}>
                <Text style={styles.task}>{props.task}</Text>
                <MaterialIcons style={styles.clear} name="clear" onPress={() => props.clearTask()} />
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
    clear: {
        marginLeft: 10,
        fontSize: 20,
    },
});