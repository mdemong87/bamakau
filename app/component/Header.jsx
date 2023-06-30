import Image from "next/image";
import Link from "next/link";
import { AiOutlineMobile } from "react-icons/ai";
import logo from "../../public/logo.png";
import Container from "./Containner";

export default function Header() {
  return (
    <div className="bg-gray-200 text-gray-800 py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <Image className="w-3/4 h-2/4" src={logo} width={400} height={400} />
          </div>
          <div className="flex gap-4 w-fit items-center capitalize font-medium text-lg">
            <Link className="border-b-4 border-sky-600" href={"/"}>home</Link>
            <Link href={"/about"}>about us</Link>
            <Link href={"/portfolio"}>portfolio</Link>
            <Link href={"/servises"}>services</Link>
          </div>
          <button href={"#"} className="flex items-center gap-1 custombg rounded-lg px-2 text-gray-200 font-medium">
            <AiOutlineMobile className="text-2xl" />
            <div className="flex flex-col items-start">
              <small>Contact Us</small>
              <span>+27 438 432 432</span>
            </div>
          </button>
        </div>
      </Container>
    </div>
  )
}
