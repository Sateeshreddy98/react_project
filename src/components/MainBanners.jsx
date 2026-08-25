import { useState, useEffect, useRef } from "react";

export default function MainBanners() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef(null);
    const banners = [
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1773810900601/Offer Code.jpg", alt: "Redrail Offers", brand: "Redrail" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1786297301082/Discount Codes.jpg", alt: "ICP Offers", brand: "ICP" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1786356843606/Offer Code.jpg", alt: "Amazon offers", brand: "Amazon" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1785746498158/Offer Code.jpg", alt: "Coursera Offers", brand: "Coursera" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1786342351317/Discount Codes.jpg", alt: "MediBuddy Offers", brand: "MediBuddy" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1785993785167/Discount Codes.jpg", alt: "Udemy Offers", brand: "Udemy" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1785242942364/Coupon Code.jpg", alt: "Hostinger Offers", brand: "Hostinger" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1786373138029/Coupon Codes.jpg", alt: "HP Offers", brand: "HP" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1782899392273/Discount Codes.jpg", alt: "Dell Offers", brand: "Dell" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1783491076520/Coupon%20Codes.jpg", alt: "Savaari Offers", brand: "Savaari" },
    ];

    const sideBanners = [
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1785551795478.jpg", alt: " Uber Offers ", brand:" Uber "},
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1787316511721.jpg", alt: " Hotstar ", brand:" Hotstar "},
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1783394406213.jpg", alt: " Google WOrkspace Offer ", brand:" Google Workspace "},
    ];

    useEffect(() => {
        if (isPaused) return;

        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 3000);

        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, isPaused, banners.length]);

    return (
        <section className="w-full mt-5 px-6 lg:px-0">
            <div className="w-full max-w-312 flex flex-col lg:flex-row gap-6 mx-auto">
                <div className="w-full lg:w-3/4 overflow-hidden rounded-lg" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                    <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {banners.map((banner) => (
                            <img
                                key={banner.brand}
                                src={banner.src}
                                alt={banner.alt}
                                className="h-auto w-full shrink-0 rounded-lg"
                            />
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex w-full lg:w-1/4 flex-row gap-4 overflow-hidden">
                    {sideBanners.map((sidebanner) => (
                        <img 
                            key={sidebanner.brand} 
                            src={sidebanner.src} 
                            alt={sidebanner.alt}
                            className=" h-90 w-full rounded-lg" 
                        />
                    ))}
                </div>
            </div>
            <div className="w-full max-w-312 flex flex-col lg:flex-row gap-6 mx-auto">
                <div className="w-full lg:w-3/4 flex justify-evenly items-start overflow-scroll lg:overflow-hidden scrollbar-none border border-[#f0f0fc] bg-white rounded-b-[20px]">
                    {banners.map((brandnames) => (
                        <button className="py-3.5 px-5 cursor-pointer text-base shrink-0">
                            {brandnames.brand}
                        </button>
                    ))}
                </div>
                <div className="hidden lg:flex w-full lg:w-1/4 flex-row gap-4 overflow-hidden">

                </div>
            </div>
            <div className="w-full mt-6 py-4.5 px-6 text-center bg-white">
                <p className="text-sm font-semibold flex justify-center items-center gap-2 ">
                    <img src="https://cdn.grabon.in/gograbon/v8/icons/home-head-left.svg" alt="" /> 
                        India's Leading Coupons & Deals Marketplace 
                    <img src="https://cdn.grabon.in/gograbon/v8/icons/home-head-right.svg" alt="" /></p>
            </div>
        </section>
    );
}
