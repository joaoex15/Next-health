import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomText } from '../../Components';
import { useTheme } from '../temadark';

export const Signup = () => {
  const navigation = useNavigation();
  const { darkMode, toggleTheme } = useTheme();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const loginWithGoogle = () => {
    console.log('Login com Google');
  };

  const navigateNext = () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }
    console.log('Navegando para a próxima tela');
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? 'black' : 'white' }]}>
      <View style={styles.TopButton}>
        <Button
          icon={<Ionicons name={darkMode ? "sunny" : "moon-outline"} size={40} color={darkMode ? 'white' : 'black'} />}
          type="clear"
          onPress={toggleTheme}
        />
      </View>

      <CustomText style={{ color: darkMode ? 'white' : 'black' }}>Cadastre-se</CustomText>

      <Input
        placeholder="Nome completo"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'user', color: darkMode ? '#bbb' : '#888' }}
        onChangeText={value => setFullName(value)}
        value={fullName}
        inputStyle={{ color: darkMode ? 'white' : 'black' }}
      />

      <Input
        placeholder="Seu E-mail"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: darkMode ? '#bbb' : '#888' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        value={email}
        inputStyle={{ color: darkMode ? 'white' : 'black' }}
      />
      
      <Input
        placeholder="Sua senha"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'lock', color: darkMode ? '#bbb' : '#888' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={!showPassword}
        value={password}
        inputStyle={{ color: darkMode ? 'white' : 'black' }}
        rightIcon={
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color={darkMode ? 'white' : 'black'}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <Input
        placeholder="Confirmar senha"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'lock', color: darkMode ? '#bbb' : '#888' }}
        onChangeText={value => setConfirmPassword(value)}
        secureTextEntry={!showPassword}
        value={confirmPassword}
        inputStyle={{ color: darkMode ? 'white' : 'black' }}
        rightIcon={
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color={darkMode ? 'white' : 'black'}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <View style={styles.buttonContainer}>
        <Button
          icon={<Icon name="google" size={50} color="white" />}
          buttonStyle={[styles.button, { backgroundColor: darkMode ? '#444' : '#007BFF' }]}
          onPress={loginWithGoogle}
        />
        <Button
          icon={<Icon name="arrow-right" size={40} color="white" />}
          buttonStyle={[styles.button, { backgroundColor: darkMode ? '#444' : '#007BFF' }]}
          onPress={navigateNext}
        />
      </View>

      <View style={styles.TbuttonContainer}>
        <Button
          title="Voltar ao login"
          type="clear"
          titleStyle={{ color: darkMode ? 'white' : '#007BFF' }}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
    width: '45%',
  },
  TbuttonContainer: {
    marginTop: 45,
  },
  TopButton: {
    position: 'absolute',
    top: '1%',
    right: '1%',
  },
  button: {
    marginTop: 10,
    width: 80,
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
