import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import about from "../../public/about.png";
import Containner from "./Containner";

export default function About() {
    return (
        <div className="py-8">
            <Containner>
                <Containner>
                    <div className="flex justify-between gap-5 items-center">
                        <div className="w-full">
                            <h1 className="text-3xl text-gray-800 font-bold">About Ba Makau</h1>
                            <p className="pt-3 text-lg font-medium text-gray-600">We are professional, dynamic and cost effective IT Support and Computer Service
                                provider for Home, Business, Schools and Education Customers in South Africa.
                                Our office are in Kempton Park, the center of Gauteng
                                enabling us to service many locations.</p>
                            <p className="pt-3 text-lg font-medium text-gray-600">
                                Our goal is to archieve 100% customer saticefaction. We strive to provide our customers with not only a high quality service, but fantastic value for money and an "all-round" good experience. Whether it is a one-time home user or a business client with a contract, Ba Makau will always offer the best possible service it can.
                            </p>
                            <button className='flex gap-4 rounded-lg custombg py-2 px-3 mt-4 items-center'>
                                <span className='text-gray-200 font-medium'>See More</span>
                                <AiOutlineArrowRight className="text-gray-200" />
                            </button>
                        </div>
                        <div className="w-full">
                            <Image width={600} height={600} src={about}></Image>
                        </div>
                    </div>
                </Containner>
            </Containner>
        </div>
    )
}
