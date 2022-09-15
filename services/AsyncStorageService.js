import AsyncStorage from '@react-native-async-storage/async-storage';
class AsyncStorageService {
  async storeData(value) {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      console.log(e);
    }
  }
  async getData() {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      return null;
    }
  }
}

export default new AsyncStorageService();
