"use client";
import { useParams } from "next/navigation";
import Navbar from '../../../../../components/navbar';
import billiardData from "../../../../../../json/billiard.json";

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

export default function CuePage() {
    const params = useParams();

    const brandName = Array.isArray(params.id) ? params.id[0] : params.id;
    const categorySlug = Array.isArray(params.category) ? params.category[0] : params.category;
    const cueSlug = Array.isArray(params.cue) ? params.cue[0] : params.cue;

    // Find the specific cue data
    const brand = billiardData.find(
        brand => brand.brand.toLowerCase() === brandName?.toLowerCase()
    );

    if (!brand) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#1584bb)] p-8 text-white">
                    <h2>Brand not found</h2>
                </div>
            </>
        );
    }

    const category = brand.Categories.find(
        cat => (cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-')) === categorySlug?.toLowerCase()
    );

    if (!category) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#1584bb)] p-8 text-white">
                    <h2>Category not found</h2>
                </div>
            </>
        );
    }

    // Find the specific cue item
    let cueItem: Item | undefined;
    for (const brandItem of category.Brands || []) {
        if (Array.isArray(brandItem.items)) {
            const foundItem = brandItem.items.find(
                item => item.name.toLowerCase().replace(/\s+/g, '-') === cueSlug?.toLowerCase()
            );
            if (foundItem) {
                cueItem = foundItem;
                break;
            }
        }
    }

    if (!cueItem) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-[linear-gradient(90deg,#000000,#1584bb)] p-8 text-white">
                    <h2>Cue not found</h2>
                </div>
            </>
        );
    }
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex bg-[linear-gradient(90deg,#000000,#1584bb)]">
                <div className="flex flex-col p-15 pt-30">
                    <div className="flex flex-col">
                        <p className="text-white font-bold text-[14rem] tracking-tighter" style={{ fontFamily: "var(--font-antonio)" }}>{cueItem.name}</p>
                        {cueItem.specifications.map((spec, index) => ( 
                                <p className="text-white w-120 -mt-5" key={index}>{spec.description}</p>
                        ))}
                    </div>


                    <div className="flex flex-col mt-13">
                        <div className="flex mb-3">
                            <h1 className="text-white">SPECIFICATIONS</h1>
                            <img src="/images/arrowdown.png" className="w-10 h-7 object-contain" alt="" />
                        </div>

                        <div className="flex gap-12">
                            <div className="text-lg">
                                <p className="text-white">WEIGHT</p>
                                <p className="text-white">TIP SIZE</p>
                                <p className="text-white">PIN</p>
                                <p className="text-white">TIP</p>
                                <p className="text-white">BUTT</p>
                            </div>
                            {cueItem.specifications.map((spec, index) => (
                                <div key={index} className="flex flex-col text-lg">
                                    <p className="text-white">{spec.Weight}</p>
                                    <p className="text-white">{spec.TipSize}</p>
                                    <p className="text-white">{spec.Pin}</p>
                                    <p className="text-white">{spec.Tip}</p>
                                    <p className="text-white">{spec.Butt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 w-full p-30 pt-50 gap-2">
                    <img src="/images/cuestick.png" alt="" className="w-full h-full object-contain" />
                    <img src="/images/cuestick.png" alt="" className="w-full h-full object-contain" />
                    <img src="/images/cuestick.png" alt="" className="w-full h-full object-contain" />
                    <img src="/images/cuestick.png" alt="" className="w-full h-full object-contain" />
                </div>
            </div>
        </>
    )
}