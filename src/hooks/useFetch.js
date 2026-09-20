import { useState, useEffect } from 'react';
import { apiFetch } from '../utils/db_utils';

function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                // Azzero l'errore di una richiesta precedente, sennò resterebbe anche se la nuova va bene
                setError(null);
                const result = await apiFetch(endpoint);
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
}

export default useFetch;
