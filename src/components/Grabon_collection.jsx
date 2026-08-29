import { useState } from "react";

const Grabon_collection_card_data = [
    {id:"1", src:"https://cdn.grabon.in/gograbon/images/banners/banner-1785738536751.jpg", alt:"", logo_src:"https://cdn.grabon.in/gograbon/images/merchant/1773237619521/uber-logo.jpg", logo_alt:"", brand_name:"Uber", offer_title_1:"FLAT 50% OFF", offer_desc_1:"🏍️ Uber Moto: Flat 50% OFF on Bike Rides | New User", offer_title_2:"FLAT 50% OFF", offer_desc_2:"🛺 Uber Auto: Flat 50% OFF on Auto Bookings (Most Popular)", offer_title_3:"FLAT 50% OFF", offer_desc_3:"🚗Flat 50% OFF First 3 Uber Rides - Up to ₹100 Per Ride"},
    {id:"2", src:"https://cdn.grabon.in/gograbon/images/banners/banner-1784531848851.jpg", alt:"", logo_src:"https://cdn.grabon.in/gograbon/images/merchant/1773237462578/googleworkspace-logo.jpg", logo_alt:"", brand_name:"Google Workspace", offer_title_1:"GRABON EXCLUSIVE", offer_desc_1:"Get 12% Off On Business Standard Subscription For First 3 Months", offer_title_2:"FLAT 10% OFF", offer_desc_2:"Unlock 10% OFF on Business Starter Plan Today", offer_title_3:"FLAT 15% OFF", offer_desc_3:"Enjoy 15% OFF On Business Plus Plans for the first 3 months | New Users"},
    {id:"3", src:"https://cdn.grabon.in/gograbon/images/banners/banner-1787741468218.jpg", alt:"", logo_src:"https://cdn.grabon.in/gograbon/images/merchant/1773237425938/coursera-logo.jpg", logo_alt:"", brand_name:"Coursera", offer_title_1:"EXTRA 20% OFF", offer_desc_1:"Grab An Extra 20% OFF on Plus Annual Plan", offer_title_2:"FREE TRAIL", offer_desc_2:"7-Day Free Trial: Access Everything | Cancel Day 7", offer_title_3:"FLAT 40% OFF", offer_desc_3:"Coursera Plus Monthly - Flat 40% OFF + 7-Day FREE Trial"},
    {id:"4", src:"https://cdn.grabon.in/gograbon/images/banners/banner-1776422638642.jpg", alt:"", logo_src:"https://cdn.grabon.in/gograbon/images/merchant/1773237574186/savaari-logo.jpg", logo_alt:"", brand_name:"Savaari", offer_title_1:"UP TO RS 500 OFF", offer_desc_1:"Grab Up To Rs 500 OFF On Your First Booking Via App", offer_title_2:"APP OFFER", offer_desc_2:"Grab Up To Rs 500 OFF On Your First App Booking", offer_title_3:"GRABON EXCLUSIVE", offer_desc_3:"Grab Up To Rs 500 OFF On Your First Car Rental Booking!"},
]

function Grabon_collection_card({ data }) {
    const [currentOffer, setCurrentOffer] = useState(0);
    const offers = [
        { title: data.offer_title_1, description: data.offer_desc_1 },
        { title: data.offer_title_2, description: data.offer_desc_2 },
        { title: data.offer_title_3, description: data.offer_desc_3 },
    ];

    const nextOffer = (e) => {
        e.stopPropagation();
        setCurrentOffer((prev) =>
            prev === offers.length - 1 ? 0 : prev + 1
        );
    };

    const previousOffer = (e) => {
        e.stopPropagation();
        setCurrentOffer((prev) =>
            prev === 0 ? offers.length - 1 : prev - 1
        );
    };

    return (
        <div className="group relative grid h-66 lg:h-114 cursor-pointer grid-rows-[1fr_3fr] overflow-hidden rounded-[10px] border border-white bg-white p-1 lg:p-2">
            <div className="flex h-22.5 items-center justify-start gap-5 pl-0 lg:px-4 pb-4 pt-3">
                <span className="rounded-full h-12.5 w-12.5 lg:h-15.5 lg:w-15.5">
                    <img src={data.logo_src} alt={data.logo_alt} loading="lazy" className="w-full h-full object-contain rounded-full"/>
                </span>
                <span className="text-[12px] lg:text-[16px] text-[#191F2E]"> {data.brand_name} </span>
            </div>
            <div className="h-auto w-auto lg:h-87.5 lg:w-full overflow-hidden rounded-[10px]">
                <img src={data.src} alt={data.alt } loading="lazy" className="h-full w-full rounded-[10px] transition-transform duration-350 ease-in-out group-hover:-translate-y-2" />
            </div>
            <div className="absolute bottom-2 lg:right-2 flex h-35 lg:h-82.5 w-full translate-y-full flex-col items-center px-2 lg:px-6 pt-2 text-center justify-center rounded-[20px] bg-white opacity-0 invisible transition-all duration-350 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
                <span className="text-sm lg:text-[18px] font-bold text-[#3E80DD]"> {offers[currentOffer].title} </span>
                <p className="text-[12px] text-center lg:text-[16px] text-[#191F2E]">{offers[currentOffer].description} </p>
                <div className="mt-5 flex items-center justify-center gap-6 ">
                    <button onClick={previousOffer} className="hidden lg:block text-[28px] font-light text-[#9CA3AF]"> ‹ </button>
                    <div className="flex items-center gap-2">
                        {offers.map((offer, index) => (
                            <button key={index} onClick={(e) => { e.stopPropagation(); setCurrentOffer(index); }} className={`rounded-full transition-all duration-300 ${currentOffer === index ? "h-1.5 w-7 bg-[#B4C928]" : "h-1.5 w-1.5 bg-[#9CA3AF]"}`} />
                        ))}
                    </div>
                    <button onClick={nextOffer} className="hidden lg:block text-[28px] font-light text-[#191F2E]"> › </button>
                </div>
                <button className="mt-5 w-[90%] rounded-[5px] bg-[#3E80DD] px-3 lg:px-8 py-1 lg:py-2.5 text-[12px] lg:text-[16px] font-semibold text-white text-center"> REDEEM </button>
            </div>
        </div>
    )
}

export default function Grabon_collection() {
    return (
        <section className="w-full bg-[#F7F7F8] py-12">
            <div className="w-full max-w-312 px-6 xl:px-0 mx-auto flex flex-col gap-5">
                <h1 className="text-base lg:text-[32px] text-[#191F2E] font-semibold"> GrabOn Collections </h1>
                <div className="grid grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 pb-2.5 px-0.75 pt-1">
                    {Grabon_collection_card_data.map((item) => (
                        <Grabon_collection_card key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}