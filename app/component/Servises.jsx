import Image from "next/image";
import img2 from "../../public/bussiness.jpg";
import img1 from "../../public/domistic.jpg";
import img3 from "../../public/educational.jpg";
import img4 from "../../public/other.jpg";
import Containner from "./Containner";

export default function Servises() {
    return (
        <div className="py-8 bg-gray-900">
            <Containner>
                <div>
                    <div className="text-center">
                        <span className="text-gray-300 font-medium customcolor">Our Servises</span>
                        <h1 className="text-gray-200 font-bold text-2xl py-2">Comprehensive range of IT Services</h1>
                    </div>

                    <div class="py-8 flex justify-between items-center gap-6 text-gray-200">
                        <div className=" bg-gray-800 rounded-lg w-full">
                            <div className="w-full">
                                <Image className="w-full rounded-t-lg" width={500} height={500} src={img1}></Image>
                            </div>
                            <div className="p-4 h-60">
                                <h1 className="text-xl pt-2">Domestic IT Support</h1>
                                <p className="text-gray-400 pt-3">
                                    In-Home or Remote Response
                                    Supply, setup, ipgrade & repair
                                    virus, melware & spyware removal
                                    Wireless (WiFi) and wired network setup
                                    Multimedia, smartphone & tablet
                                </p>
                            </div>
                        </div>
                        <div className=" bg-gray-800 rounded-lg w-full">
                            <div className="w-full">
                                <Image className="w-full rounded-t-lg" width={500} height={500} src={img2}></Image>
                            </div>
                            <div className="p-4 h-60">
                                <h1 className="text-xl pt-2">Business
                                    Small & Medium </h1>
                                <p className="text-gray-400 pt-3">
                                    Outsourced and Managed IT Service
                                    Fixed or Flexible support packages
                                    Consultancy, supply & Installation
                                    Skilled remote or onsite engineers
                                    Professional and cost effective
                                </p>
                            </div>
                        </div>

                        <div className=" bg-gray-800 rounded-lg w-full">
                            <div className="w-full">
                                <Image className="w-full rounded-t-lg" width={500} height={500} src={img3}></Image>
                            </div>
                            <div className="p-4 h-60">
                                <h1 className="text-xl pt-2">Educational
                                    Schools</h1>
                                <p className="text-gray-400 pt-3">
                                    ICT Support, upgrade and installs
                                    Flexible term contracts & visits
                                    Smart Boards & Projectors
                                    Experinced onsite technicians
                                </p>
                            </div>
                        </div>

                        <div className=" bg-gray-800 rounded-lg w-full">
                            <div className="w-full">
                                <Image className="w-full rounded-t-lg" width={500} height={500} src={img4}></Image>
                            </div>
                            <div className="p-4 h-60">
                                <h1 className="text-xl pt-2">Other IT Services</h1>
                                <p className="text-gray-400 pt-3">
                                    Web and Email Hosting
                                    Cloud and Local Backups
                                    Web design and maintenance
                                    Printer installation and repairs
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </Containner>
        </div>
    )
}
