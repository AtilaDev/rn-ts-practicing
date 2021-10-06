import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export default function FlatListMenuItem({ menuItem }: Props) {
  const { name, icon, component } = menuItem;
  const navigation = useNavigation();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(component)}>
      <View style={styles.container}>
        <Icon name={icon} color={colors.primary} size={23} />
        <Text style={{ ...styles.itemText, color: colors.text }}>{name}</Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" color={colors.primary} size={23} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
