import { bucket } from "../firebase.js";

/**
 * Faz upload de arquivo organizado por nome do aluno e protocolo
 * @param {Object} file - Arquivo do multer
 * @param {string} studentName - Nome do aluno 
 * @param {string} protocol - Protocolo da matrícula
 * @param {string} documentType - Tipo do documento (ex: 'certidao-nascimento', 'cpf-responsavel')
 * @returns {Promise<string>} URL pública do arquivo
 */
export async function uploadFileToFirebase(file, studentName, protocol, documentType) {
  // Normaliza o nome do aluno para usar como pasta
  const normalizedName = studentName
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-'); // Substitui espaços por hífens

  // Cria estrutura de pastas: matriculas/ano-mes/nome-do-aluno/protocolo/tipo-documento_timestamp.ext
  const date = new Date();
  const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  const timestamp = Date.now();
  const fileExtension = file.originalname.split('.').pop();
  
  const fileName = `matriculas/${yearMonth}/${normalizedName}/${protocol}/${documentType}_${timestamp}.${fileExtension}`;
  const fileRef = bucket.file(fileName);

  await fileRef.save(file.buffer, {
    metadata: { 
      contentType: file.mimetype,
      metadata: {
        studentName: studentName,
        protocol: protocol,
        documentType: documentType,
        uploadDate: date.toISOString()
      }
    },
    public: false // Arquivos privados por padrão
  });

  // Gera URL temporária com expiração longa (10 anos)
  const expiresInMs = 1000 * 60 * 60 * 24 * 365 * 10;
  const [signedUrl] = await fileRef.getSignedUrl({ 
    action: "read", 
    expires: Date.now() + expiresInMs 
  });

  return signedUrl;
}

/**
 * Função legada para compatibilidade
 * @param {Object} file - Arquivo do multer
 * @returns {Promise<string>} URL pública do arquivo
 */
export async function uploadFile(file) {
  const fileName = `uploads/${Date.now()}_${file.originalname}`;
  const fileRef = bucket.file(fileName);

  await fileRef.save(file.buffer, {
    metadata: { contentType: file.mimetype },
    public: true
  });

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
  return publicUrl;
}

/**
 * Lista todos os documentos de um aluno específico
 * @param {string} studentName - Nome do aluno
 * @param {string} protocol - Protocolo da matrícula
 * @returns {Promise<Array>} Lista de documentos encontrados
 */
export async function listStudentDocuments(studentName, protocol) {
  const normalizedName = studentName
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  const date = new Date();
  const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  const prefix = `matriculas/${yearMonth}/${normalizedName}/${protocol}/`;

  const [files] = await bucket.getFiles({ prefix });
  
  return files.map(file => ({
    name: file.name,
    documentType: file.metadata?.metadata?.documentType || 'desconhecido',
    uploadDate: file.metadata?.metadata?.uploadDate || file.timeCreated,
    size: file.metadata?.size || 0
  }));
}
