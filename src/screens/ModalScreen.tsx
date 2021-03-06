import React, { useContext, useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export default function ModalScreen() {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal animationType="fade" visible={isVisible} transparent={true}>
        {/* Background negro */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.1)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* Contenido del modal */}
          <View
            style={{
              width: 200,
              height: 150,
              backgroundColor: colors.card,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              shadowOffset: {
                width: 5,
                height: 5,
              },
              shadowOpacity: 0.25,
              elevation: 10,
            }}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}>
              Modal
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '300',
                marginBottom: 10,
                color: colors.text,
              }}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
