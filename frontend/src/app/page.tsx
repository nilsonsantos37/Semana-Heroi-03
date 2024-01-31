import Container from "./Components/Container";
import Header from "./Components/Header";

export default function Home() {
  return (
    <main className="min-hscreen flex-col">
      <Header />
      
        <div className="max-w-(580px)w-dull h-full flex flex-1 items-center justfy-center">
        <Container>
          <div>
            <span>Ingressar</span>
            <span>Nova reunião</span>
          </div>
          <div>
            <input placeholder="Digite o código da reunião" type="text" />
            <input type="text" />
            <button>Entrar</button>
          </div>
          </Container>
        </div>
        
    </main>
  )
}