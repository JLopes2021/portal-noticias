import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Noticias.module.css';

function Noticias() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/noticiasweb/')
      .then(function (res) {
        setPosts(res.data);
      })
  }, [])

  return (
    <div className="App">
      {
        posts.map(function (val) {
          return (
            <div container-fluid>
                <div className={styles.container_noticias}>
              <figure className={styles.figure}>
                <img className={styles.img} src={val.imagem} />
                <figcaption className={styles.figcaption}>{val.rodape}</figcaption>
              </figure>
              <p className={styles.p}>{val.noticia}</p>

            </div>
            </div>
            
          )
        })
      }
    </div>
  );
}

export default Noticias;
