import { ImageError } from "next/dist/server/image-optimizer";
import Image from "next/image";

export default function Chat() {
    return (
        <div className=" relative h-full bg-gray-900 px-4 pt-4 w-[20%] rounded-md m-3">
            <div>
                <span>name</span>
                <div>
                    <span>text</span>
                </div>
            </div>
             <form action="" className="absolute bottom-2">

                <div className="flex relative">
                    <input type="text"
                     name=""
                     id=""
                     className=" absolute right-2 top-2.5 px-3 py-2 bg-gray-950 rounded-md  w-full"/>
                     <Image src="/send.svg" width={20} height={20} alt="Send"/>
v                </div>
             </form>
        </div>
    )
}