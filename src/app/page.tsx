// "use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import News from "@/components/News";
import Company from "@/components/Company";
import { useGlobal } from "@/context/GlobalContext";
import { aboutSpotify, ceoImage, lifeAtSpotify, sustainabilityReport, timeToPlayFair, spotifyLoudClear } from "@/public/images";
import Link from "next/link";

export default function Home() {

  // const { activeSection } = useGlobal();

  return (
    <main className="bg-white h-full w-full">
      <Header />
      <div className="pt-20">
        {/* {!activeSection && ( */}
          <>
            <section className="flex border-b-2 border-solid border-black">
              <div className="w-[66.67%] border-r-2 border-solid border-black px-20 py-10">
                <Image src={aboutSpotify} alt="About Spotify" className="w-full object-cover" />
                <h1 className="text-black capitalize font-bold text-9xl my-6 mr-4">about spotify</h1>
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
                  <Image src={ceoImage} alt="CEO Image" className="w-full object-cover" />
                  <h3 className="uppercase text-[#1ED760] font-bold my-3 group-hover:text-white">a message from our ceo, daniel ek</h3>
                  <p className="text-black text-justify cursor-pointer group-hover:text-white">Spotify Founder and CEO Daniel Ek Discusses the Economics of Music Streaming</p>
                </div>
                <div className="group flex flex-col items-center h-140 px-12 pt-24 relative hover:bg-[#2D46B9]">
                  <h2 className="text-black font-bold text-6xl absolute top-12.5 group-hover:text-white">Life at Spotify</h2>
                  <Image src={lifeAtSpotify} alt="Life at Spotify" className="w-full object-cover" />
                  <Link href="/news" className="bg-[#1ED760] text-black px-8 py-3 mt-8 rounded-full font-bold uppercase cursor-pointer hover:bg-white hover:border">learn more</Link>
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
                <Image src={sustainabilityReport} alt="Sustainability Report" className="w-full object-cover" />
                <h4 className="text-black text-3xl font-bold my-6 cursor-pointer group-hover:text-white">Sustainability Report</h4>
                <p className="text-black group-hover:text-white">Lowering emissions isn’t something we do on the side. It’s an integrated part of everyday business. Learn how we’re taking action.</p>
              </div>
              <div className="group w-[34%] p-14 border-x-2 border-solid border-black hover:bg-[#2D46B9]">
                <Image src={timeToPlayFair} alt="Time to Play Fair" className="w-full object-cover" />
                <h4 className="text-black text-3xl font-bold my-6 cursor-pointer group-hover:text-white">Time to Play Fair</h4>
                <p className="text-black group-hover:text-white">When competition is fair, both consumers and companies win. Learn about our efforts to even the playing field for all developers.</p>
              </div>
              <div className="group w-[34%] p-14 hover:bg-[#2D46B9]">
                <Image src={spotifyLoudClear} alt="Spotify Loud & Clear" className="w-full object-cover" />
                <h4 className="text-black text-3xl font-bold my-6 cursor-pointer group-hover:text-white">Spotify Loud & Clear</h4>
                <p className="text-black group-hover:text-white">Artists deserve clarity about the economics of music streaming. This site sheds light on the global streaming economy and royalty system.</p>
              </div>
            </section>
          </>
        {/* )} */}
      </div>

      {/* {activeSection === "news" && (
        <div id="modal" className="absolute top-20 left-0 w-full h-[calc(100vh-5rem)] overflow-y-auto bg-white z-50">
          <News />
        </div>
      )}
      {activeSection === "company" && (
        <div id="modal" className="absolute top-20 left-0 w-full h-[calc(100vh-5rem)] overflow-y-auto bg-white z-50">
          <Company />
        </div>
      )}
      {!activeSection && <Footer />} */}
      <Footer />
    </main>
  );
}
