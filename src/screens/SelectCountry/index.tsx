import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { TextInput, List, Checkbox } from 'react-native-paper';

import { CountryOptions } from '@helpers/index';
import { useSelector } from '../../hooks/useState';
import { updatePrefix } from '../../redux/actions/paidActions';
import { navigate } from '@helpers/index';


const SelectCountry = () => {
  const [text, setText] = React.useState('');
  const [selectedCurrency, setSelectedCurrency] = React.useState<string | null>(null);

  const selectedPrefix = useSelector((state) => state.paidInfo.prefix);

  const handleSelectCountry = ( prefix: string) => {
    updatePrefix(prefix);
    navigate.goBack()
  };


  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        left={<TextInput.Icon size={40} icon="magnify" />}
        maxLength={140}
        style={{ marginTop: 10, backgroundColor: 'transparent', width: '100%' }}
        mode="outlined"
        activeOutlineColor="#035AC5"
        outlineColor="#E5E9F2"
        placeholder="Buscar país"
      />

      {CountryOptions.map((item) => {
        const matchesPrefix = item.title === selectedPrefix;
        const isSelected = selectedCurrency === item.id || matchesPrefix;

        return (
          <List.Item
            key={item.id}
            title={item.title}
            description={item.description}
            descriptionNumberOfLines={1}
            onPress={() => handleSelectCountry(item.title)}
            left={(props) => <item.icon {...props} />}
            right={(props) =>
              isSelected ? (
                <Checkbox status="checked" />
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

export default SelectCountry;
