import { View, Text, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  if (!isFocused) return null;

  return <StatusBar animated={true} {...props} />;
};

export default FocusedStatusBar;
