import React from 'react'
import logo from '/logo.png'
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
    to: "#",
  },
]

function Header() {
  return (
    <div className="bg-white font-inter font-medium fixed top-0 right-0 left-0 flex items-center h-20 border-b border-neu-light-2 z-50">
          <div className='w-full lg:container mx-auto px-6 sm:px-8'>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-14">
          <img src={logo} alt="" className="" />
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