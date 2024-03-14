import clsx from 'clsx';
import styles from '../Card/Card.module.scss';
import { useDispatch } from 'react-redux';
import { removeSelectedCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

  const addFavoriteCard = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id))
  }

  const removeCard = e => {
    e.preventDefault();
    dispatch(removeSelectedCard(props.id));
  }

  return(
    <li className={styles.card}>
      {props.title}
      <div className={styles.icons}>
        <button type="button" 
          className={clsx(props.isFavorite && styles.active)} 
          onClick={addFavoriteCard}>
            <span className="fa fa-star-o"></span>
        </button>
        <button type="button"  
          onClick={removeCard}>
            <span className="fa fa-trash"></span>
        </button>
      </div>
    </li>
  );
};

export default Card;