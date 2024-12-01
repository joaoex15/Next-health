import express from 'express';
import admin from '../firebaseConfig.js'; // Importa a instância do Firebase Admin SDK

const router = express.Router();

// Rota de login de usuários
router.post('/users', async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ error: 'Token de autenticação não fornecido' });
    }

    // Verifica o ID token enviado pelo cliente
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    if (!decodedToken) {
      return res.status(401).json({ error: 'Token inválido ou expirado' });
    }

    // O usuário está autenticado
    res.status(200).json({
      message: 'Login realizado com sucesso',
      uid: decodedToken.uid, // O UID do usuário autenticado
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao verificar token' });
  }
});

export default router;
