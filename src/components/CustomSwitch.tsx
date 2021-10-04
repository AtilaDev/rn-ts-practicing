import React, { useState } from 'react';
import { View, Switch, Platform } from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export default function CustomSwitch({ isOn, onChange }: Props) {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: '#d9d9db', true: '#5856d6' }}
      thumbColor={Platform.OS === 'android' ? '#5856d6' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
