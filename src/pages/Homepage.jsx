import BusinessesList from "../components/BusinessesList"
import Header from "../components/Header"

function Homepage() {
    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="hero-intro">
                    <h1 className="fs-1">Scopri le eccellenze del tuo quartiere.</h1>
                    <p className="fs-5">Artigiani, negozi e servizi selezionati, raccontati con cura.</p>
                </div>
                <BusinessesList />
            </div>
        </>
    )
}
export default Homepage