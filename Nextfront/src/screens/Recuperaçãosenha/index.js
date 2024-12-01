import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { resetPassword } from '../../../services/api';
import { CustomText } from '../../Components';
import { useTheme } from '../temadark';

// Função para enviar e-mail de recuperação



export const Recuperaçãosenha = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const { darkMode, toggleTheme } = useTheme();
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [loading, setLoading] = useState(false); // Controle de carregamento
  const navigation = useNavigation();

  const handleSendCode = async () => {
    setLoading(true);
    try {
      const response = await resetPassword(email);
      Alert.alert('Sucesso', 'Código enviado para o seu e-mail!');
      setShowCodeInput(true); // Exibe o campo de código
      setShowEmailInput(false); // Oculta o campo de e-mail
    } catch (error) {
      Alert.alert('Erro', error.message || 'Erro ao enviar código. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? 'black' : 'white' }]}>
      <View style={styles.TopButton}>
        <Button
          icon={<Ionicons name={darkMode ? 'sunny' : 'moon-outline'} size={40} color={darkMode ? 'white' : 'black'} />}
          type="clear"
          onPress={toggleTheme}
        />
      </View>
      <View style={styles.titulo}>
        <CustomText style={{ color: darkMode ? 'white' : 'black' }}>Recuperação de senha</CustomText>
      </View>

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

      {showEmailInput && (
        <Button
          title={loading ? 'Enviando...' : 'Enviar código'}
          onPress={handleSendCode}
          buttonStyle={{ backgroundColor: darkMode ? '#444' : '#007BFF', marginTop: 20 }}
          disabled={loading || !email}
        />
      )}

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
            onPress={() => Alert.alert('Código confirmado', 'Função a ser implementada.')}
            buttonStyle={{ backgroundColor: darkMode ? '#444' : '#007BFF', marginTop: 10 }}
          />
        </View>
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
  TbuttonContainer: {
    marginTop: 45,
  },
});
