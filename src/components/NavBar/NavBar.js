import Container from "../Container/Container";
import {NavLink} from 'react-router-dom';
import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.navbar}>
                    <span className={styles.icon + ' fa fa-tasks'}/>
                    <ul>
                        <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}
                                     to="/">Home</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}
                                     to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}
                                     to="/About">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar;