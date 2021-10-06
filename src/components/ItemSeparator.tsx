import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function ItemSeparator() {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 8,
        borderColor: colors.border,
      }}
    />
  );
}
