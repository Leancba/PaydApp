import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-paper';
import { styles } from './styles'

const CheckCircleIcon = () => {
  return (
    <View style={styles.container}>
      <Icon
        source="check"
        color="#FFF"
        size={16}
      />
    </View>
  );
};

export default CheckCircleIcon;


