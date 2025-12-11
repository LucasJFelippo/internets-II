import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    spotifyLoudClear,
    timeToPlayFair,
    sustainabilityReport,
    aboutSpotify,
    spotlight,
    edSheeran,
    lifeAtSpotify
} from "@/public/images";
import Image from "next/image";

// --- CONFIGURAÇÃO ISR ---
export const revalidate = 60;

// --- DADOS MOCKADOS ---
async function getNewsData() {
    await new Promise((resolve) => setTimeout(resolve, 100));

    const images = [
        lifeAtSpotify,
        spotifyLoudClear,
        timeToPlayFair,
        sustainabilityReport,
        aboutSpotify,
        edSheeran
    ];

    return [
        {
            id: 1,
            category: "News & Announcements",
            title: "Celebrate Taylor Swift’s Record-Breaking Year and New Docuseries with… Exclusive Playlist Cover",
            image: images[0],
        },
        {
            id: 2,
            category: "News & Announcements",
            title: "Spotify and The Game Awards Debut Gaming- Inspired Spotify Singles… From Labrinth,",
            image: images[1],
        },
        {
            id: 3,
            category: "News & Announcements",
            title: "You’re in Control: Spotify Lets You Steer the Algorithm",
            image: images[2],
        },
        {
            id: 4,
            category: "News & Announcements",
            title: "Spotify Expands Music Videos in Beta to Premium Users in the US and… Canada",
            image: images[3],
        },
        {
            id: 5,
            category: "Artists & Creators",
            title: "Celebrating Spotify’s GLOW, RADAR, and EQUAL Artists of 2025",
            image: images[4],
        },
        {
            id: 6,
            category: "News & Announcements",
            title: "Surprised by Your 2025 Wrapped? Here’s a Look at How the Data Comes t… Life",
            image: images[5],
        },
        {
            id: 7,
            category: "News & Announcements",
            title: "How Our 2025 Wrapped Campaign Turns Your Year in Listening Into a Global… Celebration",
            image: images[0],
        },
        {
            id: 8,
            category: "News & Announcements",
            title: "The Year in Podcasting: From Award Shows Uncensored to the Louvr… Heist, Here’s What Shaped",
            image: images[1],
        },
        {
            id: 9,
            category: "News & Announcements",
            title: "Start Your Wrapped Party",
            image: images[2],
        }
    ];
}

export default async function NewsPage() {
    const news = await getNewsData();

    return (
        <main className="bg-white min-h-screen w-full font-sans">
            <Header />

            {/* ESPAÇADOR DO HEADER FIXO */}
            <div className="h-20"></div>

            {/* BARRA DE TÍTULO E FILTROS */}
            <section className="w-full h-[133px] flex flex-row items-start px-[40px] pt-[24px] pb-[10px] bg-white border-b-2 border-black text-black">
                <div className="flex flex-col items-start w-[174px] h-[98px] flex-none order-0">
                    <h1 className="uppercase font-extrabold text-[56.5px] leading-[98px] flex items-center">
                        NEWS
                    </h1>
                </div>
                <div className="flex flex-col justify-end items-start pl-[34px] h-[98px] flex-none order-1">
                    <div className="h-[22px] w-[897px] flex items-center mb-[4px]">
                        <span className="font-black text-[16px] leading-[22px]">
                            Featured Filters:
                        </span>
                    </div>
                    <div className="flex flex-row items-start w-[897px] h-[50px]">
                        <div className="flex flex-col justify-center h-[50px] pb-[4px] pr-[15px]">
                            <div className="flex items-center h-[46px]">
                                <span className="font-extrabold text-[16.5px] leading-[46px] text-[#3624E9] underline cursor-pointer">
                                    AllStories
                                </span>
                            </div>
                        </div>
                        {["News&Announcements", "Culture&Trends", "MusArtists&Creatorsic", "BehindTheBusiness"].map((filter) => (
                            <div key={filter} className="flex flex-col justify-center h-[50px] pb-[4px] px-[20px]">
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
                        <span className="font-black text-[14px] leading-[20px] uppercase text-white tracking-wide">
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

                <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 z-0">
                    <Image
                        src={spotlight}
                        alt="Spotlight Graphic"
                        width={541}
                        height={18}
                        className="w-[541px] h-[18px]"
                    />
                </div>
            </section>

            {/* GRID DE NOTÍCIAS */}
            <section className="w-full px-[40px] py-16 flex justify-center text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[34px] gap-y-[64px] max-w-[1350px]">
                    {news.map((item) => (
                        <article
                            key={item.id}
                            className="group flex flex-col w-full max-w-[427px] cursor-pointer"
                        >
                            <div className="h-[180px] w-full relative overflow-hidden mb-[12.5px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="flex flex-col items-start">
                                <span className="font-black text-[14px] leading-[17px] uppercase mb-[12px]">
                                    {item.category}
                                </span>
                                <h3 className="font-medium text-[33.3px] leading-[41px] group-hover:underline decoration-2 underline-offset-4 decoration-black">
                                    {item.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <div className="text-white">
                <Footer />
            </div>
        </main>
    );
}