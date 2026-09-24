// L'indirizzo dell'API sta nel file .env (VITE_API_URL), così per cambiarlo non tocco il codice
const BASE_URL = import.meta.env.VITE_API_URL;

async function apiFetch(endpoint, options = {}) {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
        throw new Error(result.message || "Errore generico dal server");
    }

    return result.data;
}

export { apiFetch };