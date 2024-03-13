import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { getAllFavoriteCard } from '../../redux/cardsRedux';

const Favorite = () => {

  const cards = useSelector(state => getAllFavoriteCard(state));

  const ifFavoriteCardExist = () => {
    if(!cards.length){
      return <>
        <h2 className={styles.header}>No cards...</h2>
      </>
    } else {
      return <>
        <ul className={styles.favorite__list}>
          {cards.map(card => <Card key={card.id} {...card} />)}
        </ul>
      </>
    }
  }

  return(
    <section className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      {ifFavoriteCardExist()}
    </section>
  );
};

export default Favorite;