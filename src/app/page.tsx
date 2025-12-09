import { headerLogo, aboutSpotify, ceoImage, lifeAtSpotify } from "@/public/imagens";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white h-full w-full">
      <header className="bg-black h-20 flex justify-between px-12 items-center">    
        <div className="flex gap-20">
          <div className="flex gap-4 items-center">
            <Image
              src={headerLogo}
              alt="Spotify Logo"
              width={46}
              height={46}
            />
            <h2 className="text-[22px] font-extrabold">For the Record</h2>
          </div>
          <ul className="flex items-center gap-8">
            <li className="flex">
                <ChevronDown />
                <a href="https://www.spotify.com/br/about-us/contact/" target="_blank" rel="noopener noreferrer">News</a>
            </li>
            <li className="flex">
                <ChevronDown />
                <a href="https://www.spotify.com/br/about-us/press/" target="_blank" rel="noopener noreferrer">Company</a>
            </li>
        </ul>  
        </div>
        <div className="flex items-end border-b-2 border-solid w-90 pb-2">
          <input type="text" id="search" placeholder="Search..." className="w-full outline-0 text-2xl font-bold placeholder:text-white"/>
          <Search />
        </div>

        {/* <button id="theme-toggle" className="theme-toggle-button">Mudar Tema</button>     */}
      </header>
      <section className="flex border-b-2 border-solid border-black">
        <div className="w-[65%] border-r-2 border-solid border-black px-20 py-10">
          <Image src={aboutSpotify} alt="About Spotify" className="w-full object-cover"/>
          <h1 className="text-black capitalize font-bold text-9xl my-6">about spotify</h1>
          <p className="text-black">
            Since its launch in 2008, Spotify has revolutionised music listening. Our move into podcasting brought
            innovation and a new generation of listeners to the medium. In 2022, we took the next leap, entering the
            fast-growing audiobook market—continuing to shape the future of audio.
          </p>
          <p className="text-black">
            Today, more listeners than ever can discover, manage and enjoy over 100 million tracks, nearly 7 million
            podcast titles, and 350,000 audiobooks a la carte on Spotify. We are the world’s most popular audio
            streaming
            subscription service with more than 696 million users, including 276 million subscribers in more than
            180 markets.
          </p>
        </div>
        <div className="w-[35%]">
          <div className="border-b-2 border-solid border-black p-12 h-140 ">
              <Image src={ceoImage} alt="CEO Image" className="w-full object-cover"/>
              <h3 className="uppercase text-[#1ED760] font-bold my-3">a message from our ceo, daniel ek</h3>
              <p className="text-black text-justify">Spotify Founder and CEO Daniel Ek Discusses the Economics of Music Streaming</p>
          </div>
          <div className="group flex flex-col items-center h-140 px-12 pt-24 relative hover:bg-[#2D46B9]">
              <h2 className="text-black font-bold text-6xl absolute top-12.5 group-hover:text-white">Life at Spotify</h2>
              <Image src={lifeAtSpotify} alt="Life at Spotify" className="w-full object-cover"/>
              <button className="bg-[#1ED760] text-black px-8 py-3 mt-8 rounded-full font-bold uppercase hover:bg-white">learn more</button>
          </div>
        </div>
      </section>
      <>teste</>
    </main>
  );
}
