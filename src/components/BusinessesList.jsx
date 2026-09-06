import CardBusiness from "./CardBusiness.jsx";
import useFetch from "../hooks/useFetch.js";
import styles from './BusinessesList.module.css';

function BusinessesList() {

    const { data: businesses, loading, error } = useFetch('/businesses');

    console.log(businesses);

    if (!businesses) return null;

    return (
        <ul className={`row g-3 ${styles.businessesList}`}>
            {businesses.map(business => (
                <li key={business.id} className="col-12 col-md-6 col-lg-4 d-flex"><CardBusiness {...business} /></li>
            ))}
        </ul>
    )
}
export default BusinessesList