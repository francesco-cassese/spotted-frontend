import styles from './CategoryFilter.module.css';

function CategoryFilter({ categories, selectedCategory, onSelect }) {
    return (
        <ul className="list-unstyled d-flex flex-wrap gap-2 mb-4">
            {/* "Tutte" l'ho aggiunta io a mano perché non arriva dall'API.
                Quando la clicco passo null, cioè nessun filtro */}
            <li>
                <button
                    className={`${styles.pill} ${selectedCategory === null ? styles.active : styles.inactive}`}
                    onClick={() => onSelect(null)}>
                    Tutte
                </button>
            </li>

            {/* Nel click uso la freccia () => perché se scrivessi solo onSelect(category.id)
                la funzione partirebbe subito e non quando clicco.
                Il bottone è pieno se è quello selezionato, altrimenti ha solo il bordo */}
            {categories.map(category => (
                <li key={category.id}>
                    <button
                        className={`${styles.pill} ${selectedCategory === category.id ? styles.active : styles.inactive}`}
                        onClick={() => onSelect(category.id)}>
                        {category.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}
export default CategoryFilter;
