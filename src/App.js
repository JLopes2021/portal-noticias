import Contato from './conteudos/contato/Contato'
import About from './conteudos/about/About'
import Noticias from './conteudos/noticias/Noticias'
import Estatisticas from './conteudos/estatisticas/Estatisticas';
import './App.css';
import Navbar from './layout/navbar/Navbar'
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
      <Estatisticas/>
      </section>
      <section id="contact"><Contato/></section>

    </div>
  )
}
 

export default App;
