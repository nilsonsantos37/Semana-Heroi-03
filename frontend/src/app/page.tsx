import Button from "@/Components/Button";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import { Input } from "@/Components/Input";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
        <div className=" mx-auto w-full h-full flex flex-1 items-center justfy-center">
        <Container>
          <div className="max-w-(580px) w-full bg-secondary p-4 rounded-lg">

          </div>
          <div>
            <span>Ingressar</span>
            <span>Nova reunião</span>
          </div>
          <div  className="space-y-4">
            <Input placeholder="Digite o código da reunião" type="text" />
            <Input placeholder="Digite o código da reunião" type="text" />

            <Button title="Entrar" type="button" />
          </div>
          </Container>
        </div>
        
    </main>
  )
}