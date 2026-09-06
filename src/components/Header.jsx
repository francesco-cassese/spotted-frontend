import styles from './Header.module.css';

function Header() {
    return (
        <>
            <div className={`${styles.logoSpotted} mx-auto mt-4`}>
                <img src="/spotted_logo.png" alt="Logo-spotted" />
            </div>
        </>
    )
}
export default Header