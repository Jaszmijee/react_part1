import styles from './Card.module.scss';
import clsx from 'clsx';
import {useDispatch, useSelector} from "react-redux";
import {removeCard, toggleFavoriteCard} from "../../redux/cardsRedux";

const Card = props => {

    const dispatch = useDispatch();

    const isFavorite = useSelector(state => state.cards.find(card => card.id === props.id)?.isFavorite);

    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleFavoriteCard(props.id));
    };

    const handleRemoveCard = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    };

    return (
        <li className={styles.card}>{props.title}
            <div>
            <button type="button"
                    className={clsx(styles.icon + ' fa', {'fa-star-o': !isFavorite, 'fa-star': isFavorite})}
                    onClick={handleToggleFavorite}>
            </button>
            <button type="button"
                //    className={styles.icon + 'fa-solid fa-trash-can'}
                //    className={clsx(styles.icon, 'fa', 'fa-solid', 'fa-trash-can')}
                    className={styles.icon + ' fa fa-trash'}
                 //   className={clsx('fa', {'fa-star-o': !isFavorite, 'fa-star': isFavorite})}
                    onClick={handleRemoveCard}>
            </button>
            </div>
        </li>
    )
}

export default Card;
