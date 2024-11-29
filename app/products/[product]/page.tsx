"use client"
import { FeaturedCakes } from "@/Components/components/home/FeaturedCakes";
import Footer from "@/Components/components/layout/Footer";
import { Navbar } from "@/Components/components/layout/Navbar";
import { ProductCarousel } from "@/Components/components/products/ProductCarousel";
import { ProductCustomization } from "@/Components/components/products/ProductCustomization";
import { ProductReviews } from "@/Components/components/products/ProductReviews";
import { products } from "@/Components/data/products";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: Promise<any> }) => {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
    const [productData, setProductData] = useState<any>(null);

    useEffect(() => {
        params.then((resolvedParams) => {
            const product = products.find(product => product.id === parseInt(resolvedParams.product));
            setProductData(product);
        });
    }, [params]);

    const handleOptionChange = (optionId: string, value: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [optionId]: value,
        }));
    };

    return <div><Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ProductCarousel images={productData?.images || []} productName={productData?.name || ""} />

                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{productData?.name}</h1>
                        <p className="text-2xl font-semibold text-pink-500 mt-2">${productData?.price}</p>
                    </div>

                    <p className="text-gray-700">{productData?.description}</p>

                    <ProductCustomization
                        options={productData?.customizationOptions || []}
                        onOptionChange={handleOptionChange}
                    />

                    <div className="flex space-x-4">
                        <button className="flex-1 bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors">
                            Add to Cart
                        </button>
                        <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                            <Heart className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* <DeliveryInfo /> */}
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
                <ProductReviews reviews={productData?.reviews || []} />
            </div>
            <FeaturedCakes title="You May Also Like" />
        </div><Footer /></div>
}

export default Page;
