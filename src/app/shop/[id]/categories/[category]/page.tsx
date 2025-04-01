"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import billiardData from "../../../../../json/billiard.json";
import Navbar from '../../../../components/navbar';
import { Link as ScrollLink } from 'react-scroll';
import { div } from "framer-motion/client";

// Define more precise types
interface Specification {
  description: string;
  Weight: string;
  Pin: string;
  TipSize: string;
  Tip: string;
  Butt: string;
}

interface Item {
  name: string;
  specifications: Specification[];
}

interface BrandItem {
  Name: string;
  items: Item[] // Items can be array or string
}

interface Category {
  name: string;
  slug?: string;
  image: string;
  Brands?: BrandItem[];
}

interface BrandData {
  id: number;
  brand: string;
  Categories: Category[];
}

export default function CategoryPage() {
  const params = useParams();

  // The parameter is called 'id' because of your folder name [id]
  const brandName = Array.isArray(params.id) ? params.id[0] : params.id;
  const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category;

  console.log('Brand Name from URL:', brandName);
  console.log('Available Brands:', billiardData.map(b => b.brand));

  // Find the brand by name (case insensitive)
  const brand = billiardData.find(item =>
    item.brand.toLowerCase() === brandName?.toLowerCase()
  );

  console.log('Found Brand:', brand);

  if (!brand) {
    return (
      <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#1584bb)] p-8 text-white">
        <h2 className="text-2xl mb-4">Brand not found: {brandName}</h2>
        <p>Available brands:</p>
        <ul className="mt-2 space-y-2">
          {billiardData.map((b, index) => (
            <li key={index}>
              <Link
                href={`/shop/${b.brand.toLowerCase().replace(/\s+/g, '-')}/categories`}
                className="text-blue-400 hover:underline"
              >
                {b.brand}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }


  const category = brand.Categories.find(c => {
    const categoryIdentifier = c.slug || c.name.toLowerCase().replace(/\s+/g, '-');
    return categoryIdentifier.toLowerCase() === categorySlug?.toLowerCase();
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#1584bb)] p-8 text-white">
        <h2 className="text-2xl mb-4">Category not found: {categorySlug}</h2>
        <p>Available categories in {brand.brand}:</p>
        <ul className="mt-2 space-y-2">
          {brand.Categories.map((cat, index) => (
            <li key={index}>
              <Link
                href={`/shop/${brandName}/categories/${cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-400 hover:underline"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#1584bb)] flex flex-row w-full">

      <div className="p-4 fixed h-full pl-25 pt-20 w-94">
          <p className="text-white text-[12rem] font-bold opacity-40 uppercase tracking-tighter" style={{ fontFamily: "var(--font-antonio)" }}>{brand.brand}</p>
          <div className="flex w-full">
            <p className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {category.name}
            </p>
            <img src="/images/arrowtriple.png" alt="All categories" className="w-20 h-10 object-contain" />
          </div>

          <div className="flex flex-col">
            <li className="flex flex-col">
              {category.Brands?.map((brand, index) => (
                <div>
                <ScrollLink smooth={true}
                  duration={500} to={`${brand.Name}`} className="text-white cursor-pointer" key={index}>
                  {brand.Name}
                </ScrollLink>
                                <div className="h-[2px] w-75 bg-white"></div>
                                </div>
              ))}
            </li>
          </div>
        </div>

        <div className="ml-100 p-30 w-[calc(100%-16rem)]">
          {category.Brands?.map((brandItem, brandIndex) => (
            <div key={brandIndex} className="flex flex-col gap-3 mb-10">
              <p className="text-white font-bold">{brandItem.Name}</p>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {Array.isArray(brandItem.items) ? (
                  brandItem.items.map((item, itemIndex) => (
                    <Link href={`/shop/${brandName}/categories/${categorySlug}/${item.name}`} id={brandItem.Name} key={itemIndex} className="bg-[linear-gradient(180deg,#a6a6a6,#ffffff)] w-full rounded-3xl p-5">
                      <p>{item.name}</p>
                      <img
                        src={category.image}
                        alt={category.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-400 ml-4">{brandItem.items}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}