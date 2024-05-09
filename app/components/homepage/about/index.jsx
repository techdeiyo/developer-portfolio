// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -left-8">
        <span className="bg-[#16f2b3] w-fit text-black font-bold rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#16f2b3]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 justify-center">
        <div className="order-1 lg:order-2">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-2 lg:order-1">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Sanjana Shamal"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-10 container">
        <div>
          <p className="text-gray-200 text-sm lg:text-lg">
            {'My expertise in web development, design, and content creation is backed by my extensive knowledge of programming languages and frameworks, including HTML, CSS, JavaScript, React,and Angular. My eye for aesthetics and ability to create visually appealing and functional websites make me a valuable asset to any team.'}
          </p>
          <p className="text-gray-200 text-sm lg:text-lg mt-2">
            {'In addition, as a YouTuber, I share my knowledge and expertise in science and technology. My passion for creativity and innovation shines through in my work, making me a top choice for clients who want to achieve their business objectives through expert web development and design. Contact me at x@sanjana.div to learn more.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;