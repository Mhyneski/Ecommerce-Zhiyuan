"use client";
import { useParams } from "next/navigation";
import Navbar from '../../../components/navbar';
import Link from "next/link";
import billiardData from "../../../../json/billiard.json";


interface Category {
  name: string;
  slug: string;
  image: string;
  Brands?: Array<{
    Name: string;
    items: Array<{
      name: string;
      specifications: Array<{
        description: string;
        Weight: string;
        Pin: string;
        TipSize: string;
        Tip: string;
        Butt: string;
      }>;
    }>;
  }>;
}

interface BrandData {
  id: number;
  brand: string;
  Categories: Category[];
}

export default function Page() {
  const { id } = useParams();


  const brands = billiardData as BrandData[];


  const Brand = brands.find(item => 
    item.brand.toLowerCase() === id?.toString().toLowerCase()
  );

  if (!Brand) {
    return <div>Brand not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col lg:flex-row pt-20 bg-[linear-gradient(90deg,#000000,#1584bb)]">
        <div className="flex flex-col w-100 ml-25">
          <p 
            className="text-white opacity-30 text-[13rem] font-bold tracking-[-0.08em] uppercase" 
            style={{ fontFamily: "var(--font-antonio)" }}
          >
            {Brand.brand}
          </p>
          <Link href={`/shop/${id}/categories`} className="flex cursor-pointer -mt-5 items-center gap-2 w-full">
          <p className="text-white text-[1.5rem] font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>
                ALL CATEGORIES
              </p>
              <img src="/images/arrowtriple.png" alt="" className="w-13 h-10 object-contain" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full pl-15 pr-20 pb-20 pt-15">
          {Brand.Categories.map((category, index) => (
            <Link 
            href={`/shop/${id}/categories/${category.slug}`}
            key={index}
            className="p-3 w-full rounded-3xl bg-gradient-to-b from-[#a6a6a6b4] to-[#ffffffb4] hover:bg-gray-400/80 transition-colors"
          >
            <p className="text-white pl-4">{category.name}</p>
            <img 
              src={category.image} 
              alt={category.name} 
              className="max-w-full max-h-full object-contain"
            />
          </Link>
          ))}
        </div>
      </div>
    </>
  )
}