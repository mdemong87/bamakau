import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../component/Containner";

export default function Hero() {
    return (
        <div className='heroSection'>
            <Container>
                <div className=''>
                    <div>
                        <h1 className='text-gray-100 text-2xl font-extrabold uppercase'>ba <b className="customcolor">makau</b> <b className=" lowercase">is</b></h1>
                        <span className='text-gray-200 font-semibold text-5xl capitalize'>Better soluation<br /> for your bussiness</span>
                        <p className='pt-4 text-gray-300 w-2/4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus ipsam deserunt similique asperiores aliquam ratione architecto exercitationem voluptatum voluptatem aliquid molestiae distinctio blanditiis autem earum molestias, fugit laudantium iusto.</p>
                        <button className='flex gap-4 rounded-lg custombg py-2 px-3 mt-4 items-center'>
                            <span className='text-gray-200 font-medium'>Discover More</span>
                            <AiOutlineArrowRight className="text-gray-200" />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
