import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function ChangeThemeScreen() {
  const { setDarkTheme } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />

      <TouchableOpacity
        onPress={setDarkTheme}
        activeOpacity={0.8}
        style={{
          width: 150,
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
          backgroundColor: '#5856d6',
        }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 22 }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
}
