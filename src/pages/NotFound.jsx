import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage.jsx";

// Pagina mostrata quando l'indirizzo non corrisponde a nessuna rotta di App.jsx
function NotFound() {
    return (
        <ErrorMessage
            title="Pagina non trovata"
            message="L'indirizzo che hai inserito non esiste o è stato spostato."
            error="Errore 404">
            <Link to="/" className="d-inline-block mt-3">Torna alla home</Link>
        </ErrorMessage>
    );
}
export default NotFound;
