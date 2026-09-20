import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingMessage from "../components/LoadingMessage.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

function BusinessDetail() {

    // useParams mi dà lo slug che c'è nell'indirizzo della pagina
    // (es. /businesses/panificio-il-grano-antico)
    const { slug } = useParams();

    // Metto lo slug nell'indirizzo della chiamata all'API, così ricevo solo il business che mi serve
    const { data: business, loading, error } = useFetch(`/businesses/${slug}`);

    if (loading) {
        return <LoadingMessage message="Caricamento in corso..." />;
    }

    // L'errore può essere uno slug che non esiste, ma anche il backend spento.
    // Per questo scrivo "non è stato possibile caricare" e sotto mostro l'errore tecnico.
    // Il container lo metto qui perché dentro ErrorMessage non c'è
    if (error) {
        return (
            <div className="container">
                <ErrorMessage
                    title="Attività non trovata"
                    message="Non è stato possibile caricare questa attività."
                    error={error}>
                    <Link to="/" className="btn btn-primary">Torna alla home</Link>
                </ErrorMessage>
            </div>
        );
    }

    if (!business) {
        return null;
    }

    return (
        <div>BusinessDetail</div>
    );
}
export default BusinessDetail;
