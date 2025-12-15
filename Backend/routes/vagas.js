const express = require("express");
const router = express.Router();
const db = require("../db");

// LISTAR VAGAS
router.get("/", (req, res) => {
    db.query("SELECT * FROM vagas", (err, results) => {
        if (err) return res.status(500).json({ success: false, error: err });
        res.json(results);
    });
});

// CADASTRAR VAGA
router.post("/", (req, res) => {
    const { titulo, descricao, beneficio, vinculo, salario, local } = req.body;
    db.query("INSERT INTO vagas (titulo, descricao, beneficio, vinculo, salario, local) VALUES (?, ?, ?, ?, ?, ?)",
        [titulo, descricao, beneficio, vinculo, salario, local],
        (err, result) => {
            if (err) return res.status(500).json({ success: false, error: err });
            const novaVaga = { id: result.insertId, titulo, descricao, beneficio, vinculo, salario, local };
            res.json({ success: true, vaga: novaVaga });
        }
    );
});

// EDITAR VAGA
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, beneficio, vinculo, salario, local } = req.body;
    db.query("UPDATE vagas SET titulo=?, descricao=?, beneficio=?, vinculo=?, salario=?, local=? WHERE id=?",
        [titulo, descricao, beneficio, vinculo, salario, local, id],
        (err) => {
            if (err) return res.status(500).json({ success: false, error: err });
            res.json({ success: true, vaga: { id, titulo, descricao, beneficio, vinculo, salario, local } });
        }
    );
});

// EXCLUIR VAGA
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM vagas WHERE id=?", [id], (err) => {
        if (err) return res.status(500).json({ success: false, error: err });
        res.json({ success: true });
    });
});

module.exports = router;
