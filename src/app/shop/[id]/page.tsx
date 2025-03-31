"use client";
import { useParams } from "next/navigation";
import FerrisWheel from "./ferrishwheel";
import Navbar from '../../components/navbar'
import Link from "next/link";


const ShopBrandPage = () => {
  const { id } = useParams();

  const brandsData = {
    peri: { name: "Peri", items: ["Item A", "Item B"] },
    bilmagic: { name: "Bilmagic", items: ["Item C", "Item D"] },
    konllen: { name: "Konllen", items: ["Item E", "Item F"] },
  };

  const brand = brandsData[id as keyof typeof brandsData] || {
    name: "Unknown Brand",
    items: [],
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-between bg-[linear-gradient(90deg,#000000,#1584bb)] overflow-hidden">
      <div className="flex flex-col gap-5 ml-50">
        <div className="relative h-10">
          <h1 className="text-[13rem] tracking-tighter absolute -top-35 -left-25 font-bold text-white opacity-30 uppercase" style={{ fontFamily: "var(--font-antonio)" }}>{brand.name}</h1>
        </div>
        <h1 className="text-white text-5xl font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>SHOP</h1>
        <h1 className="text-white text-5xl font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>BY CATEGORIES</h1>
        <Link href={`/shop/${id}/categories`}>
            <div className="flex cursor-pointer">
              <p className="text-white text-3xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
                ALL CATEGORIES
              </p>
              <img src="/images/arrowtriple.png" alt="" className="w-20 h-10 object-contain" />
            </div>
          </Link>
        <div className="h-[2px] w-75 opacity-50 bg-white"></div>
        <div className="flex bg-[linear-gradient(135deg,#a6a6a6,#ffffff)] w-80 rounded-2xl h-33 p-2 pl-4 mt-15">
          <div className="flex flex-col gap-13">
            <p className="text-white" style={{ fontFamily: "var(--font-robot)" }}>NEW ARRIVALS</p>
            <button className="bg-subtext text-sm text-white w-28 py-1 rounded-full" style={{ fontFamily: "var(--font-robot)" }}>VIEW MORE</button>
          </div>
          <div className="flex justify-end w-full">
            <img src="/images/PERI.png" alt="" className="w-30 h-35 object-contain pr-3" />
          </div>
        </div>
      </div>

      {/* Modified ferris wheel section */}
      <div className="relative w-100 flex justify-end items-center h-screen">
        {/* Ferris wheel container */}
        <div className="bg-[linear-gradient(180deg,#000000,#1584bb)] w-130 h-130 rounded-full absolute -right-40 bottom-30"></div>
        <div className="absolute w-100 h-100 flex items-center justify-center mt-60">
          <FerrisWheel />
        </div>
      </div>
    </div>
    </>
  );
};

export default ShopBrandPage;