import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomText, Logo } from '../../Components';
import { useTheme } from '../temadark'; // Importando o hook do tema global

export const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Estado para controle de visibilidade da senha
  const { darkMode, toggleTheme } = useTheme();

  const entrar = () => {
    console.log('ENTROU');
    // Aqui você pode adicionar a lógica para autenticação ou navegação
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

      <Logo />
      <CustomText style={{ color: darkMode ? 'white' : 'black' }}>Nexth Health</CustomText>

      <Input
        placeholder="E-mail"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: darkMode ? '#bbb' : '#888' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        value={email} // Adicionando value para o controle do estado
        inputStyle={{ color: darkMode ? 'white' : 'black' }}
      />
      <Input
        placeholder="Sua senha"
        placeholderTextColor={darkMode ? '#bbb' : '#888'}
        leftIcon={{ type: 'font-awesome', name: 'lock', color: darkMode ? '#bbb' : '#888' }}
        rightIcon={
          <Ionicons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color={darkMode ? '#bbb' : '#888'}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)} // Alterna a visibilidade
          />
        }
        onChangeText={value => setPassword(value)}
        secureTextEntry={!isPasswordVisible} // Controla a visibilidade
        value={password} // Adicionando value para o controle do estado
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
          title="Cadastre-se"
          type="clear"
          titleStyle={{ color: darkMode ? 'white' : '#007BFF' }}
          onPress={() => navigation.navigate('Signup')} 
        />
        <Button
          title="Esqueceu a senha?"
          type="clear"
          titleStyle={{ color: darkMode ? 'white' :  '#007BFF' }}
          onPress={() => navigation.navigate('Recuperaçãosenha')} 
        />
      </View>
    </View>
  );
};

// Defina o estilo do seu componente
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
