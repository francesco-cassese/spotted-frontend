import CardBusiness from "./CardBusiness.jsx";
import useFetch from "../hooks/useFetch.js";
import styles from './BusinessesList.module.css';
import { useState } from "react";
import CategoryFilter from "./CategoryFilter.jsx";
import LoadingMessage from "./LoadingMessage.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

function BusinessesList() {

    const { data: businesses, loading: businessesLoading, error: businessesError } = useFetch('/businesses');
    const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetch('/categories');

    const [selectedCategory, setSelectedCategory] = useState(null);

    if (businessesLoading) return <LoadingMessage message="Caricamento in corso..." />;

    if (businessesError) {
        return (
            <ErrorMessage
                title="Qualcosa è andato storto"
                message="Non è stato possibile caricare le attività. Riprova più tardi."
                error={businessesError} />
        );
    }

    if (!businesses) return null;

    return (
        <>
            {categoriesLoading && <LoadingMessage message="Caricamento delle categorie..." />}

            {categoriesError && (
                <div className="alert alert-warning small" role="alert">
                    Non è stato possibile caricare le categorie. Puoi comunque consultare tutte le attività.
                </div>
            )}

            {categories && (
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelect={setSelectedCategory} />
            )}

            <ul className={`row g-3 ${styles.businessesList}`}>
                {businesses.map(business => (
                    <li key={business.id} className="col-12 col-md-6 col-lg-4 d-flex"><CardBusiness {...business} /></li>
                ))}
            </ul>
        </>
    )
}
export default BusinessesList