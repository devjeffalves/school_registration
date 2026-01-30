// src/controllers/uploadController.js
import { uploadFile } from "../services/upload.js";

export const handleUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Nenhum arquivo enviado" });
        }

        const url = await uploadFile(req.file);
        return res.status(200).json({ url });
    } catch (error) {
        console.error("Erro no upload:", error);
        res.status(500).json({ error: "Falha ao enviar o arquivo" });
    }
};
