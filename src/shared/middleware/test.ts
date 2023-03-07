import {Alert} from 'react-native';

export const TestAlert = () => {
  const theAlert = () => {
    Alert.alert('Simple Button was pressed!');
  };

  return theAlert;
};
