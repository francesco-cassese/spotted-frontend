import styles from './CardBusiness.module.css';

function CardBusiness({ cover_image_url, name, category, address }) {
    return (
        <div className="card shadow-sm">
            <div className={styles.businessCoverContainer}>
                {/* loading="lazy": la foto si scarica solo quando sta per comparire sullo schermo.
                    Lo spazio per la foto lo riservo nel CSS con aspect-ratio, così la pagina non salta */}
                <img className={`card-img-top ${styles.cover}`} src={cover_image_url} alt={name} loading="lazy" />
            </div>
            <span className={`${styles.badgeOutline} text-center`}>{category?.name}</span>
            <div className='card-body text-center'>
                <h3 className='card-title mb-0'>{name}<span className={styles.bullet}></span></h3>
                <address className='mb-0 text-muted small'><i className='bi bi-geo-alt'></i> {address}</address>
            </div>
        </div>
    );
}
export default CardBusiness;
