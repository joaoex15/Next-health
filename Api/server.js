import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para interpretar JSON
app.use(express.json());

// Importar rotas
import authRoutes from './routes/auth.js'; // Usar as rotas
import cadastroRoutes from './routes/cadastro.js';
import loginRoutes from './routes/login.js';
import recuperarSenhaRoutes from './routes/recupera_senha.js';
app.use('/cadastro', cadastroRoutes);
app.use('/login', loginRoutes);
app.use('/credecias', authRoutes); 
app.use('/recuperarsenha', recuperarSenhaRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
