import { bucket } from "../firebase.js";

/**
 * Gera o caminho padrão para armazenamento de documentos
 * @param {string} studentName - Nome do aluno
 * @param {string} protocol - Protocolo da matrícula
 * @param {string} documentType - Tipo do documento
 * @param {string} timestamp - Timestamp (opcional)
 * @param {string} fileExtension - Extensão do arquivo
 * @returns {string} Caminho completo no Firebase Storage
 */
export function generateFirebasePath(studentName, protocol, documentType, timestamp = null, fileExtension = 'pdf') {
  // Valida e limpa o nome do aluno
  let cleanStudentName = studentName || 'aluno-nao-informado';
  cleanStudentName = cleanStudentName
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50); // Limita tamanho para evitar problemas
  
  // Valida o protocolo
  let cleanProtocol = protocol || 'sem-protocolo';
  cleanProtocol = cleanProtocol
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 30);
  
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2); // YY
  const month = String(date.getMonth() + 1).padStart(2, '0'); // MM
  const fileTimestamp = timestamp || Date.now();
  
  const fullPath = `matriculas/${year}/${month}/${cleanStudentName}/${cleanProtocol}/docs/${documentType}_${fileTimestamp}.${fileExtension}`;
  
  console.log("📁 CAMINHO GERADO:", fullPath, {
    studentName: cleanStudentName,
    protocol: cleanProtocol,
    documentType,
    year,
    month
  });
  
  return fullPath;
}

/**
 * Faz upload de arquivo organizado por nome do aluno e protocolo
 * @param {Object} file - Arquivo do multer
 * @param {string} studentName - Nome do aluno 
 * @param {string} protocol - Protocolo da matrícula
 * @param {string} documentType - Tipo do documento (ex: 'certidao-nascimento', 'cpf-responsavel')
 * @returns {Promise<string>} URL pública do arquivo
 */
export async function uploadFileToFirebase(file, studentName, protocol, documentType) {
  // Usa função auxiliar para gerar caminho padrão
  const timestamp = Date.now();
  const fileExtension = file.originalname.split('.').pop();
  
  const fileName = generateFirebasePath(studentName, protocol, documentType, timestamp, fileExtension);
  
  console.log("📁 CAMINHO DO ARQUIVO:", fileName);
  
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

  console.log("🔗 URL GERADA:", signedUrl);
  console.log("✅ UPLOAD CONCLUÍDO:", {
    fileName,
    studentName,
    protocol,
    documentType,
    hasUrl: !!signedUrl
  });

  return signedUrl;
}

/**
 * Função legada - redireciona para uploadFileToFirebase com valores padrão
 * @param {Object} file - Arquivo do multer
 * @param {string} studentName - Nome do aluno (opcional, default: 'sem-nome')
 * @param {string} protocol - Protocolo (opcional, default: 'sem-protocolo')
 * @param {string} documentType - Tipo do documento (opcional, default: 'documento')
 * @returns {Promise<string>} URL do arquivo
 */
export async function uploadFile(file, studentName = 'sem-nome', protocol = 'sem-protocolo', documentType = 'documento') {
  return await uploadFileToFirebase(file, studentName, protocol, documentType);
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
  const year = date.getFullYear().toString().slice(-2); // YY
  const month = String(date.getMonth() + 1).padStart(2, '0'); // MM
  const prefix = `matriculas/${year}/${month}/${normalizedName}/${protocol}/docs/`;

  const [files] = await bucket.getFiles({ prefix });
  
  return files.map(file => {
    const documentType = file.metadata?.metadata?.documentType || 'desconhecido';
    const fileName = file.name.split('/').pop(); // Pega apenas o nome do arquivo
    
    // Identifica a categoria pelo nome
    let category = 'documento-aluno';
    let personName = null;
    let personIndex = null;
    
    if (documentType.includes('documento-autorizado')) {
      category = 'pessoa-autorizada';
      const match = documentType.match(/documento-autorizado-(\d+)/);
      if (match) {
        personIndex = parseInt(match[1]) - 1;
      }
    }
    
    return {
      name: fileName,
      documentType: documentType,
      category: category,
      uploadDate: file.metadata?.metadata?.uploadDate || file.timeCreated,
      size: file.metadata?.size || 0,
      url: file.publicUrl(),
      firebasePath: file.name,
      personIndex: personIndex,
      personName: personName
    };
  });
}
