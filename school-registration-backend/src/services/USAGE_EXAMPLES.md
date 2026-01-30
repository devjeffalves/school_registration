// Exemplo de uso da nova API de organização de documentos

// 1. Endpoint para listar documentos de um aluno
// GET /enrollments/documents/:studentName/:protocol

// Exemplo de requisição:
// GET /enrollments/documents/João%20Silva%20Santos/MAT-20240130-LQN3

// Exemplo de resposta:
{
  "studentName": "João Silva Santos",
  "protocol": "MAT-20240130-LQN3",
  "documents": [
    {
      "name": "matriculas/2024-01/joao-silva-santos/MAT-20240130-LQN3/certidao-nascimento_1645678901234.pdf",
      "documentType": "certidao-nascimento",
      "uploadDate": "2024-01-30T20:59:28.123Z",
      "size": 1024576
    },
    {
      "name": "matriculas/2024-01/joao-silva-santos/MAT-20240130-LQN3/cpf-responsavel_1645678902345.jpg",
      "documentType": "cpf-responsavel", 
      "uploadDate": "2024-01-30T20:59:28.234Z",
      "size": 512486
    }
  ]
}

// 2. Estrutura no Firebase Storage após upload
// matriculas/
// ├── 2024-01/
// │   ├── joao-silva-santos/
// │   │   ├── MAT-20240130-LQN3/
// │   │   │   ├── certidao-nascimento_1645678901234.pdf
// │   │   │   ├── cpf-responsavel_1645678902345.jpg
// │   │   │   ├── comprovante-residencia_1645678903456.pdf
// │   │   │   └── carteira-vacinacao_1645678904567.jpg

// 3. Frontend - Função para buscar documentos de um aluno
async function fetchStudentDocuments(studentName, protocol) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/enrollments/documents/${encodeURIComponent(studentName)}/${protocol}`
    );
    const data = await response.json();
    return data.documents;
  } catch (error) {
    console.error('Erro ao buscar documentos:', error);
    return [];
  }
}

// 4. Frontend - Exemplo de componente para exibir documentos
function StudentDocuments({ studentName, protocol }) {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDocuments = async () => {
      setLoading(true);
      const docs = await fetchStudentDocuments(studentName, protocol);
      setDocuments(docs);
      setLoading(false);
    };
    loadDocuments();
  }, [studentName, protocol]);

  if (loading) return <p>Carregando documentos...</p>;

  return (
    <div>
      <h3>Documentos de {studentName}</h3>
      <p>Protocolo: {protocol}</p>
      <ul>
        {documents.map((doc, index) => (
          <li key={index}>
            <strong>{doc.documentType}</strong> - 
            Enviado em: {new Date(doc.uploadDate).toLocaleDateString('pt-BR')} - 
            Tamanho: {(doc.size / 1024).toFixed(2)} KB
          </li>
        ))}
      </ul>
    </div>
  );
}

// 5. Integração com o fluxo de matrícula atual
// Após o upload dos documentos no Step4Documents, 
// o backend automaticamente organiza na estrutura correta 
// usando o nome do aluno e protocolo da matrícula.