import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return(
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <span className="fa fa-tasks"></span>
      </div>
      <nav>
        <ul>
        <li><NavLink className={({ isActive }) => 
          isActive ? styles.linkActive : undefined} 
        to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => 
          isActive ? styles.linkActive : undefined} 
        to="/favorite">Favorite</NavLink></li>
        <li><NavLink className={({ isActive }) => 
          isActive ? styles.linkActive : undefined} 
        to="/about">About</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;