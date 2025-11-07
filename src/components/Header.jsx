import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header({ headerClass, logo, isArtisan }) {
  const navItems = [
    ...(isArtisan
      ? [
          {
            name: "find jobs",
            to: "https://app.contraktor.com.ng/customer",
          },
        ]
      : [
          {
            name: "post a job",
            to: "https://app.contraktor.com.ng/customer/post-job/describe",
          },
        ]),

    {
      name: "why choose us",
      to: isArtisan ? "#why-choose-artisan" : "#why-choose-us",
    },
    ...(isArtisan
      ? [
          {
            name: "for customer",
            to: "/",
          },
        ]
      : [
          {
            name: "for artisan",
            to: "/artisan",
          },
        ]),
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleNavClick = (e, to) => {
    if (to?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleLogin = () => {
    // You can customize this function based on your needs
    // For now, it will redirect to the login page
    window.open("https://app.contraktor.com.ng/", "_blank");
  };

  const handleSignUp = () => {
    // You can customize this function based on your needs
    // For now, it will redirect to the signup page
    window.open("https://app.contraktor.com.ng/signup", "_blank");
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-transparent font-inter font-medium fixed top-0 right-0 left-0 flex items-center h-20 border-b z-50 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      } ${headerClass}`}
    >
      <div className="w-full lg:container mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-14">
            <Link to="/">
              <img src={logo} alt="" className="" />
            </Link>

            <nav className="lg:flex items-center gap-16 text-sm hidden ">
              {navItems.map((item, index) => {
                if (item?.to?.startsWith("#")) {
                  return (
                    <button
                      key={index}
                      onClick={(e) => handleNavClick(e, item.to)}
                      className="capitalize transition-colors duration-300 text-neu-dark-1 hover:text-neu-norm-1"
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                      `capitalize transition-colors duration-300 ${
                        isActive && !scrolled
                          ? "text-white hover:text-neu-light-3"
                          : "text-neu-dark-1 hover:text-neu-norm-1"
                      } ${
                        isActive && scrolled
                          ? "text-pri-norm-1 hover:text-pri-dark-1"
                          : "text-neu-dark-1 hover:text-neu-norm-1"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>
          <div className="lg:flex items-center gap-6 hidden">
            <button
              onClick={handleLogin}
              className={`cursor-pointer transition-colors duration-300 ${
                isArtisan
                  ? scrolled
                    ? "text-pri-dark-1 hover:text-pri-norm-1"
                    : "text-white hover:text-neu-light-3"
                  : "text-pri-dark-1 hover:text-pri-norm-1"
              }`}
            >
              Login
            </button>
            <button
              onClick={handleSignUp}
              className="cursor-pointer bg-pri-norm-1 hover:bg-pri-dark-1 text-white px-6 py-3 rounded-full transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>

          <button
            className="cursor-pointer lg:hidden"
            onClick={toggleMobileMenu}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-b z-40">
          <div className="px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                if (item?.to?.startsWith("#")) {
                  return (
                    <button
                      key={index}
                      onClick={(e) => {
                        handleNavClick(e, item.to);
                        setIsMenuOpen(false);
                      }}
                      className="text-left capitalize transition-colors duration-300 text-neu-dark-1 hover:text-neu-norm-1 py-2"
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <NavLink
                    key={index}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `capitalize transition-colors duration-300 py-2 ${
                        isActive
                          ? "text-pri-norm-1"
                          : "text-neu-dark-1 hover:text-neu-norm-1"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>

            <div className="flex flex-col space-y-4 mt-6 pt-4 border-t">
              <button
                onClick={() => {
                  handleLogin();
                  setIsMenuOpen(false);
                }}
                className="text-left transition-colors duration-300 text-pri-dark-1 hover:text-pri-norm-1 py-2"
              >
                Login
              </button>
              <button
                onClick={() => {
                  handleSignUp();
                  setIsMenuOpen(false);
                }}
                className="bg-pri-norm-1 hover:bg-pri-dark-1 text-white px-6 py-3 rounded-full transition-colors duration-300 w-fit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
