import Image from "next/image";
import { spotify, artists, creators, advertisers, lifeAt, design, engineering, vendors, songwriters, inventors, help,
  instagram, X, facebook } from "@/public/images";

const Footer = () => {
    return (
        <footer className="bg-black px-20 py-16">
            <div className="flex items-start justify-between">
            <Image src={spotify} alt="Spotify" className="w-40"/>
            <div>
                <h3 className="uppercase text-[#919496] text-[14px] font-bold mb-3">communities</h3>
                <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center gap-4">
                    <Image src={artists} alt="For Artists" className="w-12"/>
                    <span className="text-[20px] font-bold capitalize cursor-pointer hover:text-[#1ED760] hover:border-b-2">for artists</span>
                </li>
                <li className="flex items-center gap-4">
                    <Image src={engineering} alt="For Engineering" className="w-12"/>
                    <span className="text-[20px] font-bold capitalize cursor-pointer hover:text-[#1ED760] hover:border-b-2">for engineering</span>
                </li>
                <li className="flex items-center gap-4">
                    <Image src={creators} alt="For Creators" className="w-12"/>
                    <span className="text-[20px] font-bold capitalize cursor-pointer hover:text-[#1ED760] hover:border-b-2">for creators</span>
                </li>
                <li className="flex items-center gap-4">
                    <Image src={vendors} alt="For Vendors" className="w-12"/>
                    <span className="text-[20px] font-bold capitalize cursor-pointer hover:text-[#1ED760] hover:border-b-2">for vendors</span>
                </li>
                <li className="flex items-center gap-4">
                    <Image src={advertisers} alt="For Advertisers" className="w-12"/>
                    <span className="text-[20px] font-bold capitalize cursor-pointer hover:text-[#1ED760] hover:border-b-2">for advertisers</span>
                </li>
                <li className="flex items-center gap-4">
                    <Image src={songwriters} alt="For Songwriters" className="w-12"/>
                    <span className="text-[20px] font-bold capitalize cursor-pointer hover:text-[#1ED760] hover:border-b-2">for songwriters</span>
                </li>
                <li className="flex items-center gap-4">
                    <Image src={lifeAt} alt="Life at Spotify" className="w-12"/>
                    <span className="text-[20px] font-bold cursor-pointer hover:text-[#1ED760] hover:border-b-2">Life at Spotify</span>
                </li>
                <li className="flex items-center gap-4">
                    <Image src={inventors} alt="For Investors" className="w-12"/>
                    <span className="text-[20px] font-bold capitalize cursor-pointer hover:text-[#1ED760] hover:border-b-2">for investors</span>
                </li>
                <li className="flex items-center gap-4">
                    <Image src={design} alt="For Design" className="w-12"/>
                    <span className="text-[20px] font-bold capitalize cursor-pointer hover:text-[#1ED760] hover:border-b-2">for design</span>
                </li>
                <li className="flex items-center gap-4">
                    <Image src={help} alt="For Help, Chat & Ideas" className="w-12"/>
                    <span className="text-[20px] font-bold capitalize cursor-pointer hover:text-[#1ED760] hover:border-b-2">for help, chat & ideas</span>
                </li>
                </ul>
            </div>
            <div>
                <h3 className="uppercase text-[#919496] text-[14px] font-bold mb-3">company</h3>
                <ul className="flex flex-col gap-4">
                <li className="w-min border-b-2 border-black capitalize font-bold cursor-pointer hover:border-b-2 hover:border-white">about</li>
                <li className="w-min border-b-2 border-black capitalize font-bold cursor-pointer hover:border-b-2 hover:border-white">jobs</li>
                <li className="w-min border-b-2 border-black capitalize font-bold cursor-pointer hover:border-b-2 hover:border-white">investors</li>
                </ul>
            </div>
            <div>
                <h3 className="uppercase text-[#919496] text-[14px] font-bold mb-3">useful links</h3>
                <ul className="flex flex-col gap-4">
                <li className="w-min border-b-2 border-black capitalize font-bold cursor-pointer hover:border-b-2 hover:border-white">help</li>
                <li className="w-min border-b-2 border-black capitalize font-bold cursor-pointer whitespace-nowrap hover:border-b-2 hover:border-white">web player</li>
                </ul>
            </div>
            <div>
                <div className="flex gap-4">
                <button className="bg-[#2E2F2A] rounded-full p-4 cursor-pointer">
                    <Image src={instagram} alt="Instagram" className="w-5"/>
                </button>
                <button className="bg-[#2E2F2A] rounded-full p-4 cursor-pointer">
                    <Image src={X} alt="X" className="w-5"/>
                </button>
                <button className="gourp bg-[#2E2F2A] rounded-full p-4 cursor-pointer">
                    <Image src={facebook} alt="Facebook" className="w-5"/>
                </button>
                <button></button>
                </div>
                <button className="capitalize bg-white rounded-full px-4 py-2 text-black text-[18px] font-bold mt-7 cursor-pointer">get spotify</button>
            </div>
            </div>
            <div className="flex justify-between mt-12">
            <ul className="flex gap-4">
                <li className="cursor-pointer capitalize text-[#919496] hover:text-[#1ED760]">legal</li>
                <li className="cursor-pointer capitalize text-[#919496] hover:text-[#1ED760]">privacy center</li>
                <li className="cursor-pointer capitalize text-[#919496] hover:text-[#1ED760]">privacy policy</li>
                <li className="cursor-pointer capitalize text-[#919496] hover:text-[#1ED760]">cookies</li>
                <li className="cursor-pointer capitalize text-[#919496] hover:text-[#1ED760]">about ads</li>
            </ul>
            <span className="text-[#919496]">
                © 2025 Spotify AB.
            </span>
            </div>
        </footer>
    );
};

export default Footer;