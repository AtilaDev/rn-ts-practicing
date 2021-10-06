import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function ChangeThemeScreen() {
  const {
    setDarkTheme,
    setLightTheme,
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            backgroundColor: colors.primary,
          }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 22 }}>
            Dark
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            justifyContent: 'center',
            backgroundColor: colors.primary,
          }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 22 }}>
            Light
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
