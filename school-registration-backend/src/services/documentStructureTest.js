// Teste da estrutura de documentos no Firebase

/**
 * Função para testar a organização de documentos
 * Isso ajuda a verificar se os caminhos estão corretos
 */

export function testDocumentPaths(studentName, protocol, documentType, isPersonAuthorized = false, personIndex = null) {
  const date = new Date();
  const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  const timestamp = Date.now();
  
  const normalizedName = studentName
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
  
  const folder = isPersonAuthorized 
    ? `matriculas/${yearMonth}/${normalizedName}/${protocol}/docs/${documentType}_${timestamp}.pdf`
    : `matriculas/${yearMonth}/${normalizedName}/${protocol}/docs/${documentType}_${timestamp}.pdf`;
  
  return {
    expectedPath: folder,
    normalizedStudentName: normalizedName,
    yearMonth: yearMonth,
    protocol: protocol,
    documentType: documentType,
    category: isPersonAuthorized ? 'pessoa-autorizada' : 'documento-aluno',
    personIndex: personIndex
  };
}

/**
 * Estrutura esperada no Firebase Storage
 */

// Estrutura correta:
// matriculas/
// ├── 2024-01/
// │   ├── joao-silva-santos/
// │   │   ├── MAT-20240130-LQN3/
// │   │   │   └── docs/
// │   │   │       ├── certidao-nascimento_1645678901234.pdf
// │   │   │       ├── cpf-responsavel_1645678902345.jpg
// │   │   │       ├── comprovante-residencia_1645678903456.pdf
// │   │   │       ├── documento-autorizado-1_1645678904567.png
// │   │   │       └── documento-autorizado-2_1645678905678.jpg

/**
 * Exemplo de uso:
 */
const example1 = testDocumentPaths('João Silva Santos', 'MAT-20240130-LQN3', 'certidao-nascimento');
const example2 = testDocumentPaths('João Silva Santos', 'MAT-20240130-LQN3', 'documento-autorizado-1', true, 0);

console.log('Documento do aluno:', example1);
console.log('Documento autorizado:', example2);