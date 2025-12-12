import Image from "next/image";
import { X } from "lucide-react";
import { spotifyLoudClear, streamOn, timeToPlayFair } from "@/public/images";
import { ControlType } from "@/types/global";

const Company = ({ control }: ControlType) => {

    const { setActiveSection } = control;

    return (
        <div className="w-full h-max flex justify-between bg-black border-t-2 border-white relative py-18 px-24">
            <span className="absolute top-4 right-6 m-4 cursor-pointer" onClick={() => setActiveSection(null)}>
                <X size={30} />
            </span>
            <div>
                <ul className="grid grid-cols-2 gap-x-18 gap-y-8">
                    <li className="capitalize font-bold text-4xl cursor-pointer">about spotify</li>
                    <li className="capitalize font-bold text-4xl cursor-pointer">inventors</li>
                    <li className="capitalize font-bold text-4xl cursor-pointer">press center</li>
                    <li className="capitalize font-bold text-4xl cursor-pointer">life at spotify</li>
                    <li className="capitalize font-bold text-4xl cursor-pointer">safety at spotify</li>
                    <li className="capitalize font-bold text-4xl cursor-pointer">diversity & inclusion</li>
                </ul>
            </div>
            <div>
                <h3 className="font-extrabold mb-4 text-1xl">Featured categories</h3>
                <ul className="flex flex-col gap-10">
                    <li>
                        <Image src={timeToPlayFair} alt="Spotify Logo" className="w-80"/>
                        <button className="uppercase border-2 px-4 py-2 font-bold mt-4 cursor-pointer text-[14px] hover:bg-white hover:text-black">time to play fair</button>
                    </li>
                    <li>
                        <Image src={spotifyLoudClear} alt="Spotify Logo" className="w-80"/>
                        <button className="uppercase border-2 px-4 py-2 font-bold mt-4 cursor-pointer text-[14px] hover:bg-white hover:text-black">spotify loud & clear</button>
                    </li>
                    <li>
                        <Image src={streamOn} alt="Spotify Logo" className="w-80"/>
                        <button className="uppercase border-2 px-4 py-2 font-bold mt-4 cursor-pointer text-[14px] hover:bg-white hover:text-black">stream on</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Company;