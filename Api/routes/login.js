import express from 'express';
import admin from '../firebaseConfig.js'; // Agora importa a instância Firebase inicializada

import path from 'path';

// Usando import.meta.url para obter o diretório atual
const __dirname = path.dirname(new URL(import.meta.url).pathname); 

const router = express.Router();

// Removido: Inicialização do Firebase, pois você não precisa disso aqui

const db = admin.firestore(); // Firebase já foi inicializado em outro lugar

const app = express();

app.use(express.json());

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
    }

    const userSnapshot = await db.collection('users').where('email', '==', email).get();

    if (userSnapshot.empty) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    const userDoc = userSnapshot.docs[0];
    const userData = userDoc.data();

    if (userData.password !== password) { // Substitua por hash de senha na produção
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const customToken = await admin.auth().createCustomToken(userDoc.id);

    res.status(200).json({ uid: userDoc.id, token: customToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

export default router;


