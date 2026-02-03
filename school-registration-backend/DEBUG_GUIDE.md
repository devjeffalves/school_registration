# 🔧 Diagnóstico de Pastas Duplicadas

## 🚨 **Problemas Identificados**

Baseado no seu relato, existem os seguintes problemas:

### 1. **Pastas sem nome do aluno**
- Causa: `studentName` chegando vazio ou como valor padrão
- Problema: Pasta "aluno-nao-informado" ou "aluno-sem-nome"

### 2. **Pastas sem protocolo**
- Causa: `protocol` não sendo gerado corretamente
- Problema: Pasta "sem-protocolo"

### 3. **Pastas duplicadas**
- Causa: Múltiplos uploads com timestamps diferentes
- Problema: Mesma matrícula criando várias estruturas

## 🔧 **Correções Aplicadas**

### 1. **Validação de Dados (enrollmentRoutes.js)**
```javascript
// Gera protocolo automático se não existir
if (!protocol) {
  const date = new Date();
  const datePart = date.toISOString().slice(0, 10).replace(/-/g, "");
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  protocol = `MAT-${datePart}-${randomPart}`;
}

// Garante nome válido do aluno
if (!studentName || studentName.trim().length < 2) {
  studentName = "aluno-sem-nome";
}
```

### 2. **Função Unificada (upload.js)**
```javascript
export function generateFirebasePath(studentName, protocol, documentType, timestamp, fileExtension) {
  // Limpeza rigorosa dos nomes
  let cleanStudentName = studentName || 'aluno-nao-informado';
  let cleanProtocol = protocol || 'sem-protocolo';
  
  // Substituição e validação
  cleanStudentName = cleanStudentName
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
    
  cleanProtocol = cleanProtocol
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 30);
  
  // Estrutura única: matriculas/YY/MM/nome-aluno/protocolo/docs/
  return `matriculas/${year}/${month}/${cleanStudentName}/${cleanProtocol}/docs/...`;
}
```

### 3. **Timestamp Único por Upload**
```javascript
// Usa mesmo timestamp para todos os documentos da mesma matrícula
const uploadTimestamp = Date.now();

// Para documentos do aluno
generateFirebasePath(studentName, protocol, documentType, uploadTimestamp + i, extension);

// Para documentos autorizados
generateFirebasePath(studentName, protocol, documentType, uploadTimestamp + i, extension);
```

### 4. **Logs de Diagnóstico**
```javascript
console.log("📁 CAMINHO GERADO:", fullPath);
console.log("🔍 DADOS EXTRAÍDOS:", { studentName, protocol });
console.log("📄 TIPO DOCUMENTO:", documentType);
```

## 🧪 **Como Testar**

### 1. **Verificar Console do Backend**
Olhe por esses logs:
- `📁 CAMINHO GERADO:`
- `🔍 DADOS EXTRAÍDOS:`
- `📄 CAMINHO DO ARQUIVO:`

### 2. **Estrutura Esperada**
```
matriculas/
├── 24/
│   ├── 01/
│   │   ├── joao-silva-santos/
│   │   │   ├── MAT-20240202-ABC9/
│   │   │   │   └── docs/
│   │   │   │       ├── certidao-nascimento_1705678901234.pdf
│   │   │   │       └── documento-autorizado-1_1705678901235.png
```

### 3. **Verificar Problemas**
- ✅ Nome do aluno aparece na pasta
- ✅ Protocolo aparece na pasta  
- ✅ Apenas uma pasta por matrícula
- ✅ Todos os documentos na pasta `docs/`

## 📋 **Checklist para Debug**

### Antes do Upload:
- [ ] Student name tem mais de 2 caracteres?
- [ ] Protocolo está sendo gerado automaticamente?
- [ ] Não há caracteres especiais nos nomes?

### Durante o Upload:
- [ ] Logs mostram caminhos corretos?
- [ ] Timestamp é o mesmo para todos os docs?
- [ ] Não há erros de permissão no Firebase?

### Após o Upload:
- [ ] Apenas uma pasta criada?
- [ ] Estrutura YY/MM/nome/protocolo/docs/?
- [ ] Todos os documentos aparecem?

---

**Próximos Passos:** 
1. Teste com a nova versão
2. Verifique os logs no console
3. Confirme a estrutura no Firebase Console
4. Reporte qualquer pasta duplicada ou sem nome