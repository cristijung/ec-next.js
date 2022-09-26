import Header from '../components/header/header'
import Nav from '../components/nav/nav'


export default function Home() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    Menu:
    <hr></hr>
    <a href="/">Voltar a Home</a>
    <br/>
    <h1>Está no arquivo</h1>
    <br/>
    <a href="/proxima-imagem">Ir para Imagem</a>
    </>
  )
}
