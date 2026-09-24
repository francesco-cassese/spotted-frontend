import CardBusiness from "./CardBusiness.jsx";
import useFetch from "../hooks/useFetch.js";
import styles from './BusinessesList.module.css';
import { useState } from "react";
import CategoryFilter from "./CategoryFilter.jsx";
import LoadingMessage from "./LoadingMessage.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import { Link } from "react-router-dom";

function BusinessesList() {

    // Chiamo useFetch due volte: una per i business e una per le categorie.
    // A loading ed error ho dato nomi diversi per le due chiamate, sennò si confondevano
    const { data: businesses, loading: businessesLoading, error: businessesError } = useFetch('/businesses');
    const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch('/categories');

    const [selectedCategory, setSelectedCategory] = useState(null);

    // Aspetto che arrivino sia i business sia le categorie prima di mostrare la pagina:
    // così filtro e card compaiono insieme e la lista non si sposta quando arrivano le categorie.
    // Se i business non arrivano non ho niente da mostrare, quindi fermo qui la pagina
    if (businessesLoading || categoriesLoading) return <LoadingMessage message="Caricamento in corso..." />;

    if (businessesError) {
        return (
            <ErrorMessage
                title="Qualcosa è andato storto"
                message="Non è stato possibile caricare le attività. Riprova più tardi."
                error={businessesError} />
        );
    }

    if (!businesses) return null;

    // Il filtro lo metto qui perché prima businesses poteva essere ancora null.
    // Se è selezionata "Tutte" tengo tutti i business, altrimenti solo quelli della categoria cliccata.
    // filter() crea una nuova lista e non cambia quella originale, così con "Tutte" li ho ancora tutti
    const filteredBusinesses = businesses.filter(business => (
        selectedCategory === null || business.category.id === selectedCategory
    ));

    return (
        <>
            {/* Se le categorie non arrivano la pagina funziona lo stesso, mostro solo un avviso */}
            {categoriesError && (
                <div className="alert alert-warning small" role="alert">
                    Non è stato possibile caricare le categorie. Puoi comunque consultare tutte le attività.
                </div>
            )}

            {/* Mostro il filtro solo quando le categorie sono arrivate, sennò va in errore perché sono ancora null */}
            {categories && (
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelect={setSelectedCategory} />
            )}

            {/* Scrivo length === 0 e non solo la length, perché con 0 React scriverebbe un "0" nella pagina */}
            {filteredBusinesses.length === 0 && (
                <p className="text-center text-muted">
                    {selectedCategory === null
                        ? "Non ci sono ancora attività da mostrare."
                        : "Nessuna attività trovata in questa categoria."}
                </p>
            )}

            <ul className={`row g-3 ${styles.businessesList}`}>
                {filteredBusinesses.map(business => (
                    // Come key uso l'id di ogni business. Con {...business} passo alla card tutti i dati del business
                    <li key={business.id} className="col-12 col-md-6 col-lg-4 d-flex">
                        <Link to={`/businesses/${business.slug}`} className="text-decoration-none"><CardBusiness {...business} /></Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default BusinessesList;
