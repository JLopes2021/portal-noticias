import Contato from './conteudos/contato/Contato'
import About from './conteudos/about/About'
import Noticias from './conteudos/noticias/Noticias'
import Estatisticas from './conteudos/estatisticas/Estatisticas';
import EstatisticasCabecalho from './conteudos/estatisticas/EstatisticasCabecalho'
import './App.css';
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer';
function App(){
  return(
    <div>
      <Navbar/>
      <section id="about">
      <About/>
      </section>
      <section id="projects">
      <Noticias/>
      </section>
      <section id="blog">
        <EstatisticasCabecalho/>
      <Estatisticas/>
      </section>
      <section id="contact"><Contato/>
      </section>
      <Footer/>
    </div>
  )
}
 

export default App;
