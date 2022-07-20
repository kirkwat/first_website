import styles from '../styles/Header.module.css'

const Header = () => {

    const navLinks = ["Home","About","Projects","Experience","Contact"]

    const renderNavLink = (content) => {

        return (
            <ul key={content}>
                <li>
                    <button>{content}</button>
                </li>
            </ul>
        )
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <nav>
                        {navLinks.map(nav => renderNavLink(nav))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header