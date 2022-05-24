
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class dataFunctions {
    static storeData = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@storage_todo_list', jsonValue)
        } catch (e) {
            console.log(e.message)
        }
    }

    static getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_todo_list')
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            console.log(e.message)
        }
    }
}