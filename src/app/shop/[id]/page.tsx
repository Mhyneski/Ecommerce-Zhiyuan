"use client";
import { useParams } from "next/navigation";
import FerrisWheel from "./ferrishwheel";
import Navbar from '../../components/navbar'
import Link from "next/link";
import billiardData from "../../../json/billiard.json"

const ShopBrandPage = () => {
  const { id } = useParams();

  const Brand = billiardData.find(item => item.brand.toLowerCase() === id);

  console.log(Brand)

  if (!Brand) {
    return <div>Brand not found</div>;
  }
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-between bg-[linear-gradient(90deg,#000000,#1584bb)] overflow-hidden">
      <div className="flex relative flex-col gap-12 ml-42 pt-36 w-full">
        <div className="">
          <h1 className="text-[17rem] tracking-[-0.08em] absolute bottom-93 -left-3 font-bold text-white opacity-30 uppercase" style={{ fontFamily: "var(--font-antonio)" }}>{Brand.brand}</h1>
        </div>
        <div className="">
        <h1 className="text-white text-[3.5rem] font-bold -mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>SHOP</h1>
        <h1 className="text-white text-[3.5rem] font-bold mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>BY CATEGORIES</h1>
        <Link href={`/shop/${id}/categories`} className="flex items-center cursor-pointer gap-3 mb-1">
              <p className="text-white text-[1.5rem]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                ALL CATEGORIES
              </p>
              <img src="/images/arrowtriple.png" alt="" className="w-13 h-10 object-contain" />
          </Link>
        <div className="h-[2px] w-60 opacity-50 bg-white"></div>
        </div>

        <div className="flex bg-[linear-gradient(135deg,#a6a6a6,#ffffff)] w-100 rounded-4xl h-50 p-2 pl-4 mt-14">
          <div className="flex flex-col gap-23 pt-4 ml-5 w-full">
            <p className="text-white text-lg fo" style={{ fontFamily: "var(--font-roboto)" }}>NEW ARRIVALS</p>
            <button className="bg-subtext text-[0.800rem] text-white w-30 py-2 rounded-full" style={{ fontFamily: "var(--font-roboto)" }}>VIEW MORE</button>
          </div>
          <div className="flex justify-end w-full">
            <img src="/images/PERI.png" alt="" className="w-50 h-50 object-contain pr-3" />
          </div>
        </div>
      </div>

      {/* Modified ferris wheel section */}
      <div className="relative w-100 flex justify-end items-center h-screen">
        <div className="bg-[linear-gradient(180deg,#000000,#1584bb)] w-180 h-180 rounded-full absolute -right-70"></div>
        <div className="absolute w-165 h-120 flex items-center justify-center mt-60">
          <FerrisWheel />
        </div>
      </div>
    </div>
    </>
  );
};

export default ShopBrandPage;