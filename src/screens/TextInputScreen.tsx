import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles as themeStyles } from '../theme/appTheme';

export default function TextInputScreen() {
  const { isSusbcribed, form, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSusbcribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <ScrollView>
        <View style={themeStyles.globalMargin}>
          <HeaderTitle title="TextInputs" />

          <TextInput
            style={styles.inputStyle}
            placeholder="Nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={value => onChange(value, 'email')}
          />
          <CustomSwitch
            isOn={isSusbcribed}
            onChange={value => onChange(value, 'isSusbcribed')}
          />

          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <TextInput
            style={styles.inputStyle}
            placeholder="Phone"
            keyboardType="number-pad"
            onChangeText={value => onChange(value, 'phone')}
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
