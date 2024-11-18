import express from 'express';
import validator from 'validator'; // Importa o validator
import admin from '../firebaseConfig.js'; // Agora importa a instância Firebase inicializada

const db = admin.firestore(); // Usando Firestore do Firebase inicializado

const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Campos obrigatórios não foram preenchidos' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'A senha deve ter pelo menos 6 caracteres' });
    }

    const userCredential = await admin.auth().createUser({
      email,
      password,
    });

    await db.collection('users').doc(userCredential.uid).set({
      name,
      email,
    });

    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error(error);
    if (error.code === 'auth/email-already-in-use') {
      return res.status(400).json({ error: 'Email já cadastrado' });
    } else if (error.code === 'auth/weak-password') {
      return res.status(400).json({ error: 'Senha muito fraca' });
    } else {
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
});

export default router; // Exporta o router como default
