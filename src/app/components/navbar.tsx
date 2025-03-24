"use client"
import { useState } from "react";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
    title: "HOME",
    loc: "home"
  }, 
    {
    title: "ABOUT US",
    loc: "about"
  }, 
  {
    title: "SHOP",
    loc: "/about"
  }, 
  {
   title: "CONTACT US",
   loc: "contact"
  }
];

  const navVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed w-full bg-opacity-80 backdrop-blur-md md:backdrop-blur-none z-50"
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <img
          src="../images/bilmagicLogo.png"
          alt="Bilmagic Logo"
          className="h-[50px] object-cover w-auto"
        />

       
        <nav className="hidden md:flex flex-1 -ml-35 justify-center space-x-20">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                to={item.loc}
                className="text-white text-lg font-medium cursor-pointer"
                onClick={() => setActive(item.title)}
                smooth={true} duration={500}
              >
                {item.title}
              </Link>
              {/* <span
                className={`absolute left-0 -bottom-1 h-[3px] bg-blue-500 transition-all duration-500 ${
                  active === item.title ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span> */}
            </div>
          ))}
        </nav>

     
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-opacity-90 p-4 flex flex-col items-center space-y-4"
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.loc}
              className="text-white text-lg font-medium"
              onClick={() => {
                setActive(item.title);
                setMenuOpen(false);
              }}
            >
              {item.title}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
