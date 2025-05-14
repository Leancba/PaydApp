import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { View, Text } from 'react-native';
import { navigate } from '../../helpers';
import { HeaderProps } from '@interfaces/components';
import { useSelector } from '../../hooks/useState';
import styles from './styles';

const Header = ({ title, back = true, isCurrency = false }: HeaderProps) => {

  const selectedCurrency = useSelector((state) => state.paidInfo.currency);

  return (
    <Appbar.Header mode="small" statusBarHeight={0} style={styles.header}>
      {back && (
        <Appbar.BackAction onPress={navigate.goBack} style={styles.backButton} />
      )}
      <View style={styles.center} >
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
      {isCurrency && (
        <Button
          mode='text'
          icon="chevron-down"
          labelStyle={styles.currencyLabel}
          contentStyle={styles.contentButton}
          style={styles.currencyButton}
          onPress={() => navigate.to('CurrencySelector')}
        >
          {selectedCurrency}
        </Button>
      )}
    </Appbar.Header>
  );
};

export default Header;
