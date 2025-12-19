"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { headerLogo } from "@/public/images";
import { useGlobal } from "@/context/GlobalContext";

const Header = () => {

    const { setActiveSection } = useGlobal();

    return (
        <header className="w-full bg-black h-20 flex justify-between px-12 items-center fixed z-99">
            <div className="flex gap-20">
                <div className="flex gap-4 items-center">
                    <Link href="/" className="flex gap-4 items-center">
                        <Image
                            src={headerLogo}
                            alt="Spotify Logo"
                            width={46}
                            height={46}
                        />
                        <h2 className="text-[22px] font-extrabold text-white">For the Record</h2>
                    </Link>
                </div>
                <ul className="flex items-center gap-8">
                    <li className="flex gap-1 cursor-pointer">
                        <Link href="/news" className="flex items-center gap-1">
                            <span>News</span>
                            <ChevronDown />
                        </Link>
                    </li>
                    <li className="flex gap-1 cursor-pointer" onClick={() => setActiveSection("company")}>
                        <span>Company</span>
                        <ChevronDown />
                    </li>
                </ul>
            </div>
            <div className="flex items-end border-b-2 border-solid w-122 pb-2">
                <input type="text" id="search" placeholder="Search..." className="w-full outline-0 text-2xl font-bold placeholder:text-white" />
                <Search />
            </div>

            {/* <button id="theme-toggle" className="theme-toggle-button">Mudar Tema</button>     */}
        </header>
    );
};

export default Header;