import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

const navItems = [
  {
    name: "find jobs",
    to: "#",
  },
  {
    name: "post a job",
    to: "#",
  },

  {
    name: "why choose us",
    to: "#",
  },

  {
    name: "for artisan",
    to: "/artisan",
  },
]

function Header( {headerClass, logo} ) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`bg-transparent font-inter font-medium fixed top-0 right-0 left-0 flex items-center h-20 border-b z-50 transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'} ${headerClass}`}>
          <div className='w-full lg:container mx-auto px-6 sm:px-8'>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-14">
        <Link to="/">
          <img src={logo} alt="" className="" />
          </Link>

          <nav className="lg:flex items-center gap-16 text-sm hidden ">
            {navItems.map((item, index) => (
              <Link key={index} to={item.to} className="capitalize text-neu-dark-1 hover:text-neu-norm-1 transition-colors duration-300">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="lg:flex items-center gap-6 hidden">
          <button className="cursor-pointer text-pri-dark-1 hover:text-pri-norm-1 transition-colors duration-300">
            Login
          </button>
          <button className="cursor-pointer bg-pri-norm-1 hover:bg-pri-dark-1 text-white px-6 py-3 rounded-full transition-colors duration-300">
            Sign Up
          </button>
        </div>

        <button className="cursor-pointer lg:hidden">
          <Menu size={30} />
        </button>

      </div>
    </div>
    </div>
  )
}

export default Header