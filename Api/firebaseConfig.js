import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

// Carregar a chave do serviço Firebase de forma síncrona
const serviceAccount = JSON.parse(fs.readFileSync(path.resolve('./config/serviceAccountKey.json'), 'utf8'));

// Inicializar Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
export const auth = admin.auth();


export default admin; // Exporta o Firebase inicializado
