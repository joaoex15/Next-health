import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); // Carregar as variáveis de ambiente

const router = express.Router();

// Rota de recuperação de senha
router.post('/recuperar-senha', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'O campo de email é obrigatório' });
        }

        // Chamada à API REST do Firebase Authentication
        const apiKey = process.env.FIREBASE_API_KEY; // Configure no .env
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`;

        const response = await axios.post(url, {
            requestType: 'PASSWORD_RESET',
            email: email,
        });

        res.status(200).json({ message: 'Um email de redefinição de senha foi enviado para o seu endereço de email.' });
    } catch (error) {
        console.error('Erro ao enviar email de recuperação de senha:', error);

        if (error.response && error.response.data && error.response.data.error) {
            const errorCode = error.response.data.error.message;
            if (errorCode === 'EMAIL_NOT_FOUND') {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            } else if (errorCode === 'INVALID_EMAIL') {
                return res.status(400).json({ error: 'Email inválido' });
            }
        }

        res.status(500).json({ error: 'Erro ao enviar email de redefinição de senha' });
    }
});

export default router; // Exporta a rota
