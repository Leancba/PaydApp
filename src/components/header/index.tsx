import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import { navigate } from '@helpers/index';
import { HeaderProps } from '@interfaces/components';
import { useSelector } from '@hooks/useSelector';
import Banner from '../../assets/BitnovoBanner.png';
import styles from './styles';

const Header = ({ title= '', back = true, isCurrency = false, banner = false }: HeaderProps) => {

  const selectedCurrency = useSelector((state) => state.paidInfo.currency);

  return (
    <Appbar.Header mode="small" statusBarHeight={0} style={styles.header}>
      {back && (
        <Appbar.BackAction onPress={navigate.goBack} style={styles.backButton} />
      )}

      <View style={styles.center}>
        {banner ? (
          <Image source={Banner} style={styles.bannerImage} resizeMode="contain" />
        ) : (
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        )}
      </View>

      {isCurrency && (
        <Button
          mode="text"
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
