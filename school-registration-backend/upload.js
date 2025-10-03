// backend/upload.js
import { bucket } from "./firebase.js";

export async function uploadFile(file) {
  const fileName = `uploads/${Date.now()}_${file.originalname}`;
  const fileRef = bucket.file(fileName);

  await fileRef.save(file.buffer, {
    metadata: { contentType: file.mimetype },
    public: true // se quiser acesso público ao arquivo
  });

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
  return publicUrl;
}
