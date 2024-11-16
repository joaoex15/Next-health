import express from 'express';
import admin from 'firebase-admin';

const router = express.Router();

// Acessa o Firestore
const db = admin.firestore();

router.post('/', async (req, res) => {
  console.log(req.body);

  try {
    const userRef = db.collection('users').doc();  // Cria um novo documento com ID automático
    await userRef.set(req.body);  // Armazena o usuário no Firestore

    res.status(201).send('Usuário cadastrado com sucesso');
  } catch (error) {
    console.error('Erro ao salvar no Firebase:', error.message);
    res.status(500).send('Erro interno ao salvar usuário');
  }
});

export default router;
