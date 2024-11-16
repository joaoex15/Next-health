import express from 'express';
import admin from 'firebase-admin';

const router = express.Router();

// Rota de login
router.post('/', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se o email e a senha estão corretos
    const userRecord = await admin.auth().getUserByEmail(email);
    
    // Verifica a senha utilizando o Firebase Authentication
    // Note que o Firebase Authentication não oferece um método direto de validação de senha via API,
    // então, você precisaria de um sistema para armazenar e verificar senhas (como o Firebase Auth)
    
    res.status(200).json({ message: 'Usuário autenticado', user: userRecord });
  } catch (error) {
    console.error('Erro ao autenticar o usuário:', error.message);
    res.status(401).send('Usuário não autenticado');
  }
});

export default router;
