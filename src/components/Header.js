import { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import styles from '../styles/Header.module.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        background: '#fff',
        color: 'black',
        position: 'fixed',
        width: '100%',
        display: 'flex;',
    },
    container: {
        maxWidth: '1200px',
        margin: 'auto',
    }
  })

const Header = () => {
    const classes = useStyles();
    const {activeLinkId} = useContext(NavContext);

    const navLinks = ["Home","Projects","Experience","Contact"]

    const renderNavLink = (content) => {
        const scrollToId = `${content.toLowerCase()}Section`;

        const handleClicknav = () => {
            document.getElementById(scrollToId).scrollIntoView({behavior: "smooth"})
        }

        return (
            <ul key={content}>
                <li>
                    <button onClick={handleClicknav} 
                    className={activeLinkId === content ? styles.activeClass : ""}>
                        {content}
                    </button>
                </li>
            </ul>
        )
    }

    return (
        <AppBar className={classes.header}>
            <Toolbar className={classes.container}>
                <Container className={styles.navContainer}>
                    <nav>
                        {navLinks.map(nav => renderNavLink(nav))}
                    </nav>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header