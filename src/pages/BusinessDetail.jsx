import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingMessage from "../components/LoadingMessage.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

function BusinessDetail() {

    const { slug } = useParams();

    const { data: business, loading, error } = useFetch(`/businesses/${slug}`);

    if (loading) {
        return <LoadingMessage message="Caricamento in corso..." />;
    }

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
    )
}
export default BusinessDetail