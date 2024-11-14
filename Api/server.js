import express from 'express';
import admin from 'firebase-admin';
import serviceAccount from './config/serviceAccountKey.json' assert { type: 'json' }; // Corrigido para a sintaxe ES Module

// Inicializa o Firebase Admin com a chave de serviço
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Acessa o Firestore
const db = admin.firestore();  // Aqui é onde você inicializa a instância do Firestore

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  console.log(req.body);

  // Supondo que você queira adicionar os dados do usuário no Firebase
  try {
    const userRef = db.collection('users').doc();  // Cria um novo documento com ID automático
    await userRef.set(req.body);  // Armazena o usuário no Firestore

    res.status(201).send('Ok, deu certo');
  } catch (error) {
    console.error('Erro ao salvar no Firebase:', error.message);  // Exibe a mensagem de erro
    res.status(500).send('Erro interno ao salvar usuário');
  }
});

app.get('/users', async (req, res) => {
  try {
    const snapshot = await db.collection('users').get();  // Recupera todos os usuários
    const usersList = snapshot.docs.map(doc => doc.data());

    res.status(200).json(usersList);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error.message);  // Exibe a mensagem de erro
    res.status(500).send('Erro ao buscar usuários');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
