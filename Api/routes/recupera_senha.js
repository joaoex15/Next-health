import express from 'express';
import admin from '../firebaseConfig.js'; // Instância do Firebase Admin SDK já inicializada

const router = express.Router();

// Endpoint para recuperação de senha
router.post('/users', async (req, res) => {
  try {
    const { email } = req.body; // E-mail do usuário enviado pelo frontend

    if (!email) {
      return res.status(400).json({ error: 'E-mail é necessário' });
    }

    // Gerar um link de redefinição de senha usando Firebase Admin SDK
    const resetPasswordLink = await admin.auth().generatePasswordResetLink(email);

    // Aqui, você pode enviar esse link por e-mail ao usuário (utilize uma biblioteca como nodemailer)
    // Por simplicidade, retornamos o link no JSON
    return res.status(200).json({
      message: 'Link de recuperação de senha gerado com sucesso',
      resetLink: resetPasswordLink, // Idealmente, você enviaria isso via e-mail ao usuário
    });
  } catch (error) {
    console.error(error);

    // Verifica se o erro está relacionado a e-mail inexistente
    if (error.code === 'auth/user-not-found') {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    return res.status(500).json({ error: 'Erro ao gerar link de recuperação de senha' });
  }
});

export default router;
