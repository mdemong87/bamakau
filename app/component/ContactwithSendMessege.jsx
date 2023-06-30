import { RiSendPlaneFill } from "react-icons/ri";
import Containner from "./Containner";

export default function ContactwithSendMessege() {
    return (
        <div className="pt-8 pb-5">
            <Containner>
                <Containner>
                    <div>
                        <div className="grid grid-cols-3 items-center gap-10 py-8">
                            <div className="w-full h-full col-span-1">
                                <div className="contactImage">

                                    <h1 className="text-gray-200 font-bold text-2xl px-3 border-l-4 border-gray-200 mt-40 ml-6">Leave a <br />Message...</h1>
                                </div>
                            </div>
                            <div className="w-full col-span-2">
                                <h1 className="text-2xl font-bold capitalize text-gray-800">Contact Us</h1>
                                <p className="text-gray-600">Keep in touch with us by leaving your details below</p>
                                <div className="flex flex-col gap-5 mt-4">
                                    <input type="text" className="p-2 border border-sky-300 w-3/4 rounded-md" placeholder="Your Full Name" />
                                    <input type="email" className="p-2 border border-sky-300 w-3/4 rounded-md" placeholder="Your Email" />
                                    <textarea className="p-2 h-24 border border-sky-300 w-3/4 rounded-md" placeholder="Messege..."></textarea>
                                    <button className="custombg w-fit py-3 px-6 text-gray-200 font-bold text-lg rounded-md flex gap-2 items-center">
                                        Send
                                        <RiSendPlaneFill className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Containner>
            </Containner>
        </div>
    )
}

