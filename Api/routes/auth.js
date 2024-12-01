import express from 'express';
import { auth } from '../firebaseConfig.js'; // Importa a instância auth do Firebase Admin SDK

const router = express.Router();

// Rota GET para verificar a instância auth
router.get('/auth', (req, res) => {
  try {
    // Exibe os métodos disponíveis na instância auth
    const authMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(auth));

    res.status(200).json({
      authMethods: authMethods // Lista os métodos disponíveis
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao acessar a instância auth.', error: error.message });
  }
});

export default router;
