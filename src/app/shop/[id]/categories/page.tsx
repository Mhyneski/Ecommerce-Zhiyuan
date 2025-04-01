"use client";
import { useParams } from "next/navigation";
import Navbar from '../../../components/navbar';
import Link from "next/link";
import billiardData from "../../../../json/billiard.json";

// Define types for your data structure
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
        <div className="flex flex-col w-100 ml-15">
          <p 
            className="text-white opacity-30 text-[13rem] font-bold tracking-tighter" 
            style={{ fontFamily: "var(--font-antonio)" }}
          >
            {Brand.brand}
          </p>
          <Link href={`/shop/${id}/categories`} className="flex cursor-pointer -mt-5 items-center gap-2 w-full">
            <p className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>
              ALL CATEGORIES
            </p>
            <img src="/images/arrowtriple.png" alt="All categories" className="w-20 h-10 object-contain" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full pl-15 pr-15 pb-15 pt-15">
          {Brand.Categories.map((category, index) => (
            <Link 
            href={`/shop/${id}/categories/${category.slug}`}
            key={index}
            className="p-3 w-full rounded-3xl bg-gray-400/60 hover:bg-gray-400/80 transition-colors"
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