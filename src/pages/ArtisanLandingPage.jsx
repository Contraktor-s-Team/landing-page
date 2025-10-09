import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../components/SectionHeader";
import {
  artisanJobs,
  artisanReasonItems,
  artisanReviewsItems,
  //   customer,
  ReasonItems,
  // reviewsItems,
  // servicesItems,
} from "../utils/sectionsData";
import { ArrowUpRight, Plus, X, MapPin, Zap, Calendar } from "lucide-react";
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

function ArtisanLandingPage() {
  const [expandedItems, setExpandedItems] = useState({});
  const [showFAQHeader, setShowFAQHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const currentYear = new Date().getFullYear();

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqItems = [
    {
      question: "I'm an artisan. How do I get jobs on CONTRAKTOR?",
      answer:
        "Once you create a profile and become a verified artisan, you'll get access to our 'Browse Tasks' feed. You will see a list of customer-posted jobs that match your skills and location. You can then apply for jobs that suit you, either by accepting a customer's budget, making a counter-offer, or applying for a consultation visit.",
    },
    {
      question: "As an artisan, how and when do I get paid?",
      answer:
        "We ensure you get paid securely and on time. When a customer hires you, they deposit the full job amount into our secure payment system. For larger projects, an initial portion is often released to help cover materials. Once you mark the job as complete and the customer confirms their satisfaction, the remaining payment is transferred directly to your linked bank account.",
    },
    {
      question: "How much does it cost to use CONTRAKTOR?",
      answer:
        "Creating a profile and browsing tasks is free for both customers and artisans. CONTRAKTOR charges a small, transparent service fee (a percentage of the total job price) only upon the successful completion of a job. This fee helps us maintain the platform, provide support, and ensure a secure experience for everyone.",
    },
    {
      question: "Why do artisans need to be verified (KYC)?",
      answer:
        "Our verification process is what builds trust in the CONTRAKTOR community. By verifying your identity and skills, you become a 'Verified Artisan,' which makes your profile more attractive to high-quality customers, allows you to command fair prices, and gives you access to all platform features, including our secure payment system.",
    },
    {
      question: "Is CONTRAKTOR available in my city/area?",
      answer:
        "We are launching progressively across Nigeria, starting with key cities and states. Please sign up, and the platform will let you know which services are available in your specific location. We are expanding rapidly!",
    },
  ];

  return (
    <div className="font-inter font-medium">
      <Header
        headerClass={scrolled ? "border-neu-light-2" : "border-[#182D43]"}
        logo={scrolled ? "/logo.png" : "/logoWhite.png"}
        isArtisan={true}
      />
      <HeroSection
        hClass="text-white"
        hText={"find jobs, get paid, build reputation"}
        hDesc={
          "Join thousands of skilled artisans using Contraktor to grow their craft and earn steadily."
        }
        placeholderservice="Search for jobs by service or keyword…"
        bg={`
radial-gradient(ellipse at bottom left, rgba(158, 217, 255, 0.4) 0%, rgba(158, 217, 255, 0.2) 15%, transparent 40%),
radial-gradient(ellipse at bottom right, rgba(158, 255, 165, 0.4) 0%, rgba(158, 255, 165, 0.2) 20%, transparent 50%),
linear-gradient(135deg, #0f172a, #00172F)
  `}
      />

      {/* Why Choose Contraktor */}
      <div
        id="why-choose-artisan"
        className="lg:container mx-auto px-6 sm:px-8 my-25"
      >
        <SectionHeader
          subText="features"
          text="Why Choose"
          styledText="Contraktor"
        />
        <div className="grid gap-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-[minmax(600px,2fr)_minmax(500px,1fr)] gap-8 mt-10">
            {artisanReasonItems.slice(0, 2).map((item, i) => (
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
            {artisanReasonItems.slice(2, 4).map((item, i) => (
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

      {/* Recent Job Postings */}
      {/* <div className="bg-[#FAFAFA]">
      <div className="lg:container mx-auto px-6 sm:px-8 py-15">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:justify-between">
          <h1 className="font-manrope font-semibold text-[26px] sm:text-[30px] capitalize">
          <span className="text-pri-norm-3">recent</span> job postings
          </h1>
          <button className="cursor-pointer bg-pri-norm-1 hover:bg-pri-dark-1 text-white px-6 py-3 rounded-full transition-colors duration-300">
            View all artisans
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {artisanJobs.map((job) => (
    <Link
    to={``}
    className="block bg-white rounded-lg p-4 border border-neu-light-2 overflow-hidden hover:shadow-md transition-shadow duration-200 hover:border-blue-200"
  >
    Main content
    <div className="">
      <div className="flex items-center justify-between mb-2">
        <div className="bg-gray-100 px-3.5 py-2 rounded-full flex items-center gap-2">
          <Zap size={16} />
          <span className="text-gray-600 font-medium text-sm">{job.category}</span>
        </div>
      </div>
      <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
      {job.title}
      </h2>
      <p className="text-gray-700 text-sm leading-relaxed line-clamp-2 h-[50px]">
        {job.description}
      </p>
    </div>

    Profile section
    <div className="px-4 py-4 border-y-2 border-gray-200 flex items-center gap-3 my-5.25">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
        {job?.name && job.name.split(' ').length >= 2 
          ? job.name.split(' ')[0][0] + job.name.split(' ')[1][0]
          : job?.name ? job.name[0] : 'C'}
      </div>
      <div>
        <p className="text-gray-900 text-sm font-medium">{job?.artisanName ? job?.artisanName : "Customer Details Unavailable"}</p>
      </div>
    </div>

    Location and date info
    <div className="text-sm text-gray-700 space-y-4">
      <div className="flex items-center gap-2">
        <MapPin className="text-blue-500" size={16}/>
        <span>{job?.location ? job?.location : "Location Unavailable"}</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar className=" text-blue-500" size={16}/>
        <span>{new Date(job.dateTime).toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}</span>
      </div>
    </div>

    Action buttons
    <div className="mt-6.5">
      <div className="flex gap-2">
          <div className="">
            <button className="cursor-pointer bg-pri-norm-1 hover:bg-pri-dark-1 text-white px-6 py-3 rounded-full transition-colors duration-300">
              Apply
            </button>
          </div>
      </div>
    </div>
  </Link>
          ))}
        </div>
      </div>
      </div> */}

      {/* Find customers */}
      <div className="lg:container mx-auto sm:px-8 my-25">
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
      <div className="lg:container mx-auto sm:px-8 my-25">
        <div className="bg-pri-dark-3 py-12.5 sm:p-7.5 flex flex-col-reverse lg:flex-row items-center gap-18 lg:gap-6 sm:rounded-3xl">
          <div className="px-7.75 sm:px-0">
            <img src="/getdonepic.png" alt="" className="" />
          </div>
          <div className="max-w-[552px] mx-auto px-4 sm:px-0 text-center lg:text-start">
            <h1 className="font-manrope font-semibold text-[24px] sm:text-[36px] leading-[1.2] text-white capitalize">
              Grow Your Business On The Go
            </h1>
            <p className="text-neu-light-3 my-7.75">
              Download the mobile app to find jobs, connect with customers, and
              manage your work anytime, anywhere.
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

      {/* Artisan Reviews */}
      {/* <div className="my-25">
        <SectionHeader
          subText="customer reviews"
          text="Trusted by Professional Across Nigeria"
        />

        <div className="mt-14">
          Row 1
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee">
              {[...artisanReviewsItems, ...artisanReviewsItems].map(
                (review, index) => (
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
                )
              )}
            </div>
          </div>
          Row 2
          <div className="overflow-hidden mt-4">
            <div className="flex gap-4 animate-marquee-reverse">
              {[...artisanReviewsItems, ...artisanReviewsItems].map(
                (review, index) => (
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
                )
              )}
            </div>
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="lg:container mx-auto px-6 sm:px-8 my-28">
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
              How do I start earning as an artisan on CONTRAKTOR?
            </h1>

            <div className="space-y-2 text-pri-light-2">
              <p>
                Create your profile, get verified, and start browsing available
                jobs that match your skills.
              </p>
              <p>
                Apply for jobs, negotiate prices, and get paid securely through
                our Escrow system.
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
      <LandingPageCta hText={"Start Earning with Your Skills Today"} />

      {/* Footer */}
      <footer className=" bg-bg-primary text-white -mt-[140px]">
        <div className="lg:container mx-auto px-6 sm:px-8 py-15 pt-[240px]">
          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left section - App download */}
            <div className="lg:max-w-md">
              <h2 className="font-manrope font-semibold sm:text-2xl leading-[1.2] mb-4">
                Grow Your Business On The Go
              </h2>
              <p className="text-neu-light-3 font-normal mb-5.5 leading-relaxed">
                Download the mobile app to find jobs, connect with customers,
                and manage your work anytime, anywhere.
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
                ©{currentYear} Contraktor by Distrolink Services. All rights
                reserved
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

export default ArtisanLandingPage;
