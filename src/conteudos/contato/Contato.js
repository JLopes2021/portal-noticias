import styles from './Contato.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './imgmenu/img4.png'



function Contato() {
  var Noticia1 = {
    title: 'Palmeiras',
    destaque: 'O Time profiisional',
    noticia: 'Leia aqui sobre o time do Palmeiras',
    link: 'Aqui o link da noticia'
  }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className={styles.noticia1}>
              <img className={styles.imgTime} src={img}/>
              <h1>{Noticia1.title}</h1>
              <p1><small>{Noticia1.destaque}</small></p1>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Contato;