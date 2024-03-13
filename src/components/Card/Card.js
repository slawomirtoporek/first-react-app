import clsx from 'clsx';
import styles from '../Card/Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();

  const addFavoriteCard = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id))
  }

  return(
    <li className={styles.card}>
      {props.title}
      <button type="button" 
        className={clsx(props.isFavorite && styles.active)} 
        onClick={addFavoriteCard}>
          <span className="fa fa-star-o"></span>
      </button>
    </li>
  );
};

export default Card;