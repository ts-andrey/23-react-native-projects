import { StyleSheet, View } from 'react-native';

import Input from './Inpurt';

export default function ExpenseForm() {
  function amountChangeHandler() {}

  return (
    <View>
      <Input
        label={'Descriptions'}
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label={'Amount'}
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLenght: 10,
          onChangeText: () => {},
        }}
      />
      <Input label={'Date'} 
        textInputConfig={{
          multiline: true,
          // autoCorrect: false,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
