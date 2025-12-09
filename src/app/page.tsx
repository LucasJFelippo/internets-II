import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { headerLogo, aboutSpotify, ceoImage, lifeAtSpotify, sustainabilityReport, timeToPlayFair, spotifyLoudClear,
  spotify, artists, creators, advertisers, lifeAt, design, engineering, vendors, songwriters, inventors, help,
  instagram,
  X,
  facebook,
 } from "@/public/images";

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
            <li className="flex gap-1">
                <a href="https://www.spotify.com/br/about-us/contact/" className="font-bold" target="_blank" rel="noopener noreferrer">News</a>
                <ChevronDown />
            </li>
            <li className="flex gap-1">
                <a href="https://www.spotify.com/br/about-us/press/" className="font-bold" target="_blank" rel="noopener noreferrer">Company</a>
                <ChevronDown />
            </li>
        </ul>  
        </div>
        <div className="flex items-end border-b-2 border-solid w-122 pb-2">
          <input type="text" id="search" placeholder="Search..." className="w-full outline-0 text-2xl font-bold placeholder:text-white"/>
          <Search />
        </div>

        {/* <button id="theme-toggle" className="theme-toggle-button">Mudar Tema</button>     */}
      </header>
      <section className="flex border-b-2 border-solid border-black">
        <div className="w-[66.67%] border-r-2 border-solid border-black px-20 py-10">
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
        <div className="w-[33.3%]">
          <div className="group border-b-2 border-solid border-black p-12 h-140 hover:bg-[#2D46B9]">
              <Image src={ceoImage} alt="CEO Image" className="w-full object-cover"/>
              <h3 className="uppercase text-[#1ED760] font-bold my-3 group-hover:text-white">a message from our ceo, daniel ek</h3>
              <p className="text-black text-justify cursor-pointer group-hover:text-white">Spotify Founder and CEO Daniel Ek Discusses the Economics of Music Streaming</p>
          </div>
          <div className="group flex flex-col items-center h-140 px-12 pt-24 relative hover:bg-[#2D46B9]">
              <h2 className="text-black font-bold text-6xl absolute top-12.5 group-hover:text-white">Life at Spotify</h2>
              <Image src={lifeAtSpotify} alt="Life at Spotify" className="w-full object-cover"/>
              <button className="bg-[#1ED760] text-black px-8 py-3 mt-8 rounded-full font-bold uppercase cursor-pointer hover:bg-white hover:border">learn more</button>
          </div>
        </div>
      </section>
      <section className="flex border-b-2 border-black">
        <div className="w-[66.67%] p-24 bg-[#c3f0c8] border-r-2 border-black">
          <p className="text-black font-bold text-3xl leading-12">
            Our mission is to unlock the potential of human creativity — by giving a million creative artists the opportunity 
            to live off their art and billions of fans the opportunity to enjoy and be inspired by it.
          </p>
        </div>
        <div className="w-[33.33%] bg-black flex flex-col justify-center items-center px-18">
          <h2 className="text-white text-6xl font-bold leading-18">By the Numbers</h2>
          <button className="bg-black text-[#1ED760] border border-[#1ED760] rounded-full px-7 py-3 text-[14px] font-bold mt-10 cursor-pointer uppercase hover:bg-[#1ED760] hover:text-black">spotify inventors</button>
        </div>
      </section>
      <section className="flex">
        <div className="group w-[34%] p-14 hover:bg-[#2D46B9]">
          <Image src={sustainabilityReport} alt="Sustainability Report" className="w-full object-cover"/>
          <h4 className="text-black text-3xl font-bold my-6 cursor-pointer group-hover:text-white">Sustainability Report</h4>
          <p className="text-black group-hover:text-white">Lowering emissions isn’t something we do on the side. It’s an integrated part of everyday business. Learn how we’re taking action.</p>
        </div>
        <div className="group w-[34%] p-14 border-x-2 border-solid border-black hover:bg-[#2D46B9]">
          <Image src={timeToPlayFair} alt="Time to Play Fair" className="w-full object-cover"/>
          <h4 className="text-black text-3xl font-bold my-6 cursor-pointer group-hover:text-white">Time to Play Fair</h4>
          <p className="text-black group-hover:text-white">When competition is fair, both consumers and companies win. Learn about our efforts to even the playing field for all developers.</p>
        </div>
        <div className="group w-[34%] p-14 hover:bg-[#2D46B9]">
          <Image src={spotifyLoudClear} alt="Spotify Loud & Clear" className="w-full object-cover"/>
          <h4 className="text-black text-3xl font-bold my-6 cursor-pointer group-hover:text-white">Spotify Loud & Clear</h4>
          <p className="text-black group-hover:text-white">Artists deserve clarity about the economics of music streaming. This site sheds light on the global streaming economy and royalty system.</p>
        </div>
      </section>
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
    </main>
  );
}
