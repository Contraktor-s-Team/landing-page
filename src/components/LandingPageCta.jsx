import { ArrowUpRight } from "lucide-react";
import React from "react";

function LandingPageCta({ hText, hTextSpan, img }) {
  const handleSignUp = () => {
    // You can customize this function based on your needs
    // For now, it will redirect to the signup page
    window.open("https://app.contraktor.com.ng/signup", "_blank");
  };

  return (
    <div className="relative lg:container mx-auto sm:px-20 z-1">
      <div
        className={`flex flex-col lg:flex-row lg:justify-between items-center gap-10 text-center lg:text-left lg:pl-20 lg:pr-11.25 rounded-3xl ${
          img ? "py-10" : "py-20"
        }`}
        style={{
          background: `linear-gradient(to top, #AFD8FF, #ECF6FF), url('/Bottom-CTA-Background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div
          className={`${
            img ? "max-w-[500px]" : "max-w-[689px] mx-auto w-full text-center"
          }`}
        >
          <h1 className="font-manrope font-semibold text-[32px] leading-[1.2]">
            {hText} <span className="text-pri-norm-3">{hTextSpan}</span> today
          </h1>
          {!img && (
            <p className="text-neu-norm-2 mt-5">
              Join a trusted network of artisans, get steady work, and grow your
              business.
            </p>
          )}
          <button
            onClick={handleSignUp}
            className={`bg-pri-norm-1 hover:bg-pri-dark-1 text-white px-4.25 py-3 rounded-full mx-auto ${
              img ? "lg:mx-0" : ""
            }  transition-colors duration-300 flex items-center gap-2.5 mt-7.5`}
          >
            Sign Up Now{" "}
            <span className="">
              <ArrowUpRight size={20} />
            </span>
          </button>
        </div>

        {img && (
          <div className="flex flex-col gap-4 lg:w-[380px]">
            <div className="flex gap-4">
              <div className="flex-2 h-[114px]">
                <img
                  src={img[0]}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl border-2 border-white"
                />
              </div>
              <div className="flex-1 h-[114px]">
                <img
                  src="/elect-man.png"
                  alt=""
                  className="w-full h-full object-cover rounded-2xl border-2 border-white"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 h-[114px]">
                <img
                  src={img[1]}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl border-2 border-white"
                />
              </div>
              <div className="flex-2 h-[114px]">
                <img
                  src={img[2]}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl border-2 border-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPageCta;
