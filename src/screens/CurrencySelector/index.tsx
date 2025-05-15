import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { TextInput, List } from 'react-native-paper';
import { currencyOptions } from '@helpers/index';
import { CurrencyItem } from '@interfaces/components';
import { navigate } from '@helpers/index';
import { updateCurrency } from '@actions/paidActions';
import { useSelector } from '@hooks/useSelector';
import CheckCircleIcon from '@components/checkCircleIcon';

const CurrencySelector = () => {

  const [text, setText] = useState('');
  const selectedCurrency = useSelector((state) => state.paidInfo.currency);

  const filteredOptions = currencyOptions.filter((item: CurrencyItem) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );

  const selectCurrency = (currencyId: string) => {
    updateCurrency(currencyId);
    navigate.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        left={<TextInput.Icon color={'#647184'} size={40} icon="magnify" />}
        maxLength={140}
        style={{ marginTop: 10, backgroundColor: 'transparent', width: '100%' }}
        mode="outlined"
        activeOutlineColor="#035AC5"
        outlineColor="#E5E9F2"
        placeholder="Buscar"
        contentStyle={{ fontFamily: 'Mulish-Regular' }}
      />
      {filteredOptions.map((item) => {
        const isSelected = selectedCurrency === item.id;
        return (
          <List.Item
            key={item.id}
            title={item.description}
            description={item.id}
            descriptionNumberOfLines={1}
            onPress={() => selectCurrency(item.id)}
            left={(props) => <item.icon {...props} />}
            right={(props) =>
              isSelected ? (
                <CheckCircleIcon/>
              ) : (
                <List.Icon {...props} icon="chevron-right" />
              )
            }
          />
        );
      })}
    </View>
  );
};

export default CurrencySelector;
