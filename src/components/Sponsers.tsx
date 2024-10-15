import React from "react";
import PopFadeInSection from "./PopFadeInSection";
import FadeInSection from "./FadeInSection";
import Image from "next/image";
const prevsponsers = [
  { name: "RedBull", image: "/sponsors/RB.jpg" },
  { name: "368", image: "/sponsors/368.png" },
  { name: "Edusphere", image: "/sponsors/edussphere.png" },
  { name: "GeeksforGeeks", image: "/sponsors/gfg.jpeg" },
  { name: "JDoodle", image: "/sponsors/jdoodle.png" },
  { name: "Give My Certificate", image: "/sponsors/gmc.png" },
  { name: "noescape", image: "/sponsors/noescape.jpg" },
  { name: "Postman", image: "/sponsors/postman.jpg" },
  { name: "Simply Gaming", image: "/sponsors/simplygameing.png" },
  { name: "Startup News", image: "/sponsors/startupnews.jpeg" },
  { name: "Unstop", image: "/sponsors/unstop.png" },
];

interface XtileProps {
  title: string;
  gradientColors?: string; // Optional, you can adjust this as needed
}

const Xtile: React.FC<XtileProps> = ({ title, gradientColors }) => {
  return (
    <h2 className="relative inline-flex h-full overflow-hidden rounded-xl p-[2px] mb-4 focus:outline-none focus:ring-2 focus:ring-[#df4173] focus:ring-offset-2 focus:ring-offset-[#df4173]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#880c1d_0%,#89898d_50%,#880c1d_100%)]" />
      <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-xl bg-[#09090e] px-6 py-3 text-5xl font-squid text-white backdrop-blur-3xl">
        {title}
      </span>
    </h2>
  );
};

const Sponsers = () => {
  return (
    <div>
      <div
        id="sponsors"
        className="flex bg-black flex-col justify-center items-center w-full "
      >
        <PopFadeInSection>
          <h1 className="md:text-8xl text-white w-full text-center text-4xl mb-20 font-squid">
            Our Sponsors
          </h1>
        </PopFadeInSection>

        <div>
          <div className="text-center px-1 mb-10">
            <FadeInSection>
              <div className="flex flex-col space-y-6 items-center">
                <Image
                  src="/sponsors/unstop.png"
                  alt="Unstop Logo"
                  width={500}
                  height={500}
                  quality={100}
                  className="rounded-lg"
                />
                <Xtile title="Powered By" />
              </div>
            </FadeInSection>

            <div className="mb-10 px-1">
              <FadeInSection>
                <div className="flex space-y-6 flex-col items-center">
                  <Image
                    src="/sponsors/Bassein-catholic-bank.png" // Update this to the actual logo path
                    alt="Bassein Catholic Bank Logo"
                    width={600} // Adjust width for a larger logo
                    height={500} // Adjust height for a larger logo
                    quality={100}
                    className="rounded-lg h-40 object-contain" // Maintain consistent height for alignment
                  />
                  <div className="flex items-center justify-center w-full h-24">
                    <Xtile title="Banking Partner" />
                  </div>
                </div>
              </FadeInSection>
            </div>

            <div className="mb-10 px-1">
              <FadeInSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/sponsors/flatlogic.png"
                      alt="Flatlogic Logo"
                      width={800}
                      height={800}
                      quality={100}
                      className="rounded-lg h-52 object-contain" // Fixed height for uniformity
                    />
                    <div className="flex items-center justify-center w-full h-24">
                      <Xtile title="AI Partner" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/sponsors/ettara.png"
                      alt="Ettara Logo"
                      width={700}
                      height={700}
                      quality={100}
                      className="rounded-lg h-52 object-contain filter invert" // Fixed height for uniformity
                    />
                    <div className="flex items-center justify-center w-full h-24">
                      <Xtile title="Coffee Partner" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/sponsors/red-bull.png"
                      alt="Red Bull Logo"
                      width={800}
                      height={800}
                      quality={100}
                      className="rounded-lg h-52 object-contain" // Fixed height for uniformity
                    />
                    <div className="flex items-center justify-center w-full h-24">
                      <Xtile title="Energy Partner" />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>

          <div className="mb-10 px-1">
            <FadeInSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Image
                    src="/sponsors/startup-news.png"
                    alt="Startup News Logo"
                    width={600}
                    height={600}
                    quality={100}
                    className="rounded-lg h-48 object-contain"
                  />
                  <div className="flex items-center pt-3 justify-center w-full h-24">
                    <Xtile title="Media Partner" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/sponsors/xyz.png"
                    alt="Domain Partner Logo"
                    width={300}
                    height={300}
                    quality={100}
                    className="rounded-lg h-48 object-contain"
                  />
                  <div className="flex items-center pt-3 justify-center w-full h-24">
                    <Xtile title="Domain Partner" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/sponsors/quilbot.png"
                    alt="QuillBot Logo"
                    width={300}
                    height={300}
                    quality={100}
                    className="rounded-lg h-48 object-contain"
                  />
                  <div className="flex items-center pt-3 justify-center w-full h-24">
                    <Xtile title="Content Partner" />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
      <div className="bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <PopFadeInSection>
            <h2 className="md:text-8xl  text-5xl font-squid text-gray-200 text-center mb-8">
              Previous Sponsors
            </h2>
          </PopFadeInSection>
          <div className="md:grid flex flex-col grid-cols-2 md:gap-8 md:grid-cols-4 ">
            {prevsponsers.map((sponsor) => (
              <div
                key={sponsor.name}
                className="col-span-1 flex justify-center items-center bg-transparent p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <FadeInSection>
                  <img
                    className="h-full max-w-full object-contain md:w-full w-[90vw]"
                    src={sponsor.image}
                    alt={sponsor.name}
                  />
                </FadeInSection>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
