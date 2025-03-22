import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("HOME");

  const menuItems = ["HOME", "ABOUT US", "SHOP", "CONTACT US"];

  return (
    <div className="fixed w-full z-50">
      <div className="flex items-center px-10 py-4">
        <img
          src="../images/bilmagicLogo.png"
          alt="Bilmagic Logo"
          className="h-[60px] object-cover w-auto"
        />
        <nav className="flex-1 -ml-45 flex justify-center">
          <div className="flex justify-evenly space-x-15">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href="/"
                  className="text-white text-lg"
                  onClick={() => setActive(item)}
                >
                  {item}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-subtext transition-all duration-500 ${
                    active === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
