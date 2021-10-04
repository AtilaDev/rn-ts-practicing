import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';

export default function ChangeThemeScreen() {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
    </View>
  );
}
