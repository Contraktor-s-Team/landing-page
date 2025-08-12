import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import {
  // artisans,
  hireArtisansSteps,
  ReasonItems,
  reviewsItems,
  servicesItems,
} from "../utils/sectionsData";
import { ArrowUpRight, Plus, X, MapPin } from "lucide-react";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LandingPageCta from "../components/LandingPageCta";

const footerLinks = {
  forCustomers: {
    title: "For Customers",
    links: [
      { name: "Browse Artisans", href: "#" },
      { name: "Post a Task", href: "#" },
      { name: "How It Works", href: "#" },
      { name: "Pricing & Payment", href: "#" },
      { name: "Customer Support", href: "#" },
      { name: "Download App", href: "#" },
    ],
  },
  forArtisans: {
    title: "For Artisans",
    links: [
      { name: "Find Jobs", href: "#" },
      { name: "Create a Profile", href: "#" },
      { name: "How It Works", href: "#" },
      { name: "Verification Process", href: "#" },
      { name: "Payment Guide", href: "#" },
      { name: "Join as an Artisan", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog & Resources", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
};

const socialLinks = [
  { name: "Facebook", icon: <FaFacebook size={24} />, href: "#" },
  { name: "LinkedIn", icon: <FaLinkedin size={24} />, href: "#" },
  { name: "Twitter", icon: <FaXTwitter size={24} />, href: "#" },
  { name: "YouTube", icon: <BsYoutube size={24} />, href: "#" },
  { name: "Instagram", icon: <FaInstagram size={24} />, href: "#" },
];

function CustomerLandingPage() {
  const [expandedItems, setExpandedItems] = useState({});
  const [showFAQHeader, setShowFAQHeader] = useState(true);

  const currentYear = new Date().getFullYear();

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqItems = [
    {
      question: "How do I know if an artisan is verified?",
      answer:
        "Verified artisans have completed our verification process, which includes identity verification, skill assessment, and background checks. Look for the verified badge on their profile.",
    },
    {
      question: "Is payment made before or after the job is completed?",
      answer:
        "Payment terms vary by project and artisan. Some may require a deposit upfront, while others work on completion-based payment. This will be clearly outlined in the quote and can be discussed during the hiring process.",
    },
    {
      question: "Can I schedule a job for a later date?",
      answer:
        "Yes, you can schedule jobs for future dates. When posting your task, simply specify your preferred timeline, and artisans will respond based on their availability for those dates.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "We have a satisfaction guarantee policy. If you're not happy with the completed work, you can report the issue through our platform, and we'll work to resolve it, which may include refunds or having the work redone.",
    },
    {
      question: "Do artisans bring their own tools and materials?",
      answer:
        "This depends on the specific job and artisan. Most artisans bring their own tools, but materials are often discussed separately. When posting your task, specify what you'll provide versus what you expect the artisan to bring.",
    },
  ];

  return (
    <div className="font-inter font-medium">
      <Header headerClass='border-neu-light-2' logo="/logo.png" />
      <HeroSection
        hClass="max-w-[508px]"
        hText={'find trusted artisans near you'}
                placeholderservice="What services are you looking for?"
        bg={`linear-gradient(to bottom, white 0%, transparent 100%),
      linear-gradient(to right, 
        var(--color-pri-light-1) 0%, 
        var(--color-warning-light-1) 50%, 
        var(--color-success-light-1) 100%
      )`}
      />

      {/* Hire artisans steps */}
      <div className="lg:container mx-auto px-6 sm:px-8 my-15">
        <SectionHeader
          subText="how it works"
          text="Hire an artisan in 3 easy steps"
        />
        <div className="flex flex-wrap items-center gap-y-15.75 gap-x-8.75 justify-center mt-17">
          {hireArtisansSteps.map((step, i) => (
            <div
              key={i}
              className="w-full max-w-[354px] px-4.25 py-3 border border-neu-light-2 rounded-lg relative"
            >
              <div className="font-manrope font-semibold text-2xl text-white w-14 h-14 rounded-full bg-pri-norm-1 flex items-center justify-center absolute -top-7 left-1/2 -translate-x-1/2">
                {i + 1}
              </div>
              <div className="text-center pt-12.5">
                <h1 className="font-manrope font-semibold text-[18px] capitalize">
                  {step.title}
                </h1>
                <p className="text-neu-norm-3 text-sm mt-2 mb-7.75">
                  {step.description}
                </p>
                <img src={step.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Contraktor */}
      <div className="lg:container mx-auto px-6 sm:px-8 my-15">
        <SectionHeader
          subText="features"
          text="Why Choose"
          styledText="Contraktor"
        />
        <div className="grid gap-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-[minmax(600px,2fr)_minmax(500px,1fr)] gap-8 mt-10">
            {ReasonItems.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="flex lg:flex-row flex-col justify-between gap-8 lg:gap-1 p-5.5 border border-neu-light-2 rounded-lg"
              >
                <div
                  className={`w-full ${
                    (i + 1) % 2 === 0 ? "max-w-[218px]" : "max-w-[250px]"
                  }`}
                >
                  <h1 className="font-manrope font-semibold text-[18px] capitalize">
                    {item.title}
                  </h1>
                  <p className="text-neu-norm-3 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-[minmax(500px,1fr)_minmax(600px,2fr)] gap-8">
            {ReasonItems.slice(2, 4).map((item, i) => (
              <div
                key={i}
                className="flex lg:flex-row flex-col justify-between gap-8 lg:gap-1 p-5.5 border border-neu-light-2 rounded-lg"
              >
                <div
                  className={`w-full ${
                    (i + 1) % 2 === 0 ? "max-w-[280px] " : "max-w-[218px]"
                  }`}
                >
                  <h1 className="font-manrope font-semibold text-[18px] capitalize">
                    {item.title}
                  </h1>
                  <p className="text-neu-norm-3 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skilled professionals */}
      <div className="bg-bg-primary mt-15 py-15">
        <div className="lg:container mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-11.25">
            <div className="w-full max-w-[480px] text-center lg:text-start">
              <h2 className="font-manrope font-semibold text-[26px] sm:text-[34px] leading-[1.2] text-white capitalize">
                skilled professionals across 300+ services
              </h2>
            </div>
            <button className="cursor-pointer bg-pri-norm-1 hover:bg-pri-dark-1 text-white px-6 py-3 rounded-full transition-colors duration-300">
              Explore all services
            </button>
          </div>
        </div>
        <div className="space-y-4 mt-18">
          {/* Row 1 */}
          <div className="overflow-hidden whitespace-nowrap">
            <div className="flex gap-4 animate-marquee">
              {[...servicesItems, ...servicesItems].map((service, index) => (
                <div
                  key={`row1-${index}`}
                  className="text-sm px-4.5 py-3.5 border-[1.5px] border-pri-light-2 rounded-full text-pri-light-2"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden whitespace-nowrap">
            <div className="flex gap-4 animate-marquee-reverse">
              {[...servicesItems, ...servicesItems].map((service, index) => (
                <div
                  key={`row2-${index}`}
                  className="text-sm px-4.5 py-3.5 border-[1.5px] border-pri-light-2 rounded-full text-pri-light-2"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top-rated artisans */}
      {/* <div className="bg-[#FAFAFA]">
      <div className="lg:container mx-auto px-6 sm:px-8 py-15">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:justify-between">
          <h1 className="font-manrope font-semibold text-[26px] sm:text-[30px] text-pri-norm-3 capitalize">
            top-rated <span className="text-pri-dark-3">artisans</span>
          </h1>
          <button className="cursor-pointer bg-pri-norm-1 hover:bg-pri-dark-1 text-white px-6 py-3 rounded-full transition-colors duration-300">
            View all artisans
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="flex flex-col gap-3.5 bg-white rounded-xl p-4 border border-neu-light-2"
            >
              <Link to="" className="relative group cursor-pointer">
                <img
                  src="/avatar1.jpg"
                  alt={artisan.name}
                  className="w-full h-48 object-cover rounded-xl"
                />

                <div className="absolute bottom-2 right-2 bg-white rounded-full px-2 py-1 shadow-sm flex items-center gap-2">
                  <GoStarFill size={12} className="text-warning-norm-1" />
                  <span className="text-xs font-medium text-gray-900">
                    {artisan.rating}
                  </span>
                </div>

                <div className="absolute top-0 left-0 w-full h-full rounded-xl group-hover:bg-pri-norm-1/50"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0">
                  <h3 className="capitalize text-white text-2xl">hire</h3>
                </div>
              </Link>

              <div className="flex flex-col justify-between h-full">
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="font-semibold">{artisan.name}</h3>
                      <p className="text-sm">{artisan.specialty}</p>
                    </div>
                  </div>

                  <div className="flex gap-2.25 flex-wrap items-center">
                    {artisan.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="inline-flex text-xs text-neu-dark-1 bg-neu-light-1 px-3 py-1.5 rounded-full whitespace-nowrap"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6.5 space-y-6.5">
                  <div className="flex gap-2.5 items-center">
                    <MapPin size={16} className="text-pri-norm-1" />
                    <p className="text-sm text-pri-dark-2">
                      {artisan.location}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <div
                      className={`flex items-center gap-2 ${
                        artisan.availability
                          ? "bg-success-light-1"
                          : "bg-warning-light-1"
                      } px-4.25 py-2 w-fit rounded-full`}
                    >
                      <div
                        className={`w-3.5 h-3.5 ${
                          artisan.availability
                            ? "bg-success-norm-1"
                            : "bg-warning-norm-1"
                        } rounded-full`}
                      ></div>
                      <span
                        className={`text-sm font-medium ${
                          artisan.availability
                            ? "text-success-norm-3"
                            : "text-warning-norm-3"
                        }`}
                      >
                        {artisan.availability
                          ? "Available Now"
                          : "Not Available"}
                      </span>
                    </div>

                    <button className="cursor-pointer bg-pri-norm-1 hover:bg-pri-dark-1 text-white px-6 py-3 rounded-full transition-colors duration-300">
                      Hire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div> */}

      {/* Find customers */}
      <div className="lg:container mx-auto sm:px-8 my-15">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-6 lg:justify-between text-center lg:text-start bg-success-light-1 py-12.5 sm:p-7.5 sm:rounded-3xl">
          <div className="max-w-[552px] p-4.25 sm:p-0">
            <h1 className="font-manrope font-semibold text-[28px] sm:text-[40px] leading-[1.2] capitalize lg:max-w-[387px]">
              find customers & start earning today
            </h1>
            <p className="text-neu-norm-3 my-9.25">
              Join thousands of pros finding steady work. Create a profile,
              showcase your skills, and get job requests from real customers
              nearby.
            </p>
            <button className="bg-success-dark-1 hover:bg-success-norm-1 text-white px-4.25 py-3 rounded-full mx-auto lg:mx-0 transition-colors duration-300 flex items-center gap-2.5">
              Sign Up as an Artisan{" "}
              <span className="">
                <ArrowUpRight size={20} />
              </span>
            </button>
          </div>

          <div className="px-6 sm:px-0 w-full sm:w-[462px] h-full">
            <img src="/find-customers-img.png" alt="" className="" />
            {/* <div className="w-full mx-auto lg:mx-0 lg:ml-auto sm:w-[462px] h-[304px] sm:h-[404px] bg-white rounded-2xl"></div> */}
          </div>
        </div>
      </div>

      {/* Get things done on the go */}
      <div className="lg:container mx-auto sm:px-8 my-15">
        <div className="bg-pri-dark-3 py-12.5 sm:p-7.5 flex flex-col-reverse lg:flex-row items-center gap-18 lg:gap-6 sm:rounded-3xl">
          <div className="px-7.75 sm:px-0">
            <img src="/getdonepic.png" alt="" className="" />
          </div>
          <div className="max-w-[552px] mx-auto px-4 sm:px-0 text-center lg:text-start">
            <h1 className="font-manrope font-semibold text-[28px] sm:text-[40px] leading-[1.2] text-white capitalize">
              get things done on the go
            </h1>
            <p className="text-neu-light-3 my-7.75">
              Download the mobile app to post jobs, connect with artisans, and
              manage everything from your phone — anytime, anywhere.
            </p>
            {/* App store buttons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <Link
                to="#"
                className="flex items-center gap-3 bg-pri-dark-1 px-4 py-3 hover:bg-pri-dark-2 rounded-full transition-colors"
              >
                <div className="w-8 h-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-full h-full"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-300">GET IT ON</span>
                  <span className="text-sm font-medium text-white">
                    Google Play
                  </span>
                </div>
              </Link>

              <Link
                to="#"
                className="flex items-center gap-3 bg-pri-dark-1 rounded-full px-4 py-3 hover:bg-pri-dark-2 transition-colors"
              >
                <div className="w-8 h-8">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-full h-full"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-300">Download on the</span>
                  <span className="text-sm font-medium text-white">
                    App Store
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="my-15">
        <SectionHeader
          subText="customer reviews"
          text="What Our Customers Are Saying"
        />

        <div className="mt-14">
          Row 1
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee">
              {[...reviewsItems, ...reviewsItems].map((review, index) => (
                <div
                  key={`row1-${index}`}
                  className="border-[1.5px] border-neu-light-2 p-5 sm:p-7 rounded-[10px] w-[260px] sm:w-[409px] flex-shrink-0"
                >
                  <div className="h-full flex flex-col">
                    <div className="flex-grow">
                      <p className="whitespace-normal text-sm sm:text-base text-justify">
                        {`"${review.text}"`}
                      </p>
                      <div className="text-warning-norm-1 mt-3.5 flex">
                        {[...Array(5)].map((_, i) => (
                          <GoStarFill
                            key={i}
                            size={18}
                            className="sm:size-[20px]"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-end justify-between mt-4 sm:mt-0">
                      <div className="flex items-center gap-3">
                        <img
                          src="/avatar1.jpg"
                          alt=""
                          className="h-9 w-9 sm:h-10.5 sm:w-10.5 rounded-full"
                        />
                        <div className="text-neu-norm-3 text-xs sm:text-sm">
                          <p>{review.name}</p>
                          <p>{review.date}</p>
                        </div>
                      </div>
                      <img
                        src="/QuotesIcon.png"
                        alt=""
                        className="sm:-mb-4.5 w-10 sm:w-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          Row 2
          <div className="overflow-hidden mt-4">
            <div className="flex gap-4 animate-marquee-reverse">
              {[...reviewsItems, ...reviewsItems].map((review, index) => (
                <div
                  key={`row2-${index}`}
                  className="border-[1.5px] border-neu-light-2 p-5 sm:p-7 rounded-[10px] w-[260px] sm:w-[409px] flex-shrink-0"
                >
                  <div className="h-full flex flex-col">
                    <div className="flex-grow">
                      <p className="whitespace-normal text-sm sm:text-base text-justify">
                        {`"${review.text}"`}
                      </p>
                      <div className="text-warning-norm-1 mt-3.5 flex">
                        {[...Array(5)].map((_, i) => (
                          <GoStarFill
                            key={i}
                            size={18}
                            className="sm:size-[20px]"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-end justify-between mt-4 sm:mt-0">
                      <div className="flex items-center gap-3">
                        <img
                          src="/avatar1.jpg"
                          alt=""
                          className="h-9 w-9 sm:h-10.5 sm:w-10.5 rounded-full"
                        />
                        <div className="text-neu-norm-3 text-xs sm:text-sm">
                          <p>{review.name}</p>
                          <p>{review.date}</p>
                        </div>
                      </div>
                      <img
                        src="/QuotesIcon.png"
                        alt=""
                        className="sm:-mb-4.5 w-10 sm:w-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="lg:container mx-auto px-6 sm:px-8 my-20">
        <h1 className="font-manrope font-semibold text-[26px] sm:text-[36px] text-center capitalize mb-16">
          frequently asked questions
        </h1>
        {/* FAQ Header Section */}
        {showFAQHeader && (
          <div className="bg-pri-dark-2 text-white px-11.25 py-9.25 rounded-[20px] mb-6 relative">
            <button
              onClick={() => setShowFAQHeader(false)}
              className="absolute top-4 right-4 p-1 hover:bg-pri-dark-1 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <h1 className="font-manrope font-semibold text-[18px] mb-4">
              How do I hire an artisan on the platform?
            </h1>

            <div className="space-y-2 text-pri-light-2">
              <p>
                Simply post a task describing the service you need, and
                available artisans will respond with quotes.
              </p>
              <p>
                You can review their profiles, compare prices, and hire the one
                that best fits your needs.
              </p>
            </div>
          </div>
        )}

        {/* FAQ Items */}
        <div className="bg-white overflow-hidden flex flex-col gap-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-neu-light-2 rounded-[20px]"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-11.25 py-8 text-left flex items-center justify-between hover:bg-neu-light-1 transition-colors rounded-[20px]"
              >
                <h3 className="font-manrope font-semibold sm:text-[18px] text-neu-dark-3 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <Plus
                    size={30}
                    className={`transform transition-transform duration-200 text-neu-norm-1 ${
                      expandedItems[index] ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </button>

              {expandedItems[index] && (
                <div className="px-11.25 pb-8">
                  <div className="text-neu-norm-3 leading-relaxed mt-2">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <LandingPageCta
        hText="Find 500+ skilled professionals on"
        hTextSpan="Contraktor"
        img={
          [
            "/carpenter.jpg",
            "/elect-man.png",
            "/painter.jpg",
            "/cleaner.png",
          ]
        }
      />

      {/* Footer */}
      <footer className=" bg-bg-primary text-white -mt-[140px]">
        <div className="lg:container mx-auto px-6 sm:px-8 py-15 pt-[240px]">
          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left section - App download */}
            <div className="lg:max-w-md">
              <h2 className="font-manrope font-semibold sm:text-2xl leading-[1.2] mb-4">
                Get Things Done On the Go
              </h2>
              <p className="text-neu-light-3 font-normal mb-5.5 leading-relaxed">
                Download the mobile app to post jobs, connect with artisans, and
                manage everything from your phone
              </p>

              {/* App store buttons */}
              <div className="flex gap-3 sm:gap-4">
                <Link
                  to="#"
                  className="flex items-center gap-3 bg-pri-dark-2 px-4 py-3 hover:bg-pri-dark-1 rounded-full transition-colors"
                >
                  <div className="w-8 h-8">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-full h-full"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-300">GET IT ON</span>
                    <span className="text-sm font-medium">Google Play</span>
                  </div>
                </Link>

                <Link
                  to="#"
                  className="flex items-center gap-3 bg-pri-dark-2 rounded-full px-4 py-3 hover:bg-pri-dark-1 transition-colors"
                >
                  <div className="w-8 h-8">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-full h-full"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-300">
                      Download on the
                    </span>
                    <span className="text-sm font-medium">App Store</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right section - Links */}
            <div className="flex-1 max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* For Customers */}
              <div>
                <h3 className=" text-neu-norm-1 mb-6">
                  {footerLinks.forCustomers.title}
                </h3>
                <ul className="space-y-4">
                  {footerLinks.forCustomers.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-white hover:text-neu-light-3 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Artisans */}
              <div>
                <h3 className="text-neu-norm-1 mb-6">
                  {footerLinks.forArtisans.title}
                </h3>
                <ul className="space-y-4">
                  {footerLinks.forArtisans.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-white hover:text-neu-light-3 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-neu-norm-1 mb-6">
                  {footerLinks.company.title}
                </h3>
                <ul className="space-y-4">
                  {footerLinks.company.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-white hover:text-neu-light-3 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-pri-norm-1/20 mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <p className="text-neu-norm-1 text-sm">
                ©{currentYear} Contraktor. All rights reserved
              </p>

              {/* Social links */}
              <div className="flex items-center gap-6">
                <span className="text-neu-norm-1 text-sm hidden sm:block">
                  Follow Us
                </span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      to={social.href}
                      className="hover:scale-95 hover:text-pri-norm-1 transition-all"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CustomerLandingPage;
