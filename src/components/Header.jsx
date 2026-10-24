import styles from './Header.module.css';

function Header() {
    return (
        <div className={`${styles.logoSpotted} mx-auto mt-4 mb-4`}>
            <img src="/uncovered_logo.png" alt="Logo-uncovered" />
        </div>
    );
}
export default Header;
