const db = require('./db');

const email = process.argv[2] || 'admin';

db.query('SELECT id, email, senha FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err) {
        console.error('Erro ao consultar banco:', err);
        process.exit(1);
    }

    if (!results || results.length === 0) {
        console.log('Nenhum usuário encontrado para email:', email);
        process.exit(0);
    }

    console.log('Resultado:', results);
    process.exit(0);
});
