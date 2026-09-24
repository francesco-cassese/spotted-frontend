import BusinessesList from "../components/BusinessesList";
import heroCollage from "../assets/hero-collage.jpg";
import styles from "./Homepage.module.css";

function Homepage() {
    return (
        <>
            {/* La hero sta fuori dal container così lo sfondo va da un lato all'altro della pagina;
                il container dentro tiene il contenuto allineato al resto del sito */}
            <section className={`${styles.hero} py-5`}>
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-12 col-md-7">
                            <p className={`${styles.eyebrow} small mb-2`}>Artigiani locali</p>
                            <h1 className="display-5">Scopri le eccellenze del tuo quartiere.</h1>
                            <p className="fs-5">Artigiani, negozi e servizi selezionati, raccontati con cura.</p>
                            {/* href="#attivita" fa scorrere la pagina fino all'elemento con id="attivita" */}
                            <a href="#attivita" className={styles.heroButton}>Esplora le attività</a>
                        </div>
                        <div className="col-12 col-md-5">
                            <img
                                className={`${styles.heroImage} rounded-4 shadow-sm`}
                                src={heroCollage}
                                alt="Artigiani al lavoro: ceramica, pane, tessitura e pelletteria" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-4" id="attivita">
                <BusinessesList />
            </div>
        </>
    );
}
export default Homepage;
