


"use client";
import React, { useState } from "react";

export default function Step1StudentInfo({ formData, handleInputChange, nextStep }) {
  const [errors, setErrors] = useState({});
  const [authorizedPersons, setAuthorizedPersons] = useState([
    { name: "", phone: "", relation: "", document: null },
  ]);

  // Atualiza campos das pessoas autorizadas
  const handleAuthorizedChange = (index, field, value) => {
    const updated = [...authorizedPersons];
    updated[index][field] = value;
    setAuthorizedPersons(updated);
  };

  // Upload de documento
  const handleAuthorizedFile = (index, file) => {
    const updated = [...authorizedPersons];
    updated[index].document = file;
    setAuthorizedPersons(updated);
  };

  const addAuthorizedPerson = () => {
    setAuthorizedPersons([
      ...authorizedPersons,
      { name: "", phone: "", relation: "", document: null },
    ]);
  };

  // Validação do formulário
  const validateForm = () => {
    const newErrors = {};

    // Campos obrigatórios do aluno
    if (!formData.studentName) newErrors.studentName = "Campo obrigatório";
    if (!formData.birthDate) newErrors.birthDate = "Campo obrigatório";
    if (!formData.gender) newErrors.gender = "Campo obrigatório";
    if (!formData.desiredGrade) newErrors.desiredGrade = "Campo obrigatório";

    // Validação das pessoas autorizadas
    authorizedPersons.forEach((person, index) => {
      if (!person.name) newErrors[`authorizedName${index}`] = "Nome obrigatório";
      if (!person.phone) newErrors[`authorizedPhone${index}`] = "Telefone obrigatório";
      if (!person.relation) newErrors[`authorizedRelation${index}`] = "Parentesco obrigatório";
    });

    // Validação dos detalhes médicos se "Sim" selecionado
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
    if (validateForm()) {
      // Atualiza os dados das pessoas autorizadas no formData antes de ir para o próximo step
      handleInputChange("authorizedPersons", authorizedPersons);
      nextStep();
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      {/* Dados do Aluno */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        👤 Dados do Aluno
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome completo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
          <input
            type="text"
            value={formData.studentName || ""}
            onChange={(e) => handleInputChange("studentName", e.target.value)}
            placeholder="Digite o nome do aluno"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.studentName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.studentName && <p className="text-red-500 text-sm mt-1">{errors.studentName}</p>}
        </div>

        {/* Data de nascimento */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Data de Nascimento *</label>
          <input
            type="date"
            value={formData.birthDate || ""}
            onChange={(e) => handleInputChange("birthDate", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.birthDate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.birthDate && <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>}
        </div>

        {/* CPF do aluno */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CPF do Aluno</label>
          <input
            type="text"
            placeholder="000.000.000-00"
            value={formData.studentCPF || ""}
            onChange={(e) => handleInputChange("studentCPF", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sexo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sexo *</label>
          <select
            value={formData.gender || ""}
            onChange={(e) => handleInputChange("gender", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.gender ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>

        {/* Escola de origem */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Escola de Origem</label>
          <input
            type="text"
            placeholder="Nome da escola anterior (se houver)"
            value={formData.previousSchool || ""}
            onChange={(e) => handleInputChange("previousSchool", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Ano/Série pretendida */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ano/Série Pretendida *</label>
          <select
            value={formData.desiredGrade || ""}
            onChange={(e) => handleInputChange("desiredGrade", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.desiredGrade ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Selecione</option>
            {[...Array(9)].map((_, i) => (
              <option key={i} value={`${i + 1}ano`}>{i + 1}º Ano</option>
            ))}
          </select>
          {errors.desiredGrade && <p className="text-red-500 text-sm mt-1">{errors.desiredGrade}</p>}
        </div>
      </form>

      {/* Informações Médicas */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">🏥 Informações Médicas</h3>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Alergia a Medicamentos?", field: "medicineAllergy", detailsField: "medicineAllergyDetails" },
              { label: "Alergia a Insetos?", field: "insectAllergy", detailsField: "insectAllergyDetails" },
              { label: "Alergia a Produtos?", field: "productAllergy", detailsField: "productAllergyDetails" },
              { label: "Toma Medicamento Regularmente?", field: "regularMedicine", detailsField: "regularMedicineDetails" },
            ].map(({ label, field, detailsField }) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
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

                {/* Campo extra para detalhes, obrigatório se "Sim" */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    formData[field] === "sim" ? "max-h-40 mt-2" : "max-h-0 mt-0"
                  }`}
                >
                  <input
                    type="text"
                    placeholder="Detalhes..."
                    value={formData[detailsField] || ""}
                    onChange={(e) => handleInputChange(detailsField, e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                      errors[detailsField] ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-red-400"
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
              value={formData.feverMedicine || ""}
              onChange={(e) => handleInputChange("feverMedicine", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Pessoas Autorizadas */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          👥 Pessoas Autorizadas para Buscar o Aluno
        </h3>

        {authorizedPersons.map((person, index) => (
          <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-800">Pessoa Autorizada #{index + 1}</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                <input
                  type="text"
                  value={person.name}
                  onChange={(e) => handleAuthorizedChange(index, "name", e.target.value)}
                  placeholder="Nome completo"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${
                    errors[`authorizedName${index}`] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  } bg-white`}
                />
                {errors[`authorizedName${index}`] && (
                  <p className="text-red-500 text-sm mt-1">{errors[`authorizedName${index}`]}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                <input
                  type="tel"
                  value={person.phone}
                  onChange={(e) => handleAuthorizedChange(index, "phone", e.target.value)}
                  placeholder="(11) 99999-9999"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${
                    errors[`authorizedPhone${index}`] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  } bg-white`}
                />
                {errors[`authorizedPhone${index}`] && (
                  <p className="text-red-500 text-sm mt-1">{errors[`authorizedPhone${index}`]}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Grau de Parentesco *</label>
                <select
                  value={person.relation}
                  onChange={(e) => handleAuthorizedChange(index, "relation", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 ${
                    errors[`authorizedRelation${index}`] ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  } bg-white`}
                >
                  <option value="">Selecione</option>
                  <option value="pai">Pai</option>
                  <option value="mae">Mãe</option>
                  <option value="avo">Avô/Avó</option>
                  <option value="tio">Tio/Tia</option>
                  <option value="irmao">Irmão/Irmã</option>
                  <option value="primo">Primo/Prima</option>
                  <option value="amigo">Amigo da Família</option>
                  <option value="outro">Outro</option>
                </select>
                {errors[`authorizedRelation${index}`] && (
                  <p className="text-red-500 text-sm mt-1">{errors[`authorizedRelation${index}`]}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Documento de Identificação com Foto</label>
              <div
                className="file-drop-zone p-4 rounded-lg text-center cursor-pointer border border-dashed border-blue-400 hover:bg-blue-100 transition"
                onClick={() => document.getElementById(`authorizedDoc${index}`).click()}
              >
                <div className="text-2xl mb-2">🆔</div>
                <p className="text-gray-600 text-sm mb-1">Clique para enviar RG, CNH ou outro documento</p>
                <p className="text-xs text-gray-500">PDF, JPG ou PNG (máx. 5MB)</p>
                <input
                  type="file"
                  id={`authorizedDoc${index}`}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={(e) => handleAuthorizedFile(index, e.target.files[0])}
                />
              </div>
              {person.document && <p className="mt-2 text-sm text-green-600">📎 {person.document.name}</p>}
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addAuthorizedPerson}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          + Adicionar Pessoa Autorizada
        </button>
      </div>

      {/* Botão Próximo */}
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
  );
}
