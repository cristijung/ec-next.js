import Header from '../components/header/header'
import Nav from '../components/nav/nav'


export default function Home() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    Menu:
    <hr></hr>
    <h1>Home</h1>
    <br/>
    <a href="/proximo-arquivo">Próximo Arquivo</a>
    <br/>
    <a href="/proxima-imagem">Ir para Imagem</a>
    </>
  )
}
