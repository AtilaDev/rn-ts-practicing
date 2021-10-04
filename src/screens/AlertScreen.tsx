import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export default function AlertScreen() {
  const showAlert = () => {
    Alert.alert('Alert Title', 'My Alert Message', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  const showPrompt = () => {
    Alert.prompt(
      '¿Estas Seguro?',
      'Esto no se puede revertir',
      (valor: string) => console.log('info:', valor),
      'plain-text',
      'Hola Mundo',
      'number-pad',
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button title="Mostrar Alerta" onPress={showAlert} />
      <View style={{ height: 10 }} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
}
