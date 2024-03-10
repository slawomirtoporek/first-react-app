import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return(
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <span className="fa fa-tasks"></span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorite">Favorite</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;