import styles from './Estatisticas.module.css'

function Estatisticas(){
    return(
        <div><h1>About</h1>
        
        <div container-fluid>
            <h2 className={styles.title}>Notícias quentes da hora</h2>
            <p>Descrição da notícia quente da hora</p>
            <small>Passando em scroll lateral</small>
        </div>
        
        </div>    )
};

export default Estatisticas;