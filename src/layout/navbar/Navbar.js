import { Link } from "react-scroll";
import styles from './Navbar.module.css'
function Navbar(){
    return(
        <nav className={styles.nav__container__actions}>
        <ul className={styles.ul}>
          <li className={styles.itemList}>
            <Link activeClass="active" smooth spy to="about">
              NOSSO PORTAL
            </Link>
          </li>
          <li className={styles.itemList}>
            <Link activeClass="active" smooth spy to="projects">
              NOTÍCIAS
            </Link>
          </li>
          <li className={styles.itemList}>
            <Link activeClass="active" smooth spy to="blog">
              ESTATÍSTICAS
            </Link>
          </li>
          <li className={styles.itemList}>
            <Link activeClass="active" smooth spy to="contact">
              CONTATO
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>

    )
}

export default Navbar;