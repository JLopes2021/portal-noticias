import { Link } from "react-scroll";
import styles from './Navbar.module.css'
function Navbar(){
    return(
        <nav className={styles.nav__container__actions}>
        <ul className={styles.ul}>
          <li>
            <Link activeClass="active" smooth spy to="about">
              SOBRE MIM
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="projects">
              PROJETOS
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="blog">
              ESTATÍSTICAS
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              MEUS CONTATOS
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>

    )
}

export default Navbar;