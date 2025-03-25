"use client"
import { useState } from "react";
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

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
      loc: "/shop",
      dropdown: [
        { title: "PERI", loc: "/shop/peri" },
        { title: "KONLLEN", loc: "/shop/konllen" },
        { title: "BILMAGIC", loc: "/shop/bilmagic" }
      ]
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

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed w-full bg-opacity-80 backdrop-blur-md md:backdrop-blur-none z-50"
      onClick={() => setShopDropdownOpen(false)}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <img
          src="../images/bilmagicLogo.png"
          alt="Bilmagic Logo"
          className="h-[50px] object-cover w-auto"
        />

        <nav className="hidden md:flex flex-1 -ml-35 justify-center space-x-20">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
              onClick={(e) => {
                if (item.title === "SHOP") {
                  e.stopPropagation();
                  toggleShopDropdown();
                }
              }}
            >
              <div className="flex items-center">
                <Link
                  to={item.loc}
                  className={`text-white text-lg font-medium cursor-pointer px-3 py-1 rounded-md transition-colors duration-300 ${
                    active === item.title ? 'bg-gray-300/50' : 'hover:bg-gray-300/70 transition-all duration-400 ease-in-out'
                  }`}
                  onClick={() => setActive(item.title)}
                  smooth={true} 
                  duration={500}
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <ChevronDown 
                    size={20} 
                    className={`text-white ml-2 transition-transform duration-300 ${
                      shopDropdownOpen && item.title === "SHOP" ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.title === "SHOP" && item.dropdown && shopDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#0b3452]/40 text-center bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg w-[200px] cursor-pointer"
                >
                  <div className="py-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.loc}
                        className={`block px-6 py-3 hover:bg-[#34495E]/20 transition-colors duration-300 text-white ${
                          active === subItem.title ? 'bg-gray-600 bg-opacity-50' : ''
                        }`}
                        onClick={() => {
                          setActive(subItem.title);
                          setShopDropdownOpen(false);
                        }}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
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

      {/* Mobile menu remains the same */}
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
              className={`text-white text-lg font-medium px-3 py-1 rounded-md transition-colors duration-300 ${
                active === item.title ? 'bg-gray-600 bg-opacity-50' : 'hover:bg-gray-600 hover:bg-opacity-30'
              }`}
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