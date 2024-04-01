import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import Card from "../Card/Card";
import {useSelector} from "react-redux";
import styles from "./Favorite.module.scss";
import {getFavoriteCards} from "../../redux/cardsRedux";

const Favorite = () => {

    const cards = useSelector(state => getFavoriteCards(state));

    return (
        <main>
            <Container>
                <PageTitle>Favorite</PageTitle>
                <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} id={card.id} />)}
                </ul>
                    </article>
            </Container>
        </main>
    );
}

export default Favorite;