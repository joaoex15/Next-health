import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomText } from '../../Components';
import { useTheme } from '../temadark'; // Importando o hook do tema global

export const Recuperaçãosenha = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { darkMode, toggleTheme } = useTheme(); // Usando o tema global
  const [showCodeInput, setShowCodeInput] = useState(false);  // Controla a exibição do campo de código
  const [showEmailInput, setShowEmailInput] = useState(true);  // Controla a exibição do campo de e-mail
  const [showSendCodeButton, setShowSendCodeButton] = useState(true);  // Controla a exibição do botão "Enviar código"
  const [code, setCode] = useState('');  // Controla o estado do código inserido
  const [showEditEmailButton, setShowEditEmailButton] = useState(false); // Controla a exibição do botão "Editar E-mail"
  const navigation = useNavigation();

  const entrar = () => {
    console.log('ENTROU');
  };

  const day_night = () => {
    setDarkMode(!darkMode);
  };

  const editarEmail = () => {
    setShowCodeInput(false);  // Oculta o campo de código
    setShowEmailInput(true);   // Exibe o campo de e-mail
    setShowSendCodeButton(true); // Exibe o botão "Enviar código"
    setShowEditEmailButton(false); // Oculta o botão "Editar E-mail"
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
      <View style={styles.titulo}>
        <CustomText style={{ color: darkMode ? 'white' : 'black' }}>Recuperação de senha</CustomText>
      </View>

      {/* Condicionalmente exibe o campo de e-mail */}
      {showEmailInput && (
        <Input
          placeholder="Seu E-mail"
          placeholderTextColor={darkMode ? '#bbb' : '#888'}
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: darkMode ? '#bbb' : '#888' }}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          inputStyle={{ color: darkMode ? 'white' : 'black' }}
        />
      )}

      {/* Condicionalmente exibe o botão "Enviar código" */}
      {showSendCodeButton && (
        <Button
          title="Enviar código"
          onPress={() => {
            setShowCodeInput(true);  // Exibe o campo de código
            setShowEmailInput(false); // Oculta o campo de e-mail
            setShowSendCodeButton(false); // Oculta o botão "Enviar código"
            setShowEditEmailButton(true); // Exibe o botão "Editar E-mail"
          }} 
          buttonStyle={{ backgroundColor: darkMode ? '#444' : '#007BFF', marginTop: 20 }}
        />
      )}

      {/* Condicionalmente exibe o campo para inserir o código */}
      {showCodeInput && (
        <View style={styles.codeContainer}>
          <Input
            placeholder="Digite o código"
            placeholderTextColor={darkMode ? '#bbb' : '#888'}
            leftIcon={{ type: 'font-awesome', name: 'key', color: darkMode ? '#bbb' : '#888' }}
            onChangeText={value => setCode(value)}
            inputStyle={{ color: darkMode ? 'white' : 'black' }}
          />
          <Button
            title="Confirmar"
            onPress={entrar}
            buttonStyle={{ backgroundColor: darkMode ? '#444' : '#007BFF', marginTop: 10 }}
          />
        </View>
      )}

      {/* Botão para editar o e-mail */}
      {showEditEmailButton && (
        <Button
          title="Editar E-mail"
          onPress={editarEmail}
          type="clear"
          titleStyle={{ color: darkMode ? 'white' : '#007BFF' }}
          buttonStyle={{ marginTop: 20 }}
        />
      )}
      {showEditEmailButton && (
        <Button
          title="Reenviar Email"
          onPress={editarEmail}
          type="clear"
          titleStyle={{ color: darkMode ? 'white' : '#007BFF' }}
          buttonStyle={{ marginTop: 0 }}
        />
      )}

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
    padding: 20,
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
  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25%',
  },
  codeContainer: {
    width: '100%',
    marginTop: 20,
  },
});
