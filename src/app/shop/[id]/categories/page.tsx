"use client";
import { useParams } from "next/navigation";
import Navbar from '../../../components/navbar';
import { div } from "framer-motion/client";

export default function page() {
    const { id } = useParams();

    const brandCategories = {
        peri: {
            name: "PERI",
            categories: [
                { name: "Playing Cue", image: "/images/3ball.png" },
                { name: "BREAK CUE", image: "/images/8ball.png" },
                { name: "JUMP CUE", image: "/images/10ball.png" },
                { name: "JUMP BREAK CUE", image: "/images/crical.png" },
                { name: "BATT", image: "/images/ongod.png" },
                { name: "SHAFT", image: "/images/rack.png" },
                { name: "BAG / CASE", image: "/images/rack.png" },
                { name: "CUE EXTENSION", image: "/images/rack.png" },
                { name: "CUE TIP", image: "/images/rack.png" },
                { name: "CHALK", image: "/images/rack.png" },
                { name: "GLOVES", image: "/images/rack.png" },
                { name: "ACCESSORIES / TOOLS", image: "/images/rack.png" }
            ]
        },
        bilmagic: {
            name: "BILMAGIC",
            categories: [
                { name: "Playing Cue", image: "/images/3ball.png" },
                { name: "BREAK CUE", image: "/images/8ball.png" },
                { name: "JUMP CUE", image: "/images/10ball.png" },
                { name: "JUMP BREAK CUE", image: "/images/crical.png" },
                { name: "BATT", image: "/images/ongod.png" },
                { name: "SHAFT", image: "/images/rack.png" },
                { name: "BAG / CASE", image: "/images/rack.png" },
                { name: "CUE EXTENSION", image: "/images/rack.png" },
                { name: "CUE TIP", image: "/images/rack.png" },
                { name: "CHALK", image: "/images/rack.png" },
                { name: "GLOVES", image: "/images/rack.png" },
                { name: "ACCESSORIES / TOOLS", image: "/images/rack.png" }
            ]
        },
        konllen: {
            name: "KONLLEN",
            categories: [
                { name: "Playing Cue", image: "/images/3ball.png" },
                { name: "BREAK CUE", image: "/images/8ball.png" },
                { name: "JUMP CUE", image: "/images/10ball.png" },
                { name: "JUMP BREAK CUE", image: "/images/crical.png" },
                { name: "BATT", image: "/images/ongod.png" },
                { name: "SHAFT", image: "/images/rack.png" },
                { name: "BAG / CASE", image: "/images/rack.png" },
                { name: "CUE EXTENSION", image: "/images/rack.png" },
                { name: "CUE TIP", image: "/images/rack.png" },
                { name: "CHALK", image: "/images/rack.png" },
                { name: "GLOVES", image: "/images/rack.png" },
                { name: "ACCESSORIES / TOOLS", image: "/images/rack.png" }
            ]
        },
    };

    const brand = brandCategories[id as keyof typeof brandCategories] || {
        name: "Unknown Brand",
        items: [],
    };
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col lg:flex-row pt-20 bg-[linear-gradient(90deg,#000000,#1584bb)]">
                <div className="flex flex-col w-100 ml-15">
                    <p className="text-white opacity-30 text-[13rem] font-bold tracking-tighter" style={{ fontFamily: "var(--font-antonio)" }}>{brand.name}</p>
                    <div className="flex cursor-pointer -mt-5 items-center gap-2 w-full">
                        <p className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>
                            ALL CATEGORIES
                        </p>
                        <img src="/images/arrowtriple.png" alt="" className="w-20 h-10 object-contain" />
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full pl-15 pr-15 pb-15 pt-15">
                    {brand.categories.map((brand, index) => (
                        <div
                        key={index}
                        className="p-3 w-full rounded-3xl bg-gray-400/60">
                            <p className="text-white pl-4">{brand.name}</p>
                            <img src={brand.image} alt="" className="max-w-full max-h-full object-contain"/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
