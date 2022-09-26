import Header from '../components/header/header'
import Nav from '../components/nav/nav'


export default function Home() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    Menu:
    <hr></hr>
    <h2><a href="/">Home</a></h2>
    <br/>
    <h1>Está na Imagem</h1>
    <a href="/proximo-arquivo">Voltar para Arquivo</a>
    <div style={{width:'50%', paddingLeft:'5%', paddingTop:'2%'}}>
    <img src="/next.png"/>    
    </div>
    </>
  )
}
