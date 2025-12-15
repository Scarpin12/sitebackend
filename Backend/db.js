const mysql = require('mysql2');

// Configurar conexão MySQL
// Usa variáveis de ambiente em produção, ou valores padrão em desenvolvimento
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'tc_brasil'
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar com o banco:", err);
    } else {
        console.log("MySQL conectado com sucesso!");
    }
});

module.exports = db;