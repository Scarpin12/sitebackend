const express = require('express');
require('dotenv').config();

const db = require("./db")
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'jqk-ws2';
const app = express();
app.use(cors());
app.use(express.json()); // para ler JSON do body
const vagasRoutes = require("./routes/vagas");
const formularioRouter = require('./routes/formulario');

function autenticarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) return res.status(401).json({ mensagem: 'Token não fornecido' });

    jwt.verify(token, SECRET_KEY, (err, usuario) => {
        if (err) return res.status(403).json({ mensagem: 'Token inválido' });
        req.usuario = usuario;
        next();
    });
}

// Cadastro de usuário (rota POST /usuarios)
app.post('/usuarios', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const hashedSenha = await bcrypt.hash(senha, 10);

        const sql = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';
        db.query(sql, [email, hashedSenha], (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json({ id: results.insertId, email });
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});



// Login (rota POST /login)
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    // Adiciona logging para diagnóstico
    console.log('POST /login recebido para email:', email);
    db.query(sql, [email], async (err, results) => {
        try {
            if (err) {
                console.error('Erro na query /login:', err);
                return res.status(500).json({ sucesso: false, mensagem: 'Erro no servidor', detalhe: err.message });
            }

            if (!results || results.length === 0) {
                return res.status(401).json({ sucesso: false, mensagem: 'Email ou senha incorretos' });
            }

            const user = results[0];

            const senhaValida = await bcrypt.compare(senha, user.senha);

            if (!senhaValida) {
                return res.status(401).json({ sucesso: false, mensagem: 'Email ou senha incorretos' });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                SECRET_KEY,
                { expiresIn: '1h' } // O token expira em 1 hora
            );

            res.json({
                sucesso: true,
                mensagem: 'Login OK',
                token
            });
        } catch (e) {
            console.error('Erro inesperado em /login:', e);
            res.status(500).json({ sucesso: false, mensagem: 'Erro no servidor', detalhe: e.message });
        }
    });
});

// 🔒 Rota protegida para teste
app.get('/painel', autenticarToken, (req, res) => {
    res.json({
        mensagem: `Bem-vindo ao painel, usuário ID ${req.usuario.id}!`,
        email: req.usuario.email
    });
});

app.use("/api/vagas", vagasRoutes); // Rota principal da API


app.use('/api', formularioRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Melhor logging de erros não capturados para diagnóstico
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown:', err);
    process.exit(1);
});
