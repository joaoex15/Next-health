import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para interpretar JSON
app.use(express.json());

// Importar rotas
import cadastroRoutes from './routes/cadastro.js';
import loginRoutes from './routes/login.js';
import recuperarSenhaRoutes from './routes/recupera_senha.js';

// Usar as rotas
app.use('/cadastro', cadastroRoutes);
app.use('/login', loginRoutes);

app.use('/recuperar-senha', recuperarSenhaRoutes);

app.get('/users', (req, res) => {
  res.send('ok vamos tentar');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
