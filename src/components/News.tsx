"use client";
import Image from "next/image";
import { X } from "lucide-react";
import { audiobooks, companyNews, spotifyLoudClear, wrapped2025 } from "@/public/images";
import { useGlobal } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";

const News = () => {

    const router = useRouter();

    const { setActiveSection } = useGlobal();

    const handleClick = () => {
        setActiveSection(null);
        router.push("/news");
    };

    return (
        <div className="w-full h-screen flex justify-between bg-black border-t-2 border-white relative py-18 px-24">
            <span className="absolute top-4 right-6 m-4 cursor-pointer" onClick={() => setActiveSection(null)}>
                <X size={30} />
            </span>
            <div>
                <ul className="flex flex-col gap-6 mb-12">
                    <li className="capitalize font-bold text-4xl cursor-pointer">news & announcements</li>
                    <li className="capitalize font-bold text-4xl cursor-pointer">artists & creators</li>
                    <li className="capitalize font-bold text-4xl cursor-pointer">culture & trends</li>
                    <li className="capitalize font-bold text-4xl cursor-pointer">behind the business</li>
                </ul>
                 <button className="bg-black text-white font-bold uppercase border border-white px-6 py-3 rounded-full mt-12 hover:bg-white hover:text-black" onClick={() => handleClick()}>view all news</button>
            </div>
            <div>
                <h3 className="font-extrabold mb-4 text-1xl">Featured categories</h3>
                <ul className="grid grid-cols-2 gap-x-18 gap-y-10">
                    <li>
                        <Image src={companyNews} alt="Spotify Logo" className="w-80"/>
                        <button className="uppercase border-2 px-4 py-2 font-bold mt-4 cursor-pointer text-[14px] hover:bg-white hover:text-black">company news</button>
                    </li>
                    <li>
                        <Image src={audiobooks} alt="Spotify Logo" className="w-80"/>
                        <button className="uppercase border-2 px-4 py-2 font-bold mt-4 cursor-pointer text-[14px] hover:bg-white hover:text-black">audiobooks</button>
                    </li>
                    <li>
                        <Image src={spotifyLoudClear} alt="Spotify Logo" className="w-80"/>
                        <button className="uppercase border-2 px-4 py-2 font-bold mt-4 cursor-pointer text-[14px] hover:bg-white hover:text-black">spotify loud & clear</button>
                    </li>
                    <li>
                        <Image src={wrapped2025} alt="Spotify Logo" className="w-80"/>
                        <button className="uppercase border-2 px-4 py-2 font-bold mt-4 cursor-pointer text-[14px] hover:bg-white hover:text-black">2025 wrapped</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default News;