
import Link from "next/link";
import { BiCctv, BiSolidCameraHome } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { PiTreeStructure } from "react-icons/pi";
import { VscRemoteExplorer } from "react-icons/vsc";
import Containner from "./Containner";

export default function MoreSupport() {
    return (
        <div className="bg-gray-200">
            <Containner>
                <Containner>
                    <div>
                        <h1 className="text-2xl text-center font-bold py-8 text-gray-800">More Support</h1>
                    </div>
                    <div className="grid grid-cols-3 justify-around gap-x-14 gap-y-8 pb-8">



                        <div className="bg-gray-100 p-3 rounded-md w-full text-center">
                            <div className="w-fit m-auto mb-2">
                                <VscRemoteExplorer className="text-5xl text-sky-600" />
                            </div>
                            <div>
                                <h1 className="text-xl">Remote Support</h1>
                                <p className="text-gray-400 h-20 overflow-hidden pt-1">
                                    Remotely view or control your PC
                                    Used for remote fixes or training
                                    Transfere files & chat features
                                    Password and SSL secure connection
                                    Instantly begin Fixing issues
                                    Time and Cost Effective
                                </p>
                                <Link href={"#"}>Read more</Link>
                            </div>
                        </div>





                        <div className="bg-gray-100 p-3 rounded-md w-full text-center">
                            <div className="w-fit m-auto mb-2">
                                <PiTreeStructure className="text-5xl text-sky-600" />
                            </div>
                            <div>
                                <h1 className="text-xl">Structured & Data Cabling</h1>
                                <p className="text-gray-400 h-20 overflow-hidden pt-1">
                                    Cat5/ 5e/ 6 / 6a and fibre optic data and voice structured cabling. From single point system to large 500 point networks. New Installation, fault repairs or additions to existing Initial visits, consultationns, design through to installation
                                    Skilled, time served and professional friendly engineers
                                </p>
                                <Link href={"#"}>Read more</Link>
                            </div>
                        </div>





                        <div className="bg-gray-100 p-3 rounded-md w-full text-center">
                            <div className="w-fit m-auto mb-2">
                                <GiNetworkBars className="text-5xl text-sky-600" />
                            </div>
                            <div>
                                <h1 className="text-xl">Network and Voice Infrastructure</h1>
                                <p className="text-gray-400 h-20 overflow-hidden pt-1">
                                    Cat5/ 5e/ 6 / 6a and fibre optic data and voice structured cabling. From single point system to large 500 point networks. New Installation, fault repairs or additions to existing Initial visits, consultationns, design through to installation
                                    Skilled, time served and professional friendly engineers
                                </p>
                                <Link href={"#"}>Read more</Link>
                            </div>
                        </div>






                        <div className="bg-gray-100 p-3 rounded-md w-full text-center">
                            <div className="w-fit m-auto mb-2">
                                <BiCctv className="text-5xl text-sky-600" />
                            </div>
                            <div>
                                <h1 className="text-xl">CCTV</h1>
                                <p className="text-gray-400 h-20 overflow-hidden pt-1">
                                    IP and HD based cameras and CCTV systems
                                    From smaller residential to large commetial installations. DVR or standalone systems available with remote viewing. Turnstyles and biometric readers installation. Realtime access control and time and attendance system. Full onsite training and after sales telephone support
                                </p>
                                <Link href={"#"}>Read more</Link>
                            </div>
                        </div>





                        <div className="bg-gray-100 p-3 rounded-md w-full text-center">
                            <div className="w-fit m-auto mb-2">
                                <BiSolidCameraHome className="text-5xl text-sky-600" />
                            </div>
                            <div>
                                <h1 className="text-xl">Security Cameras</h1>
                                <p className="text-gray-400 h-20 overflow-hidden pt-1">
                                    IP and HD based cameras and CCTV systems
                                    From smaller residential to large commetial installations. DVR or standalone systems available with remote viewing. Turnstyles and biometric readers installation. Realtime access control and time and attendance system. Full onsite training and after sales telephone support
                                </p>
                                <Link href={"#"}>Read more</Link>
                            </div>
                        </div>




                        <div className="bg-gray-100 p-3 rounded-md w-full text-center">
                            <div className="w-fit m-auto mb-2">
                                <MdSettingsSystemDaydream className="text-5xl text-sky-600" />
                            </div>
                            <div>
                                <h1 className="text-xl">Time and Attendance Systems</h1>
                                <p className="text-gray-400 h-20 overflow-hidden pt-1">
                                    IP and HD based cameras and CCTV systems
                                    From smaller residential to large commetial installations. DVR or standalone systems available with remote viewing. Turnstyles and biometric readers installation. Realtime access control and time and attendance system. Full onsite training and after sales telephone support
                                </p>
                                <Link href={"#"}>Read more</Link>
                            </div>
                        </div>


















                    </div >
                </Containner >
            </Containner >
        </div >
    )
}
