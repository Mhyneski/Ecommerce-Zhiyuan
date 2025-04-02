"use client"
import { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const menuItems = [
    {
      title: "HOME",
      href: "/",
      scrollTo: "home"
    }, 
    {
      title: "ABOUT US",
      href: isHomePage ? "#" : "/#about",
      scrollTo: "about"
    }, 
    {
      title: "SHOP",
      href: "/shop/peri",
      dropdown: [
        { title: "PERI", href: "/shop/peri" },
        { title: "KONLLEN", href: "/shop/konllen" },
        { title: "BILMAGIC", href: "/shop/bilmagic" }
      ]
    }, 
    {
      title: "CONTACT US",
      href: isHomePage ? "#" : "/#contact",
      scrollTo: "contact"
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

  const handleNavItemClick = () => {
    setMenuOpen(false);
    setShopDropdownOpen(false);
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="fixed w-full bg-opacity-80  z-50"
      onClick={() => setShopDropdownOpen(false)}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <Link href="/">
          <img
            src="/images/bilmagicLogo.png"
            alt="Bilmagic Logo"
            className="h-[50px] object-cover w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 -ml-35 justify-center space-x-20">
          {menuItems.map((item) => (
            <div 
              key={item.title} 
              className="relative group"
              onClick={(e) => {
                if (item.title === "SHOP") {
                  e.stopPropagation();
                  toggleShopDropdown();
                }
              }}
            >
              <div className="flex items-center">
                {isHomePage && item.scrollTo ? (
                  <ScrollLink
                    to={item.scrollTo}
                    className={`text-white text-lg font-medium cursor-pointer px-3 py-1 rounded-md transition-colors duration-300 ${
                      pathname === item.href ? 'bg-gray-300/50' : 'hover:bg-gray-300/70'
                    }`}
                    smooth={true}
                    duration={500}
                    onClick={handleNavItemClick}
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-white text-lg font-medium cursor-pointer px-3 py-1 rounded-md transition-colors duration-300 ${
                      pathname === item.href ? 'bg-gray-300/50' : 'hover:bg-gray-300/70'
                    }`}
                    onClick={handleNavItemClick}
                  >
                    {item.title}
                  </Link>
                )}
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
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-6 py-3 hover:bg-[#34495E]/20 transition-colors duration-300 text-white"
                        onClick={handleNavItemClick}
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

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-opacity-90 p-4 flex flex-col items-center space-y-4"
          >
            {menuItems.map((item) => (
              <div key={item.title} className="w-full text-center">
                {isHomePage && item.scrollTo ? (
                  <ScrollLink
                    to={item.scrollTo}
                    className={`text-white text-lg font-medium px-3 py-1 rounded-md transition-colors duration-300 ${
                      pathname === item.href ? 'bg-gray-600 bg-opacity-50' : 'hover:bg-gray-600 hover:bg-opacity-30'
                    }`}
                    onClick={handleNavItemClick}
                    smooth={true}
                    duration={500}
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-white text-lg font-medium px-3 py-1 rounded-md transition-colors duration-300 ${
                      pathname === item.href ? 'bg-gray-600 bg-opacity-50' : 'hover:bg-gray-600 hover:bg-opacity-30'
                    }`}
                    onClick={handleNavItemClick}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}