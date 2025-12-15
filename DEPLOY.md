# Guia de Deploy - TC do Brasil

## 📋 Checklist de Deploy

### 1. Frontend (React)

#### Build do Frontend
```bash
cd Frontend
npm install  # Se ainda não instalou as dependências
npm run build
```

Isso criará a pasta `Frontend/build` com os arquivos otimizados para produção.

#### O que fazer com a pasta build:
- Fazer upload da pasta `build` para o servidor
- Configurar o servidor web (nginx/Apache) para servir esses arquivos

---

### 2. Backend (Node.js)

#### Preparação do Backend
```bash
cd Backend
npm install  # Instalar dependências
```

#### Configurar variáveis de ambiente
Crie um arquivo `.env` na pasta `Backend` com:

```env
# Banco de Dados
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=tc_brasil

# Email (para envio de formulários)
GMAIL_USER=seu_email@gmail.com
GMAIL_PASSWORD=sua_senha_app_gmail

# Porta do servidor (opcional, padrão é 3001)
PORT=3001
```

#### Rodar o Backend
```bash
# Em desenvolvimento
node server.js

# Em produção (recomendado usar PM2)
pm2 start server.js --name tc-backend
pm2 save
pm2 startup
```

---

### 3. Configuração do Servidor Web (Nginx)

Exemplo de configuração para `portalit.com.br`:

```nginx
server {
    listen 80;
    server_name portalit.com.br www.portalit.com.br;

    # Redirecionar HTTP para HTTPS (recomendado)
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name portalit.com.br www.portalit.com.br;

    # Certificado SSL (usar Let's Encrypt)
    ssl_certificate /caminho/para/certificado.crt;
    ssl_certificate_key /caminho/para/chave.key;

    # Servir o Frontend React
    root /caminho/para/Frontend/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Proxy para o Backend (API)
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Proxy para login
    location /login {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

### 4. Banco de Dados MySQL

Certifique-se de que:
- ✅ O MySQL está instalado e rodando
- ✅ O banco de dados `tc_brasil` existe
- ✅ As tabelas estão criadas (`usuarios`, `vagas`)
- ✅ As credenciais no arquivo `.env` estão corretas

---

### 5. Verificações Finais

Após o deploy, verifique:

1. **Frontend está acessível?**
   - Acesse: `https://portalit.com.br`
   - Deve carregar a página inicial

2. **Backend está respondendo?**
   - Acesse: `https://portalit.com.br/api/vagas`
   - Deve retornar JSON (mesmo que vazio)

3. **Login funciona?**
   - Acesse: `https://portalit.com.br/login`
   - Teste fazer login

4. **Painel funciona?**
   - Após login, deve redirecionar para `/painel`
   - Teste adicionar/editar/excluir vagas

5. **Formulário funciona?**
   - Acesse: `https://portalit.com.br/trabalhe-conosco`
   - Teste enviar formulário

---

## 🔧 Comandos Úteis

### PM2 (Gerenciador de Processos Node.js)
```bash
# Instalar PM2
npm install -g pm2

# Iniciar backend
pm2 start Backend/server.js --name tc-backend

# Ver logs
pm2 logs tc-backend

# Reiniciar
pm2 restart tc-backend

# Parar
pm2 stop tc-backend

# Salvar configuração
pm2 save

# Configurar para iniciar no boot
pm2 startup
```

### Nginx
```bash
# Testar configuração
sudo nginx -t

# Recarregar configuração
sudo systemctl reload nginx

# Reiniciar
sudo systemctl restart nginx

# Ver status
sudo systemctl status nginx
```

---

## 📝 Notas Importantes

1. **SSL/HTTPS**: Configure certificado SSL (Let's Encrypt é gratuito)
2. **Firewall**: Abra a porta 3001 apenas para localhost (não expor publicamente)
3. **Backup**: Configure backup automático do banco de dados
4. **Logs**: Monitore os logs do backend e nginx regularmente
5. **Variáveis de ambiente**: Nunca commite o arquivo `.env` no Git

---

## 🆘 Troubleshooting

### Backend não inicia
- Verifique se a porta 3001 está livre
- Verifique os logs: `pm2 logs tc-backend`
- Verifique as credenciais do banco no `.env`

### Frontend não carrega
- Verifique se a pasta `build` está no local correto
- Verifique as permissões dos arquivos
- Verifique os logs do nginx: `sudo tail -f /var/log/nginx/error.log`

### API não responde
- Verifique se o backend está rodando: `pm2 list`
- Verifique a configuração do proxy no nginx
- Teste diretamente: `curl http://localhost:3001/api/vagas`

