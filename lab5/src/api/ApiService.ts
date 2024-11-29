import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const fetchUserData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data: User[] = await response.json();
    await AsyncStorage.setItem('cachedUsers', JSON.stringify(data));
    return data;
  } catch (error) {
    const cachedData = await AsyncStorage.getItem('cachedUsers');
    if (cachedData) return JSON.parse(cachedData);
    throw error;
  }
};