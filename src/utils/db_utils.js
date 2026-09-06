const BASE_URL = 'http://localhost:8000/api';

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