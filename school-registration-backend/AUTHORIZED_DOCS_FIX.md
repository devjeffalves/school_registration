# 📁 Correção: Documentos de Pessoas Autorizadas

## 🐛 **Problema Identificado**

Os documentos das pessoas autorizadas a buscar o aluno estavam sendo salvos:
- ✅ **Localização correta**: Pasta `matriculas/ano-mes/nome-aluno/protocolo/docs/`
- ❌ **Inclusão incorreta**: Não apareciam na lista `documents` do registro

## 🔧 **Solução Implementada**

### 1. **Atualização no Processamento**
```javascript
// Antes (linha 65-68)
const url = await uploadBufferToFirebase(file, studentName, protocol, `documento-autorizado-${i}`);
if (authorizedPersonsArray[i]) {
  authorizedPersonsArray[i].document = { type: file.mimetype, url };
}

// Depois
const documentType = `documento-autorizado-${i + 1}`;
const url = await uploadBufferToFirebase(file, studentName, protocol, documentType);
if (authorizedPersonsArray[i]) {
  authorizedPersonsArray[i].document = { 
    type: file.mimetype, 
    url,
    name: file.originalname,
    documentType: documentType
  };
  
  // Adiciona à lista geral de documentos também
  documents.push({
    name: file.originalname,
    url,
    type: file.mimetype,
    documentType: documentType,
    category: 'pessoa-autorizada',
    personIndex: i,
    personName: authorizedPersonsArray[i]?.name || `Pessoa Autorizada ${i + 1}`
  });
}
```

### 2. **Melhorias na Estrutura**
- **Categorização**: `category: 'pessoa-autorizada'`
- **Indexação**: `personIndex` para identificação
- **Nome da Pessoa**: `personName` para referência
- **Tipo Documento**: `documentType` padronizado

## 📂 **Estrutura Final no Firebase**

```
matriculas/
├── 2024-01/
│   ├── joao-silva-santos/
│   │   ├── MAT-20240130-LQN3/
│   │   │   └── docs/
│   │   │       ├── certidao-nascimento_1645678901234.pdf
│   │   │       ├── cpf-responsavel_1645678902345.jpg
│   │   │       ├── comprovante-residencia_1645678903456.pdf
│   │   │       ├── documento-autorizado-1_1645678904567.png  ← 🆕
│   │   │       └── documento-autorizado-2_1645678905678.jpg  ← 🆕
```

## 📊 **JSON Salvo no MongoDB**

```javascript
{
  student: {
    fullName: "João Silva Santos",
    authorizedPersons: [
      {
        name: "Maria Souza",
        phone: "(51) 98765-4321",
        relation: "avó",
        document: {
          type: "image/png",
          url: "https://storage.googleapis.com/...",
          name: "cnh-maria.png",
          documentType: "documento-autorizado-1"
        }
      }
    ]
  },
  documents: [
    { name: "certidao.pdf", documentType: "certidao-nascimento", category: "documento-aluno" },
    { name: "cpf.pdf", documentType: "cpf-responsavel", category: "documento-aluno" },
    { 
      name: "cnh-maria.png", 
      documentType: "documento-autorizado-1", 
      category: "pessoa-autorizada",
      personIndex: 0,
      personName: "Maria Souza"
    }
  ]
}
```

## 🔄 **Função de Listagem Atualizada**

```javascript
export async function listStudentDocuments(studentName, protocol) {
  // Busca na pasta docs/ correta
  const prefix = `matriculas/${yearMonth}/${normalizedName}/${protocol}/docs/`;
  
  return files.map(file => {
    const documentType = file.metadata?.metadata?.documentType || 'desconhecido';
    
    let category = 'documento-aluno';
    if (documentType.includes('documento-autorizado')) {
      category = 'pessoa-autorizada';
    }
    
    return {
      name: file.name.split('/').pop(),
      documentType: documentType,
      category: category,
      url: file.publicUrl(),
      // ... outros campos
    };
  });
}
```

## ✅ **Benefícios da Correção**

✅ **Centralização**: Todos os documentos na mesma lista `documents`  
✅ **Organização**: Salvos na pasta correta do aluno  
✅ **Identificação**: Categoria e índice claros  
✅ **Rastreabilidade**: Nome da pessoa associada  
✅ **Consultas**: Fácil busca por categoria  
✅ **Consistência**: Estrutura unificada no MongoDB  

## 🧪 **Teste Visual**

Após a correção, os documentos aparecem em ambos os locais:

1. ** authorizedPersons[n].document ** - Informação específica da pessoa
2. ** documents[m] ** - Lista geral unificada

---

**Resultado**: Documentos de pessoas autorizadas agora são salvos corretamente e estão facilmente acessíveis na lista geral de documentos! 📁✨