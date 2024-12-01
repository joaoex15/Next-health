import axios from 'axios';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importando funções do Firebase Authentication
import { Alert } from 'react-native'; // Para mostrar alertas no dispositivo
const API_URL = 'https://93e0-2804-14c-4384-96ca-00-1002.ngrok-free.app'; // Atualize o URL conforme necessário

// Função para registrar o usuário
export const registerUser = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/cadastro/users`, {
      email,
      password,
      name,
    });

    // Verifica se a resposta foi bem-sucedida (status 201 ou 200)
    if (response.status === 201 || response.status === 200) {
      console.log('Cadastro realizado com sucesso!');
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    }

    return response.data; // Retorna a resposta da API
  } catch (error) {
    console.error('Erro no cadastro:', error.response?.data || error.message);
    Alert.alert('Erro', error.response?.data?.error || error.message); // Alerta caso ocorra erro
    throw error.response?.data || error.message; // Lança o erro para ser tratado em outro lugar
  }
};

// Função para fazer login do usuário e retornar o ID Token

export const loginUser = async (email, password) => {
 
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();  // Obtém o token de autenticação
    console.log('ID Token:', idToken);
    return idToken;  // Retorna o ID token para o backend ou próximo passo
  } catch (error) {
    console.error('Erro de login:', error.code, error.message);
    Alert.alert('Erro de Login', error.message); // Exibe o erro para o usuário
    throw error.message;  // Lança o erro para ser tratado
  }
};


// Função para recuperar a senha do usuário
export const resetPassword = async (email) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validação do formato do e-mail
    if (!emailRegex.test(email)) {
      throw new Error('Formato de e-mail inválido');
    }

    const response = await axios.post(`${API_URL}/recuperarsenha/users`, { email });

    if (response.status === 200) {
      Alert.alert('Sucesso', 'Instruções para recuperar a senha foram enviadas para o e-mail.');
    }

    return response.data; // Retorna a resposta da API, se for bem-sucedida
  } catch (error) {
    // Tratamento de erro mais robusto
    if (error.response) {
      console.error('Erro na recuperação de senha:', error.response.data);
      Alert.alert('Erro', error.response.data.error || 'Erro ao enviar solicitação. Tente novamente mais tarde.');
      throw new Error(error.response.data.error || 'Erro ao enviar solicitação.');
    } else {
      console.error('Erro inesperado:', error.message);
      Alert.alert('Erro Inesperado', 'Erro inesperado. Tente novamente mais tarde.');
      throw new Error('Erro inesperado. Tente novamente mais tarde.');
    }
  }
};
