"use client";
import { useEffect, useState } from "react";
import { useGlobal } from "@/context/GlobalContext";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import News from "@/components/News";
import Company from "@/components/Company";
import { Item } from "@/types/global";
import { spotlight, edSheeran, spotifyLogo } from "@/public/images";

export default function NewsPage() {

    const { activeSection } = useGlobal();

    const [items, setItems] = useState<Item[]>([]);
    
    useEffect(() => {
        async function load() {
            const res = await fetch("/api/news");
            const data = await res.json();
            // setItems(data);
            console.log(data);
            setItems(data);
        }
        load();
    }, []);


    return (
        <main className="bg-white min-h-screen w-full font-sans">
            <Header />

            {/* ESPAÇADOR DO HEADER FIXO */}
            <div className="h-20"></div>

            {/* BARRA DE TÍTULO E FILTROS */}
            <section className="w-full h-[133px] flex flex-row items-start px-10 pt-6 pb-2.5 bg-white border-b-2 border-black text-black">
                <div className="flex flex-col items-start w-[174px] h-[98px] flex-none order-0">
                    <h1 className="uppercase font-extrabold text-[56.5px] leading-[98px] flex items-center">
                        NEWS
                    </h1>
                </div>
                <div className="flex flex-col justify-end items-start pl-[34px] h-[98px] flex-none order-1">
                    <div className="h-[22px] w-[897px] flex items-center mb-1">
                        <span className="font-black text-[16px] leading-[22px]">
                            Featured Filters:
                        </span>
                    </div>
                    <div className="flex flex-row items-start w-[897px] h-[50px]">
                        <div className="flex flex-col justify-center h-[50px] pb-1 pr-[15px]">
                            <div className="flex items-center h-[46px]">
                                <span className="font-extrabold text-[16.5px] leading-[46px] text-[#3624E9] underline cursor-pointer">
                                    AllStories
                                </span>
                            </div>
                        </div>
                        {["News&Announcements", "Culture&Trends", "MusArtists&Creatorsic", "BehindTheBusiness"].map((filter) => (
                            <div key={filter} className="flex flex-col justify-center h-[50px] pb-1 px-5">
                                <div className="flex items-center h-[46px]">
                                    <span className="font-extrabold text-[16.8px] leading-[46px] hover:text-[#3624E9] cursor-pointer transition-colors">
                                        {filter}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO SPOTLIGHT */}
            <section className="relative w-full h-[478px] bg-black overflow-hidden flex justify-center items-center">

                <div className="relative z-10 flex flex-row items-center gap-[100px] w-full max-w-[1200px] px-4">
                    <div className="flex flex-col items-start gap-[7px] w-[470px]">
                        <span className="font-black text-[14px] leading-5 uppercase text-white tracking-wide">
                            Artists & Creators
                        </span>
                        <h3 className="font-medium text-[32.9px] leading-[42px] text-white cursor-pointer hover:underline decoration-2 underline-offset-4">
                            Ed Sheeran’s ‘Play’ Hits the Pitch as Spotify and FC Barcelona Launch Latest El Clásico Jersey Takeover
                        </h3>
                    </div>
                    <div className="w-[593px] h-[300px] relative shadow-lg">
                        <Image
                            src={edSheeran}
                            alt="Ed Sheeran FC Barcelona"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-0 w-full">
                    <div
                        className="h-[18px] bg-repeat-x bg-size-[541px_18px]"
                        style={{ backgroundImage: `url(${spotlight.src})` }}
                    />
                </div>
            </section>

            {/* GRID DE NOTÍCIAS */}
            <section className="w-full px-10 py-16 flex justify-center text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[34px] gap-y-16 max-w-[1350px]">
                    {items.map((item) => (
                        <article
                            key={item.link}
                            className="group flex flex-col w-full max-w-[427px] cursor-pointer"
                        >
                            <div className="h-[180px] w-full relative overflow-hidden mb-[12.5px]">
                                <Image
                                    src={item?.image ?? spotifyLogo}
                                    alt={item.title}
                                    fill
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="flex flex-col items-start">
                                <span className="font-black text-[14px] leading-[17px] uppercase mb-3">
                                    {item.categories[0]}
                                </span>
                                <h3 className="font-medium text-[33.3px] leading-[41px] group-hover:underline decoration-2 underline-offset-4 decoration-black">
                                    {item.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

        {activeSection === "news" && (
            <div id="modal" className="absolute top-20 left-0 w-full h-[calc(100vh-5rem)] overflow-y-auto bg-white z-50">
                <News />
            </div>
        )}
        {activeSection === "company" && (
            <div id="modal" className="absolute top-20 left-0 w-full h-[calc(100vh-5rem)] overflow-y-auto bg-white z-50">
                <Company />
            </div>
        )}

        {!activeSection && (<Footer />)}

        </main>
    );
}