import express from 'express';
import admin from 'firebase-admin';
import cadastrarRouter from './cadastrar.js';
import serviceAccount from './config/serviceAccountKey.json' assert { type: 'json' }; // Corrigido para a sintaxe ES Module
import loginRouter from './login.js';

// Inicializa o Firebase Admin com a chave de serviço
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Acessa o Firestore
const db = admin.firestore();

const app = express();
app.use(express.json());

// Usando os routers para cadastro e login
app.use('/cadastrar', cadastrarRouter);
app.use('/login', loginRouter);

// Rota de teste para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('API está funcionando');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
