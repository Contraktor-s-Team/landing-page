import { Search } from "lucide-react";
import React from "react";
import HeroLayoutPic from "/hero-layout-pic.png";

function HeroSection({bg, hClass, hText, placeholderservice}) {
  return (
    <div
      className="pt-20 font-inter font-medium bg-no-repeat bg-bottom"
      style={{
        background:bg,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="lg:container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-12.5 px-6 sm:px-8">
        <div className="lg:w-1/2 max-w-[595px] space-y-6">
          <h1 className={`font-manrope font-bold text-[38px] sm:text-[56px] text-center lg:text-start leading-[1] capitalize ${hClass}`}>
          {hText}
          </h1>
          <p className="text-neu-dark-1 text-center lg:text-start">
            Post a task and get quotes from verified professionals near you.
          </p>

          <div className="items-center rounded-full py-1.75 bg-white border border-neu-light-2 hidden sm:flex">
            <div className="flex-1 px-5 border-r border-[#EBEBEB]">
              <input
                type="text"
                placeholder={placeholderservice}
                className="w-full text-sm outline-none py-1.5 placeholder:text-[#B6B9BE]"
              />
            </div>
            <div className="flex items-center gap-3 pl-3 pr-2">
              <input
                type="text"
                placeholder="Location"
                className="text-sm outline-none py-1.5 placeholder:text-[#B6B9BE]"
              />
              <button className="bg-pri-norm-1 hover:bg-pri-dark-1 text-white p-3.5 rounded-full transition-colors duration-300">
                <Search />
              </button>
            </div>
          </div>

          <div className="rounded-full py-1.75 bg-white border border-neu-light-2 sm:hidden">
            <div className="flex items-center gap-3 pl-3 pr-2">
              <input
                type="text"
                placeholder="Location"
                className="text-sm outline-none py-1.5 w-full placeholder:text-[#B6B9BE]"
              />
              <button className="bg-pri-norm-1 hover:bg-pri-dark-1 text-white p-3.5 rounded-full transition-colors duration-300">
                <Search />
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <img src={HeroLayoutPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
