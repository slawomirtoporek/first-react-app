import styles from './NavBar.module.scss';

const NavBar = () => {

  return(
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <span className="fa fa-tasks"></span>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/favorite">Favorite</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;