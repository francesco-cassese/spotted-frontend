import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingMessage from "../components/LoadingMessage.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import cardStyles from "../components/CardBusiness.module.css";
import detailStyles from "./BusinessDetail.module.css";
import spottedBadge from "../assets/spotted-badge.png";

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
        <>
            {/* Fascia a tutta larghezza come nella hero: sta fuori dal container, e la foto sta dentro un container */}
            <section className={`${detailStyles.band} py-5`}>
                <div className="container">
                    {/* Il wrapper è position: relative, così il badge (position: absolute) si posiziona rispetto alla foto */}
                    <div className={detailStyles.coverWrapper}>
                        <img
                            className={`${detailStyles.cover} rounded-4`}
                            src={business.cover_image_url}
                            alt={business.name} />
                        <img className={detailStyles.badge} src={spottedBadge} alt="Spotted" />
                    </div>
                </div>
            </section>

            <div className="container mt-4">
                <h1 className="text-center mt-4">{business.name}<span className={cardStyles.bullet}></span></h1>

                <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className={`${detailStyles.categoryPill} rounded-pill px-3 py-1`}>
                        {business.category?.name}
                    </span>
                </div>

                {/* I tratti distintivi arrivano già dentro business perché l'API li carica con with() */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                    {business.distinctive_traits.map(trait => (
                        <span key={trait.id} className={`${detailStyles.traitPill} rounded-pill px-3 py-1 small`}>
                            {trait.name}
                        </span>
                    ))}
                </div>

                <div className="row g-4">
                    <div className="col-12 col-md-8">
                        <h2>La storia</h2>
                        <p className="fs-5">{business.story}</p>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className={`${detailStyles.infoBox} p-3`}>
                            <h2 className="fs-4">Informazioni</h2>
                            <address className="mb-2"><i className={`bi bi-geo-alt ${detailStyles.icon}`}></i> {business.address}</address>
                            {/* Il contatto può mancare (colonna nullable), quindi lo mostro solo se c'è.
                                Tolgo gli spazi solo nell'href, così il link tel: funziona */}
                            {business.contact && (
                                <p className="mb-0">
                                    <i className={`bi bi-telephone ${detailStyles.icon}`}></i>{" "}
                                    <a href={`tel:${business.contact.replaceAll(" ", "")}`} className={detailStyles.link}>{business.contact}</a>
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <hr className="my-4" />
                <Link to="/" className={detailStyles.link}>
                    <i className="bi bi-arrow-left"></i> Torna alle attività
                </Link>
            </div>
        </>
    );
}
export default BusinessDetail;
