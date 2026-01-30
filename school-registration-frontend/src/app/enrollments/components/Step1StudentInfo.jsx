

"use client";
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";


export default function Step1StudentInfo({ setFormData, formData, handleInputChange, nextStep }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [personToRemoveIndex, setPersonToRemoveIndex] = useState(null);

  const [errors, setErrors] = useState({});
  const [authorizedPersons, setAuthorizedPersons] = useState([
    { name: "", phone: "", relation: "", document: null },
  ]);


  useEffect(() => {
    handleInputChange("authorizedPersons", authorizedPersons);
  }, [authorizedPersons]);

  const handleAuthorizedPersonChange = (index, field, value) => {
    const updated = [...(formData.authorizedPersons || [])];
    updated[index] = { ...updated[index], [field]: value };
    handleInputChange("authorizedPersons", updated);
  };

  const handleAuthorizedPersonFileChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;
    const updated = [...(formData.authorizedPersons || [])];
    updated[index] = { ...updated[index], document: { name: file.name, file } };
    handleInputChange("authorizedPersons", updated);
  };

  const handleAddAuthorizedPerson = () => {
    const updated = [...(formData.authorizedPersons || []), { name: "", phone: "", relation: "", document: null }];
    handleInputChange("authorizedPersons", updated);
  };



  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentName) newErrors.studentName = "Campo obrigatório";
    if (!formData.studentCPF) newErrors.studentCPF = "Campo obrigatório";
    if (!formData.studentBirthDate) newErrors.studentBirthDate = "Campo obrigatório";
    if (!formData.nationality) newErrors.nationality = "Campo obrigatório";
    if (!formData.previousSchool) newErrors.previousSchool = "Campo obrigatório";

    (formData.authorizedPersons || []).forEach((person, index) => {
      if (!person.name) newErrors[`authorizedName${index}`] = "Nome obrigatório";
      if (!person.phone) newErrors[`authorizedPhone${index}`] = "Telefone obrigatório";
      if (!person.relation) newErrors[`authorizedRelation${index}`] = "Parentesco obrigatório";
      if (!person.document) newErrors[`authorizedDocument${index}`] = "Documento obrigatório";
    });


    [
      { field: "medicineAllergy", detailsField: "medicineAllergyDetails" },
      { field: "insectAllergy", detailsField: "insectAllergyDetails" },
      { field: "productAllergy", detailsField: "productAllergyDetails" },
      { field: "regularMedicine", detailsField: "regularMedicineDetails" },
    ].forEach(({ field, detailsField }) => {
      if (formData[field] === "sim" && !formData[detailsField]) {
        newErrors[detailsField] = "Informe os detalhes";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateForm()) return;

    const healthInfo = {
      allergies: [
        formData.medicineAllergyDetails,
        formData.insectAllergyDetails,
        formData.productAllergyDetails,
      ].filter(Boolean).join("; "),
      medications: [formData.regularMedicineDetails, formData.feverMedicine].filter(Boolean).join("; "),
      notesfeverMedicine: formData.notesfeverMedicine || "",
    };

    const student = {
      fullName: formData.studentName || "",
      birthDate: formData.studentBirthDate || "",
      cpf: formData.studentCPF || "",
      gender: formData.gender || "",
      previousSchool: formData.previousSchool || "",
      grade: formData.desiredGrade || "",
      nationality: formData.nationality || "",
      healthInfo,
      studentInterests: formData.studentInterests || "",
      studentSkills: formData.studentSkills || "",
      studentDifficulties: formData.studentDifficulties || "",
      authorizedPersons: Array.isArray(formData.authorizedPersons)
        ? formData.authorizedPersons.map((p) => ({
          name: p.name || "",
          phone: p.phone || "",
          relation: p.relation || "",
          document: p.document
            ? {
              type: "CNH", // ou outro tipo que você coletou do usuário
              url: p.document.name // nome do arquivo ou URL se já tiver feito upload
            }
            : null,
        }))
        : [],


    };

    handleInputChange("student", student);
    nextStep();
  };

  const handleRemoveAuthorizedPerson = (index) => {
    if (formData.authorizedPersons.length <= 1) {
      alert("Deve haver ao menos uma pessoa autorizada para buscar o aluno.");
      return;
    }

    setPersonToRemoveIndex(index);
    setShowConfirmModal(true);
  };


  const confirmRemoveAuthorizedPerson = () => {
    const updated = [...(formData.authorizedPersons || [])];
    updated.splice(personToRemoveIndex, 1);
    setFormData({ ...formData, authorizedPersons: updated });
    setShowConfirmModal(false);
    setPersonToRemoveIndex(null);
  };

  const cancelRemoveAuthorizedPerson = () => {
    setShowConfirmModal(false);
    setPersonToRemoveIndex(null);
  };


  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      {/* Dados do Aluno */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        👤 Dados do Aluno(a)
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome completo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
          <input
            type="text"
            value={formData.studentName || ""}
            onChange={(e) => handleInputChange("studentName", e.target.value)}
            placeholder="Digite o nome do aluno(a)"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.studentName ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.studentName && (
            <p className="text-red-500 text-sm mt-1">{errors.studentName}</p>
          )}
        </div>

        {/* Data de nascimento */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data de Nascimento *
          </label>
          <input
            type="date"
            value={formData.studentBirthDate || ""}
            onChange={(e) => handleInputChange("studentBirthDate", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.studentBirthDate ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.studentBirthDate && (
            <p className="text-red-500 text-sm mt-1">{errors.studentBirthDate}</p>
          )}
        </div>

        {/* CPF do aluno */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CPF *</label>
          <input
            type="text"
            placeholder="000.000.000-00"
            value={formData.studentCPF || ""}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");
              if (value.length > 11) value = value.slice(0, 11);
              value = value.replace(/(\d{3})(\d)/, "$1.$2");
              value = value.replace(/(\d{3})(\d)/, "$1.$2");
              value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
              handleInputChange("studentCPF", value);
            }}
            className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.studentCPF ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.studentCPF && (
            <p className="text-red-500 text-sm mt-1">{errors.studentCPF}</p>
          )}
        </div>

        {/* Sexo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sexo </label>
          <select
            value={formData.gender || ""}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.gender ? "border-red-500" : "border-gray-300"
              }`}
          >
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </div>

        {/* Naturalidade*/}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Naturalidade *</label>
          <input
            type="text"
            placeholder="Cidade onde nasceu"
            value={formData.nationality || ""}
            onChange={(e) => handleInputChange("nationality", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.nationality ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.nationality && (
            <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>
          )}
        </div>

        {/* Escola */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Escola *</label>
          <input
            type="text"
            placeholder="Nome da escola de Ensino Regular"
            value={formData.previousSchool || ""}
            onChange={(e) => handleInputChange("previousSchool", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.previousSchool ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.previousSchool && (
            <p className="text-red-500 text-sm mt-1">{errors.previousSchool}</p>
          )}
        </div>

        {/* Ano/Série */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ano/Série </label>
          <select
            value={formData.desiredGrade || ""}
            onChange={(e) => handleInputChange("desiredGrade", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.desiredGrade ? "border-red-500" : "border-gray-300"
              }`}
          >
            <option value="">Selecione</option>
            {[...Array(9)].map((_, i) => (
              <option key={i} value={`${i + 1}ano`}>
                {i + 1}º Ano{" "}
              </option>
            ))}
          </select>
          {errors.desiredGrade && (
            <p className="text-red-500 text-sm mt-1">{errors.desiredGrade}</p>
          )}
        </div>
      </form>

      {/* Informações Médicas */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          🏥 Informações Médicas
        </h3>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "Alergia a Medicamentos?",
                field: "medicineAllergy",
                detailsField: "medicineAllergyDetails",
              },
              {
                label: "Alergia a Insetos?",
                field: "insectAllergy",
                detailsField: "insectAllergyDetails",
              },
              {
                label: "Alergia a Produtos?",
                field: "productAllergy",
                detailsField: "productAllergyDetails",
              },
              {
                label: "Toma Medicamento Regularmente?",
                field: "regularMedicine",
                detailsField: "regularMedicineDetails",
              },
            ].map(({ label, field, detailsField }) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {label}
                </label>
                <div className="flex space-x-4">
                  {["sim", "nao"].map((val) => (
                    <label key={val} className="flex items-center">
                      <input
                        type="radio"
                        name={field}
                        value={val}
                        checked={formData[field] === val}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        className="mr-2"
                      />
                      <span>{val === "sim" ? "Sim" : "Não"}</span>
                    </label>
                  ))}
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${formData[field] === "sim" ? "max-h-40 mt-2" : "max-h-0 mt-0"
                    }`}
                >
                  <input
                    type="text"
                    placeholder="Detalhes..."
                    value={formData[detailsField] || ""}
                    onChange={(e) => handleInputChange(detailsField, e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${errors[detailsField]
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-red-400"
                      } bg-white`}
                  />
                  {errors[detailsField] && (
                    <p className="text-red-500 text-sm mt-1">{errors[detailsField]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Em caso de febre, qual medicamento usar?
            </label>
            <input
              type="text"
              placeholder="Ex: Paracetamol, Dipirona..."
              value={formData.notesfeverMedicine || ""}
              onChange={(e) => handleInputChange("notesfeverMedicine", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 bg-white"
            />
          </div>
        </div>
      </div>


      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          ⭐ Informações Adicionais
        </h3>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 space-y-4">
          {/* Interesses do Aluno */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interesses do Aluno
            </label>
            <textarea
              id="studentInterests"
              rows={3}
              placeholder="Ex: Esportes, música, leitura, matemática, ciências, artes..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white"
              value={formData.studentInterests || ""}
              onChange={(e) => handleInputChange("studentInterests", e.target.value)}
            />
          </div>

          {/* Habilidades Especiais */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Habilidades Especiais
            </label>
            <textarea
              id="studentSkills"
              rows={3}
              placeholder="Ex: Facilidade com números, criatividade, liderança, comunicação..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white"
              value={formData.studentSkills || ""}
              onChange={(e) => handleInputChange("studentSkills", e.target.value)}
            />
          </div>

          {/* Dificuldades ou Necessidades Especiais */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dificuldades ou Necessidades Especiais
            </label>
            <textarea
              id="studentDifficulties"
              rows={3}
              placeholder="Ex: Dificuldade de concentração, necessidades de apoio pedagógico, questões comportamentais..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white"
              value={formData.studentDifficulties || ""}
              onChange={(e) => handleInputChange("studentDifficulties", e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Pessoas Autorizadas */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          👥 Pessoas Autorizadas a Buscar
        </h3>

        {(formData.authorizedPersons || []).map((person, index) => (
          <div key={index} className="relative bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
            {/* Botão de remover pessoa autorizada */}
            <button
              type="button"
              onClick={() => handleRemoveAuthorizedPerson(index)}
              disabled={(formData.authorizedPersons || []).length <= 1}
              title={
                (formData.authorizedPersons || []).length <= 1
                  ? "É necessário manter pelo menos uma pessoa autorizada"
                  : "Remover pessoa autorizada"
              }
              className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${(formData.authorizedPersons || []).length <= 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-100 hover:bg-red-200 text-red-600"
                }`}
            >
              <FaTrash size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                <input
                  type="text"
                  placeholder="Digite o nome:"
                  value={person.name}
                  onChange={(e) => handleAuthorizedPersonChange(index, "name", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors[`authorizedName${index}`] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} bg-white`}
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                <input
                  type="tel"
                  placeholder="(11)99999-9999"
                  value={person.phone}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    if (value.length > 11) value = value.slice(0, 11);
                    if (value.length > 0) value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                    if (value.length >= 7) value = value.replace(/(\d{5})(\d{4})$/, "$1-$2");
                    handleAuthorizedPersonChange(index, "phone", value);
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors[`authorizedPhone${index}`] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} bg-white`}
                />
              </div>

              {/* Grau de Parentesco */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Grau de Parentesco *</label>
                <select
                  value={person.relation}
                  onChange={(e) => handleAuthorizedPersonChange(index, "relation", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${errors[`authorizedRelation${index}`] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} bg-white`}
                >
                  <option value="">Selecione</option>
                  <option value="pai">Pai</option>
                  <option value="mae">Mãe</option>
                  <option value="avo">Avô/Avó</option>
                  <option value="tio">Tio/Tia</option>
                  <option value="irmao">Irmão/Irmã</option>
                  <option value="primo">Primo/Prima</option>
                  <option value="amigo">Amigo da Família</option>
                  <option value="transporte">Transporte Escolar</option>
                </select>
              </div>
            </div>

            Upload de Documento
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Documento de Identificação com Foto *</label>
              <div
                className="file-drop-zone p-4 rounded-lg text-center cursor-pointer border border-dashed border-blue-400 hover:bg-blue-100 transition"
                onClick={() => document.getElementById(`authorizedDoc${index}`).click()}
              >
                <div className="text-2xl mb-2">🆔</div>
                <p className="text-gray-600 text-sm mb-1">Clique para selecionar RG, CNH ou outro documento</p>
                <p className="text-xs text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
                <input
                  type="file"
                  id={`authorizedDoc${index}`}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) => handleAuthorizedPersonFileChange(index, e)}

                />

              </div>

              {errors[`authorizedDocument${index}`] && (
                <p className="text-red-500 text-sm mt-1">{errors[`authorizedDocument${index}`]}</p>
              )}

              {person.document && (
                <p className="mt-2 text-sm text-green-600">
                  📎 Documento selecionado: {person.document.name}
                </p>
              )}





            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddAuthorizedPerson}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          + Adicionar Pessoa Autorizada
        </button>

        <div className="flex justify-end mt-8">
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Próximo →
          </button>
        </div>
      </div>
      {showConfirmModal && (
        <div className="fixed inset-0 bg-blue-40 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Excluir Pessoa Autorizada
            </h2>
            <p className="text-gray-600 mb-6">
              Tem certeza que deseja excluir esta pessoa autorizada?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={confirmRemoveAuthorizedPerson}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Sim, excluir
              </button>
              <button
                onClick={cancelRemoveAuthorizedPerson}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg font-medium transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>

  );
}

