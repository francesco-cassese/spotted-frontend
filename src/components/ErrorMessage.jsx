// children è quello che scrivo dentro al componente quando lo uso. Lo uso per il bottone
// "Torna alla home", che serve solo nella pagina di dettaglio e non nella homepage
function ErrorMessage({ title, message, error, children }) {
    return (
        <div className="text-center mt-5">
            <h2>{title}</h2>
            <p className="text-muted">{message}</p>
            {/* L'errore tecnico lo scrivo in piccolo, mi serve solo per capire cosa è andato storto */}
            <p className="small text-danger">{error}</p>
            {children}
        </div>
    );
}
export default ErrorMessage;
