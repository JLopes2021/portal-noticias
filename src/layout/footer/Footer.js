import { Link } from "react-scroll";
import styles from './Footer.module.css'

function Footer(){
    return(
        
      <footer className={styles.nav_footer}> 
      <nav className="nav__container__actions_footer">
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
              CONTATOS
            </Link>
          </li>
          <li>
          </li>
        </ul>

        
      </nav>
      <ul className={styles.ul_right}>
          <li>
            Item 1
          </li>
          <li>
            Item 2
          </li>
          <li>
            Item 35
          </li>
        </ul>
    </footer>

    )
}

export default Footer;