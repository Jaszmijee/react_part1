import styles from './Card.module.scss';
import clsx from 'clsx';
import {toggleFavoriteCard} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";

const Card = props => {

    const dispatch = useDispatch();

    const isFavorite = useSelector(state => state.cards.find(card => card.id === props.id)?.isFavorite);

    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleFavoriteCard(props.id));
    };

    return (
        <li className={styles.card}>{props.title}
            <button type="button"
                    className={clsx('fa', {'fa-star-o': !isFavorite, 'fa-star': isFavorite})}
                    onClick={handleToggleFavorite}>
            </button>
        </li>
    )
}

export default Card;
