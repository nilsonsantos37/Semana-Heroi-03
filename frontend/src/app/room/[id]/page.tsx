import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
export default function Room({params}: {params: {id: string}}) {
    return (
        <>
        <div className=" h-screen">
            <Header />
            <div className="flex h-[80%]">
                <div className= "w-{80%}"></div>
                <h1>Room</h1>
            </div>
            <Footer/>
        </div>
        </>
    )
}