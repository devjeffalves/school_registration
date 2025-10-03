// import { initializeApp, cert } from "firebase-admin/app";
// import { getStorage } from "firebase-admin/storage";
// import fs from "fs";

// // Lê manualmente o JSON
// const serviceAccount = JSON.parse(
//   fs.readFileSync(new URL("./firebase-service-account.json", import.meta.url))
// );

// // Inicializa Firebase Admin
// const app = initializeApp({
//   credential: cert(serviceAccount),
//   storageBucket: "matricula-escolar-c5b0a.appspot.com" // substitua pelo nome exato do seu bucket
// });

// // Exporta o bucket para usar nas rotas
// export const bucket = getStorage(app).bucket();

// src/firebase.js
import { initializeApp, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

// caminho relativo ao arquivo firebase.js. Ajuste se o JSON estiver em outro lugar.
// Ex.: "./firebase-service-account.json" (coloque o arquivo dentro de src/)
const SERVICE_ACCOUNT_PATH = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || "./firebase-service-account.json";
const BUCKET_NAME = process.env.FIREBASE_BUCKET || "matricula-escolar-c5b0a.firebasestorage.app";

const raw = fs.readFileSync(new URL(SERVICE_ACCOUNT_PATH, import.meta.url), "utf8");
const serviceAccount = JSON.parse(raw);

const app = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: BUCKET_NAME
});

export const bucket = getStorage(app).bucket();
