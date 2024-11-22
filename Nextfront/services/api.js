import axios from 'axios';
import { Alert } from 'react-native'; // Adicione esta linha
const API_URL = 'https://e2ad-2804-14c-4384-96ca-00-1002.ngrok-free.app'; // Exemplo de IP local da sua máquina
 // Altere para o endereço correto

 export const registerUser = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/cadastro/users`, {
      email,
      password,
      name,
    });

    // Verifique se a API respondeu corretamente
    if (response.status === 201 || response.status === 200) {
      console.log('Cadastro realizado com sucesso!'); // Mensagem no console
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!'); // Opcional, se Alert estiver disponível no contexto
    }

    return response.data; // Retorna a resposta da API para o chamador
  } catch (error) {
    console.error('Erro no cadastro :', error.response?.data || error.message);
    throw error.response?.data || error.message; // Lança o erro para ser tratado no chamador
  }
};
 export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login/users`, {
      email,
      password,
    });

    // Verificando se a resposta da API foi bem-sucedida
    if (response.status === 200 && response.data) {
      // Caso o login seja bem-sucedido, retorne a resposta ou dados do usuário, sem token
      return response;  // Retorna os dados do usuário, sem enviar um token
    } else {
      throw new Error('Falha no login: credenciais inválidas.');
    }
  } catch (error) {
    console.error('Erro na requisição de login:', error);
    throw new Error('Erro inesperado ao tentar fazer login.');
  }
};



export const resetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/recuperar-senha`, { email });
    return response.data;
  } catch (error) {
    console.error('Erro na recuperação de senha:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};
