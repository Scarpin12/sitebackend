// Configuração da URL da API
// Em desenvolvimento: usa localhost automaticamente
// Em produção: usa URLs relativas para portalit.com.br

const getApiUrl = () => {
    // Se houver variável de ambiente definida, usa ela (prioridade máxima)
    if (process.env.REACT_APP_API_URL) {
        return process.env.REACT_APP_API_URL;
    }
    
    // Se estiver em localhost (desenvolvimento), usa o servidor local na porta 3001
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3001';
    }
    
    // Em produção: usa URLs relativas (mesmo domínio)
    // Isso funciona porque frontend e backend estão na mesma hospedagem (portalit.com.br)
    // As URLs relativas como "/api/vagas" serão resolvidas para "https://portalit.com.br/api/vagas"
    return '';
};

export const API_BASE_URL = getApiUrl();

