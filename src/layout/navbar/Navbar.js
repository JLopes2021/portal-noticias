import { Link } from "react-scroll";
import styles from './Navbar.module.css'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import img4 from './imgmenu/img4.png'


function Navbar() {

  return (
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
            SELEÇÃO BRASILEIRA
          </Link>
        </li>
        <li className={styles.itemList}>
        <OverlayTrigger
placement="bottom"
overlay={<Tooltip id="button-tooltip-2">Palmeiras</Tooltip>}
>
{({ ref, ...triggerHandler }) => (
  <Button
    variant="trasnparent"
    {...triggerHandler}
  >
    <Image className={styles.img4}
      ref={ref}
      roundedCircle
      src={img4}
    />
    <span className="ms-1">
    <Link activeClass="active" smooth spy to="contact">
            SETORIAL
          </Link>
    </span>
  </Button>
)}
</OverlayTrigger>         
        </li>
      </ul>
    </nav>

  )
}

export default Navbar;

