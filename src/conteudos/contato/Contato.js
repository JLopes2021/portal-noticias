import styles from './Contato.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img1 from '../estatisticas/carousel/images/img1.jpg'

function Contato() {
  var Noticia1 = {
    title: 'Título 1',
    destaque: 'Destaque nº1',
    noticia: 'A noticia do destaque numero um',
    link: 'Aqui o link da noticia'
  }
  var Noticia2 = {
    title: 'Título 2',
    destaque: 'Destaque nº2',
    noticia: 'A noticia do destaque numero dois',
    link: 'Aqui o link da noticia'

  }
  var Noticia3 = {
    title: 'Título 3',
    destaque: 'Destaque nº3',
    noticia: 'A noticia do destaque numero tres',
    link: 'Aqui o link da noticia'

  }
  var Noticia4 = {
    title: 'Título 4',
    destaque: 'Destaque nº4',
    noticia: 'A noticia do destaque numero quatro',
    link: 'Aqui o link da noticia'

  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img1} />
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
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body className={styles.bodyCard} >
                <Card.Title className={styles.title_card}>{Noticia2.title}</Card.Title>
                <Card.Text className={styles.text_card}>
                  {Noticia2.noticia}
                </Card.Text>
              </Card.Body>
              <Card.Body className={styles.bodyLink}>
                <Card.Link href="{Noticia1.destaque1}">{Noticia2.destaque}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body className={styles.bodyCard}>
                <Card.Title className={styles.title_card}>{Noticia3.title}</Card.Title>
                <Card.Text className={styles.text_card}>
                  {Noticia3.noticia}
                </Card.Text>
              </Card.Body>
              <Card.Body className={styles.bodyLink}>
                <Card.Link href="{Noticia1.destaque1}">{Noticia3.destaque}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.cartao} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body className={styles.bodyCard}>
                <Card.Title className={styles.title_card}>{Noticia4.title}</Card.Title>
                <Card.Text className={styles.text_card}>
                  {Noticia4.noticia}
                </Card.Text>
              </Card.Body >
              <Card.Body className={styles.bodyLink}>
                <Card.Link href="{Noticia1.destaque1}">{Noticia4.destaque}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Contato;