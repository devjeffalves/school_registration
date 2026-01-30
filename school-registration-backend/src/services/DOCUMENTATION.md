# Organização de Documentos no Firebase Storage

## Estrutura de Pastas

Os documentos agora são organizados na seguinte estrutura:

```
matriculas/
├── AAAA-MM/
│   ├── nome-do-aluno/
│   │   ├── PROTOCOLO/
│   │   │   ├── certidao-nascimento_timestamp.pdf
│   │   │   ├── cpf-responsavel_timestamp.jpg
│   │   │   ├── comprovante-residencia_timestamp.pdf
│   │   │   ├── carteira-vacinacao_timestamp.jpg
│   │   │   └── documento-autorizado-0_timestamp.png
```

## Detalhes da Implementação

### 1. Função Principal: `uploadFileToFirebase`

**Parâmetros:**
- `file`: Arquivo do multer
- `studentName`: Nome completo do aluno
- `protocol`: Protocolo de matrícula (ex: "MAT-20240130-LQN3")
- `documentType`: Tipo do documento

**Retorno:** URL assinada do arquivo com validade de 10 anos

### 2. Mapeamento Automático de Tipos

A função identifica automaticamente o tipo de documento pelo nome:
- `certidao-nascimento`: certidão de nascimento
- `cpf-responsavel`: CPF do responsável
- `comprovante-residencia`: comprovante de residência
- `carteira-vacinacao`: carteira de vacinação
- `historico-escolar`: histórico escolar

### 3. Metadados Armazenados

Cada arquivo possui metadados:
- Nome do aluno
- Protocolo da matrícula
- Tipo de documento
- Data de upload

### 4. Nova API Endpoint

**GET** `/enrollments/documents/:studentName/:protocol`

Retorna todos os documentos de um aluno específico organizados por tipo.

## Exemplo de Uso

```javascript
// Upload de documento
const url = await uploadFileToFirebase(
  file, 
  "João Silva Santos", 
  "MAT-20240130-LQN3", 
  "certidao-nascimento"
);

// Listar documentos do aluno
const documents = await listStudentDocuments(
  "João Silva Santos", 
  "MAT-20240130-LQN3"
);
```

## Vantagens

1. **Organização clara:** Documentos separados por aluno e protocolo
2. **Busca fácil:** É possível encontrar documentos de um aluno específico
3. **Rastreamento:** Metadados permitem auditoria
4. **Escalabilidade:** Estrutura suporta milhares de alunos
5. **Segurança:** URLs assinadas com expiração controlada

## Compatibilidade

A função antiga `uploadFile()` continua disponível para compatibilidade com código existente.