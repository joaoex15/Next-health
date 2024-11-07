import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomText } from '../../Components';
import { useTheme } from '../temadark'; // Importando o hook do tema global

export const Signup = () => {
  const navigation = useNavigation();
  const { darkMode, toggleTheme } = useTheme(); // Usando o tema global
  const [fullName, setFullName] = useState(''); // Nome completo
  const [email, setEmail] = useState(''); // E-mail
  const [password, setPassword] = useState(''); // Senha
  const [confirmPassword, setConfirmPassword] = useState(''); // Confirmar senha

  const entrar = () => {
    console.log('ENTROU');
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? 'black' : 'white' }]}>
      <View style={styles.TopButton}>
      
        <Button
          icon={<Ionicons name={darkMode ? "sunny" : "moon-outline"} size={40} color={darkMode ? 'white' : 'black'} />}
          type="clear"
          onPress={toggleTheme} // Usando a função para alternar o tema
        />
      </View>

      <CustomText style={{ color: darkMode ? 'white' : 'black' }}>Cadastre-se</CustomText>

      <Input
        placeholder="Nome completo"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'user', color: darkMode ? '#bbb' : '#888' }}
        onChangeText={value => setFullName(value)}
        inputStyle={{ color: darkMode ? 'white' : 'black' }}
      />

      <Input
        placeholder="Seu E-mail"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: darkMode ? '#bbb' : '#888' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        inputStyle={{ color: darkMode ? 'white' : 'black' }}
      />
      
      <Input
        placeholder="Sua senha"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'lock', color: darkMode ? '#bbb' : '#888' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        inputStyle={{ color: darkMode ? 'white' : 'black' }}
      />

      <Input
        placeholder="Confirmar senha"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'lock', color: darkMode ? '#bbb' : '#888' }}
        onChangeText={value => setConfirmPassword(value)}
        secureTextEntry={true}
        inputStyle={{ color: darkMode ? 'white' : 'black' }}
      />

      <View style={styles.buttonContainer}>
        <Button
          icon={<Icon name="google" size={50} color="white" />}
          buttonStyle={[styles.button, { backgroundColor: darkMode ? '#444' : '#007BFF' }]}
          onPress={entrar}
        />
        <Button
          icon={<Icon name="arrow-right" size={40} color="white" />}
          buttonStyle={[styles.button, { backgroundColor: darkMode ? '#444' : '#007BFF' }]}
          onPress={entrar}
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
