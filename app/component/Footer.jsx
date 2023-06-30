import Image from 'next/image';
import Link from 'next/link';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube, AiOutlineArrowRight, AiOutlineGlobal, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import logo from "../../public/logo.png";
import Container from "./Containner";

export default function Footer() {
  return (
    <div className='border-t-2 border-sky-500 bg-gray-200 text-gray-800'>
      <Container>
        <div className='py-5'>
          <div className='flex  justify-between pb-5'>
            <div className='w-full pt-5'>
              <Image className='w-3/4 h-2/4' width={400} height={400} src={logo} />
            </div>
            <div className='w-full'>
              <h1 className='text-xl font-semibold pb-3 pt-3'>Quick link</h1>
              <div className='flex flex-col gap-2'>
                <Link href={"#"} className='flex gap-1 items-center'>
                  <AiOutlineArrowRight className='customcolor' />
                  Home</Link>
                <Link href={"#"} className='flex gap-1 items-center'>
                  <AiOutlineArrowRight className='customcolor' /> About Us</Link>
                <Link href={"#"} className='flex gap-1 items-center'>
                  <AiOutlineArrowRight className='customcolor' />
                  Portfolio</Link>
                <Link href={"#"} className='flex gap-1 items-center'>
                  <AiOutlineArrowRight className='customcolor' />
                  Services</Link>
              </div>
            </div>
            <div className='w-full'>
              <h1 className='text-xl font-semibold pb-3 pt-3'>Tarms and Policy</h1>
              <div className='flex flex-col gap-2'>
                <Link href={"#"} className='flex gap-1 items-center'>
                  <AiOutlineArrowRight className='customcolor' />Cookise Policy
                </Link>
                <Link href={"#"} className='flex gap-1 items-center'>
                  <AiOutlineArrowRight className='customcolor' /> Servises Policy</Link>
                <Link href={"#"} className='flex gap-1 items-center'>
                  <AiOutlineArrowRight className='customcolor' />
                  Legel Policy</Link>
                <Link href={"#"} className='flex gap-1 items-center'>
                  <AiOutlineArrowRight className='customcolor' />
                  Info Policy</Link>
              </div>
            </div>
            <div className='w-full'>

              <h1 className='text-xl font-semibold pt-3 pb-3'>Contact Info</h1>

              <div className='flex flex-col gap-2'>
                <div className="w-full flex gap-2 items-center">
                  <AiOutlinePhone className="text-2xl customcolor" />
                  <p className="">+27 438 432 432</p>
                </div>
                <div className="w-full flex gap-2 items-center">
                  <AiOutlineMail className="text-2xl customcolor" />
                  <p className="">examplexyz@gmail.com</p>
                </div>
                <div className="w-full flex gap-2 items-center">
                  <AiOutlineGlobal className="text-2xl customcolor" />
                  <p>www.bamakau.co.za</p>
                </div>
                <div className="w-full flex gap-2 items-center">
                  <BiLocationPlus className="text-3xl customcolor" />
                  <p className="">3 Breerivier St, Norkem Park, Kempton Park, 1618, South Africa</p>
                </div>
              </div>

            </div>
          </div>
          <div className='pt-5 flex justify-between items-center border-t-2 border-gray-300'>
            <div>
              &copy;2023 <b className='customcolor'>BA MAKAU</b>. All right reserved
            </div>
            <div className='flex gap-3'>
              <div className='py-2 px-2 custombg rounded-full cursor-pointer'>
                <AiFillFacebook className='text-gray-200 text-2xl' />
              </div>
              <div className='py-2 px-2 custombg rounded-full cursor-pointer'>
                <AiFillTwitterSquare className='text-gray-200 text-2xl' />
              </div>
              <div className='py-2 px-2 custombg rounded-full cursor-pointer'>
                <AiFillLinkedin className='text-gray-200 text-2xl' />
              </div>
              <div className='py-2 px-2 custombg rounded-full cursor-pointer'>
                <AiFillYoutube className='text-gray-200 text-2xl' />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
