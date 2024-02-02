import Button from "@/Components/Button";
import Header from "@/Components/Header";
import { Input } from "@/Components/Input";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className=" mx-auto w-full h-full flex flex-1 items-center justfy-center">

          <div className="min-w-(580px) w-full bg-secondary p-4 rounded-lg space-y-6 px-10">

          </div>
          <div className="flex items-center text-center">
            <span className="bg-secundary w-1/2 p-4 rounded-t-lg text-primary">Ingressar</span>
            <span className="w-1/2">Nova reunião</span>
          </div>
          <div  className="min-w-[580px] bg-secundary rounded-b-lg space-y-8 px-10">
            <Input placeholder="Seu nomeo" type="text" />
            <Input placeholder="Seu id da reunião" type="text" />

            <Button title="Entrar" type="button" />
          </div>
        </div>
        
    </main>
  );
}