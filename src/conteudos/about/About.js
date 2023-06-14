import Carousel from 'react-bootstrap/Carousel';
import styles from './About.module.css'

function About() {
    return (
        <div><h1 className={styles.title}>De agora:</h1>

            <div container-fluid>
                <div class="container-btn">
                    <div class="col2">  <Carousel className={styles.carousel}>
                    <Carousel.Item interval={15000}>
                        <img
                            className={styles.img}
                            src="https://opopular.com.br/image/policy%3A1.2607283%3A1678082927%2Fimage.jpg%3Ff%3D3x2"
                            alt="Noticia 1"
                        />
                        <Carousel.Caption>
                            <h3>Noticia quente nº1</h3>
                            <p>Descrição rápida da Notícia.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={15000}>
                        <img

                            src="https://cms.somosfanaticos.com/__export/1655746173756/sites/fanaticos/img/2022/06/20/agif2204031659430_1.jpg_1159711837.jpg"
                            alt="Noticia 2"
                        />
                        <Carousel.Caption>
                            <h3>Noticia quente nº2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={15000}>
                        <img
                            className={styles.img}
                            src="https://conteudo.imguol.com.br/c/esporte/d4/2023/03/11/rony-comemora-gol-do-palmeiras-contra-o-sao-bernardo-1678576949240_v2_450x600.jpg"
                            alt="Noticia 3"
                        />
                        <Carousel.Caption>
                            <h3>Noticia quente nº3</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel></div>
                </div>
              
            </div>

        </div>
    )
}

export default About;