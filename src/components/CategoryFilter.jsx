function CategoryFilter({ categories, selectedCategory, onSelect }) {
    return (
        <>
            <ul className="list-unstyled d-flex flex-wrap gap-2 mb-4">
                <li>
                    <button
                        className={`btn rounded-pill ${selectedCategory === null ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => onSelect(null)}>
                        Tutte</button>
                </li>
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