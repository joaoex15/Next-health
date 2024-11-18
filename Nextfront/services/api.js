import axios from 'axios';

const API_URL = 'http://localhost:3000/cadastro'; // Exemplo de IP local da sua máquina
 // Altere para o endereço correto

export const registerUser = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error) {
    console.error('Erro no cadastro :', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Erro no login:', error.response?.data || error.message);
    throw error.response?.data || error.message;
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
