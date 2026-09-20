// Questo componente disegna solo i bottoni delle categorie. Non tiene lo state:
// quello sta in BusinessesList e io lo avviso con onSelect quando clicco un bottone
function CategoryFilter({ categories, selectedCategory, onSelect }) {
    return (
        <>
            <ul className="list-unstyled d-flex flex-wrap gap-2 mb-4">
                {/* "Tutte" l'ho aggiunta io a mano perché non arriva dall'API.
                    Quando la clicco passo null, cioè nessun filtro */}
                <li>
                    <button
                        className={`btn rounded-pill ${selectedCategory === null ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => onSelect(null)}>
                        Tutte</button>
                </li>
                {/* Nel click uso la freccia () => perché se scrivessi solo onSelect(category.id)
                    la funzione partirebbe subito e non quando clicco.
                    Il bottone è pieno se è quello selezionato, altrimenti ha solo il bordo */}
                {categories.map(category => (<li key={category.id}>
                    <button
                        className={`btn rounded-pill ${selectedCategory === category.id ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => onSelect(category.id)}>
                        {category.name}
                    </button>
                </li>))

                }
            </ul >
        </>
    )
}
export default CategoryFilter
