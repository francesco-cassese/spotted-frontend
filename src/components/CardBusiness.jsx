import styles from './CardBusiness.module.css';

function CardBusiness({ cover_image_url, name, category, address }) {
    return (
        <div className="card shadow-sm">
            <div className={styles.businessCoverContainer}>
                <img className="card-img-top" src={cover_image_url} alt={name} />
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
