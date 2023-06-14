import styles from './Contato.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img1 from '../estatisticas/carousel/images/img1.jpg'



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
            <Card className={styles.cartao}>
              <Card.Img className={styles.img} variant="top" src={img1} />
              <Card.Body className={styles.bodyCard}>
                <Card.Title className={styles.title_card}>{Noticia1.title}</Card.Title>
                <Card.Text className={styles.text_card}>
                  {Noticia1.noticia }
                </Card.Text>
              </Card.Body>
              <Card.Body className={styles.bodyLink}>
                <Card.Link href="{Noticia1.destaque1}">{Noticia1.destaque}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Contato;