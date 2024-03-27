import Container from "../Container/Container";
import styles from "./NavBar.module.scss";

const NavBar = () => {
    return (
        <nav >
            <Container>
                <div className={styles.navbar}>
                <span className={styles.icon + ' fa fa-tasks'}/>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">FAVORITE</a></li>
                    <li><a href="#">ABOUT</a></li>
                </ul>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar;