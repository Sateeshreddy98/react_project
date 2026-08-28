import { useState } from "react";

export default function Todays_top_coupons(){
    const [activeButton, setActiveButton] = useState("Most Used");

    const Coupons_card_data={
        "Most Used":[
            {id:"1", src:"https://cdn.grabon.in/gograbon/images/merchant/1773381297600/igp-logo.jpg", alt:"", descrpition:"Get Flat 50% OFF On Rakhi Value Packs | Selected Items", brand_name:"IGP", offer_value:"50"},
            {id:"2", src:"https://cdn.grabon.in/gograbon/images/merchant/1773381296954/hotstar-logo.jpg", alt:"", descrpition:"Flat 6% OFF On Annual Premium Plan", brand_name:"Hotstar", offer_value:"6"},
            {id:"3", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237562654/radisson-logo.jpg", alt:"", descrpition:"Resort Escapes: Stay Longer & Save Up to 35% OFF", brand_name:"Radisson", offer_value:"35"},
            {id:"4", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237644533/zee5-logo.jpg", alt:"", descrpition:"Annual Plan: Up To 58% OFF + Extra 15% OFF | Subscribe Now", brand_name:"ZEE5", offer_value:"73"},
            {id:"5", src:"https://cdn.grabon.in/gograbon/images/merchant/1773381281318/amazon-logo.jpg", alt:"",  descrpition:"🔥 Deal of the Day - Up To 90% OFF Electronics, Fashion, Home & More", brand_name:"Amazon", offer_value:"90"},
            {id:"6", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237605188/thebearhouse-logo.jpg", alt:"",  descrpition:"Additional 20% OFF On Your Orders Above Rs 2499", brand_name:"The Bear House", offer_name:"GRABON EXCLUSIVE"},
            // {src:"https://cdn.grabon.in/gograbon/images/merchant/1773237574186/savaari-logo.jpg", alt:"",  descrpition:"Save Up To Rs 500 On Your First Car Rental Booking", brand_name:"Savaari", offer_name:"GRABON EXCLUSIVE"},
            // {src:"https://cdn.grabon.in/gograbon/images/merchant/1773237620165/udemy-logo.jpg", alt:"",  descrpition:"Grab Up To 97% OFF Best-Selling Courses - All Categories", brand_name:"Udemy", offer_value:"97"},
            // {src:"https://cdn.grabon.in/gograbon/images/merchant/1773237467874/healthkart-logo.jpg", alt:"",  descrpition:"Sitewide: Up To 70% OFF + Extra Rs 150 OFF on Rs 1999+ Orders", brand_name:"HealthKart", offer_name:"SITEWIDE OFF"},
            // {src:"https://cdn.grabon.in/gograbon/images/merchant/1773237523413/muscleblaze-logo.jpg", alt:"",  descrpition:"GrabOn Exclusive: Up To 50% OFF + Extra Rs 150 OFF on Rs 1999+ | All Users", brand_name:"Muscleblaze", offer_name:"EXTRA RS 300 OFF"},
            // {src:"https://cdn.grabon.in/gograbon/images/merchant/1773237454244/freshbus-logo.jpg", alt:"",  descrpition:"Exclusive Offer - Flat 10% OFF On Travel Bookings | GRABFRESH100", brand_name:"Fresh Bus", offer_value:"10"},
            // {src:"https://cdn.grabon.in/gograbon/images/merchant/1773381317835/sunnxt-logo.jpg", alt:"",  descrpition:"Annual Premium Plan - Up To 40% OFF + Extra 10% OFF | Use: SUN10GRAB", brand_name:"SUNNXT", offer_name:"GRABON EXCLUSIVE"}
        ],

        "Travel":[
            {id:"1", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237386246/agoda-logo.jpg", alt:"", descrpition:"Ready Set Go - Up To 7% OFF On Your Bookings", brand_name:"Agoda", offer_value:"7"},
            {id:"2", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237409409/booking-logo.jpg", alt:"", descrpition:"Save 15% or More On Stays + Extra 10% OFF With Genius Membership", brand_name:"Booking.com", offer_name:"HOILDAY EXCLUSIVE"},
            {id:"3", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237508369/makemytrip-1-logo.jpg", alt:"", descrpition:"Exclusive Code: Flat Rs 500 OFF On Domestic Flights", brand_name:"MakeMyTrip", offer_value:"₹ 500"},
            {id:"4", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237565709/redrail-logo.jpg", alt:"", descrpition:"Exclusive Offer - Get Flat Rs 100 OFF On Your First Train Ticket Booking 🚆", brand_name:"Redrail", offer_name:"GRABON EXCLUSIVE"},
            {id:"5", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237387408/airindia-logo.jpg", alt:"", descrpition:"Flat Rs 300 Off per Passenger on All Domestic Routes, per Booking", brand_name:"Air India", offer_name:"GRABON EXCLUSIVE"},
            {id:"6", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237383366/abhibus-logo.jpg", alt:"", descrpition:"Exclusive Offer: Get 15% OFF + Up To Rs 350 Cashback On Online Bus🚍 Tickets", brand_name:"Abhibus", offer_name:"GRABON EXCLUSIVE"}
        ],

        "Recharge":[
            {id:"1", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237391314/amazonrecharge-logo.jpg", alt:"", descrpition:"Recharges/Bill Payments - Get Up To Rs 45 Cashback (Including All Operators) ", brand_name:"Amazon Recharge", offer_name:"CASHBACK"},
            {id:"2", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237566663/reliancejio-logo.jpg", alt:"", descrpition:"Get Your Jio SIM Home Delivery For FREE", brand_name:"Reliance Jio", offer_name:"FREE DELIVERY"},
            {id:"3", src:"https://cdn.grabon.in/gograbon/images/merchant/1773381281003/airtelrecharge-logo.jpg", alt:"", descrpition:"Get 30 Day Free Trial Of New Services With Airtel Black", brand_name:"Airtel Recharge", offer_name:"MOBILE OFFER"},
            {id:"4", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237631275/vodafonerecharge-logo.jpg", alt:"", descrpition:"Unlimited Calling Get Up to 1.5 GB data @ Rs 299", brand_name:"Vodafone Recharge", offer_name:"BEST PRICE"},
            {id:"5", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237546842/paytm-logo.jpg", alt:"", descrpition:"Get Rs 15 Cashback on Recharge & Bill Payments - All PPBL Selected Users", brand_name:"Paytm", offer_name:"RS.15 OFF"}
        ],

        "Fashion":[
            {id:"1", src:"https://cdn.grabon.in/gograbon/images/merchant/1774444164712/myntra-logo.jpg", alt:"", descrpition:"Sitewide Offer - Up To 90% OFF + Extra Rs 300 OFF on Orders | New User", brand_name:"Myntra", offer_value:"90"},
            {id:"2", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237388178/ajio-logo.jpg", alt:"", descrpition:"New To Ajio ? - Flat 30% OFF On Your First Purchase", brand_name:"AJIO", offer_value:"30%"},
            {id:"3", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237469818/hm-logo.jpg", alt:"", descrpition:"Sitewide Sale - Get Up To 70% OFF Selected Styles | Women's, Men's, Kids", brand_name:"H&M", offer_name:"Sitewide Off"},
            {id:"4", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237530643/newme-logo.jpg", alt:"", descrpition:"Sitewide Offer - Grab Up To 80% OFF On Your Orders", brand_name:"NewMe", offer_value:"80"},
            {id:"5", src:"https://cdn.grabon.in/gograbon/images/merchant/1773381281318/amazon-logo.jpg", alt:"", descrpition:"Fashion Store - Avail Up To 80% OFF On Clothing, Footwear & More", brand_name:"Amazon", offer_value:"90"},
            {id:"6", src:"https://cdn.grabon.in/gograbon/images/merchant/1773237641718/xyxxcrew-logo.jpg", alt:"", descrpition:"Flat 15% OFF On Sitewide Purchase Of Rs 999", brand_name:"XYXX Crew", offer_name:"Sitewide Off"}
        ],

        "Food":[
            {id:"1", src: "https://cdn.grabon.in/gograbon/images/merchant/1773237436092/dominos-logo.jpg", alt: "Dominos Offers", descrpition: "Get Rs 90 Instant Discount + Rs 25 Cashback On Your Orders", brand_name: "Dominos", offer_value: "90" },
            {id:"2", src: "https://cdn.grabon.in/gograbon/images/merchant/1773381290056/eatfit-logo.jpg", alt: "Eat Fit Offers", descrpition: "Sitewide Offer - Up to 60% OFF | All Users", brand_name: "Eat Fit", offer_name: "SITEWIDE OFF" },
            {id:"3", src: "https://cdn.grabon.in/gograbon/images/merchant/1773237542587/ovenstory-logo.jpg", alt: "Oven Story Offers", descrpition: "Half & Half Pizzas - Starting At Rs 349", brand_name: "Oven Story", offer_name: "HOT DEAL" }
        ],

        "Electronics":[
            {id:"1", src: "https://cdn.grabon.in/gograbon/images/merchant/1773237407989/boat-logo.jpg", alt: "boAt Offers", descrpition: "GrabOn Exclusive: Up To 75% OFF + Extra Rs 500 OFF Sitewide", brand_name: "boAt", offer_value: "₹500"},
            {id:"2", src: "https://cdn.grabon.in/gograbon/images/merchant/1773381311755/reliancedigital-logo.jpg", alt: "Reliance Digital Offers", descrpition: "Sitewide Offer: Up To 90% OFF On All Orders", brand_name: "Reliance Digital", offer_name: "SITEWIDE OFF"},
            {id:"3", src: "https://cdn.grabon.in/gograbon/images/merchant/1773237498362/lenovo-logo.jpg", alt: "Lenovo Offers", descrpition: "🔥Special Offer: Up To 50% OFF + ₹20K Cashback + Extra 7% (Customized PCs)", brand_name: "Lenovo", offer_value: "50"},
            {id:"4", src: "https://cdn.grabon.in/gograbon/images/merchant/1773237431657/dell-logo.jpg", alt: "Dell Offers", descrpition: "Laptops  - Up To 40% OFF + Extra 5% OFF On Your Purchases", brand_name: "Dell", offer_name: "Today's Special"},
            {id:"5", src: "https://cdn.grabon.in/gograbon/images/merchant/1773381281318/amazon-logo.jpg", alt: "Amazon Offers", descrpition: "📱 Electronics - Up To 90% OFF (New & Trending Deals)", brand_name: "Amazon", offer_value: "90%"},
            {id:"6", src: "https://cdn.grabon.in/gograbon/images/merchant/1773381311755/reliancedigital-logo.jpg", alt: "Reliance Digital Offers", descrpition: "Sitewide Offer: Up To 90% OFF On All Orders", brand_name: "Reliance Digital", offer_name: "SITEWIDE OFF"}
        ],

        "OTT":[
            {id:"1", src: "https://cdn.grabon.in/gograbon/images/merchant/1773237470017/hoichoi-logo.jpg", alt: "Hoichoi Offers", descrpition: "Monsoon Exclusive - Grab Up To 33% OFF + Flat 20% OFF On Your Orders", brand_name: "Hoichoi", offer_name: "MONSOON SALE"},
            {id:"2", src: "https://cdn.grabon.in/gograbon/images/merchant/1773237644533/zee5-logo.jpg", alt: "ZEE5 Offers", descrpition: "Flat 15% OFF On Your Subscription Plan", brand_name: "ZEE5", offer_value: "15"},
            {id:"3", src: "https://cdn.grabon.in/gograbon/images/merchant/1773237501169/lionsgateplay-logo.jpg", alt: "Lionsgateplay Offers", descrpition: "Get Flat 20% OFF On Yearly Plan", brand_name: "Lionsgateplay", offer_value: " 20"},
            {id:"4", src: "https://cdn.grabon.in/gograbon/images/merchant/1773237587603/sonyliv-logo.jpg", alt: "SonyLIV Offers", descrpition: "Yearly Premium Plan - Get 10% OFF On Your Subscription", brand_name: "SonyLIV", offer_value: "10"},
            {id:"5", src: "https://cdn.grabon.in/gograbon/images/merchant/1773381319480/timesprime-logo.jpg", alt: "Times Prime Offers", descrpition: "Flat Rs 1100 OFF On Times Prime Power Pack Plan", brand_name: "Times Prime", offer_value: "₹1100"},
            {id:"6", src: "https://cdn.grabon.in/gograbon/images/merchant/1774532547482/chaupal-logo.jpg", alt: "Chaupal Offers", descrpition: "Subscribe To Annual Gold Plan & Flat 10% OFF", brand_name: "Chaupal", offer_name: "GRABON EXCLUSIVE"}
        ]
    }

    const button_details=[
        {src:"https://cdn.grabon.in/gograbon/v8/icons/most-used-default-v2.svg", alt:"", button_name:"Most Used"},
        {src:"https://cdn.grabon.in/gograbon/v8/icons/travel-tab-v2.svg", alt:"", button_name:"Travel"},
        {src:"https://cdn.grabon.in/gograbon/v8/icons/recharge-tab-v2.svg", alt:"", button_name:"Recharge"},
        {src:"https://cdn.grabon.in/gograbon/v8/icons/fashion-tab-v2.svg", alt:"", button_name:"Fashion"},
        {src:"https://cdn.grabon.in/gograbon/v8/icons/food-tabs-v2.svg", alt:"", button_name:"Food"},
        {src:"https://cdn.grabon.in/gograbon/v8/icons/electronics-tab-v2.svg", alt:"", button_name:"Electronics"},
        {src:"https://cdn.grabon.in/gograbon/v8/icons/entertainment-default.svg", alt:"", button_name:"OTT"}
    ]

    function Coupons_card({card_data}){
        if(card_data.offer_value){
            return(
                <div className="w-full h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center p-6 gap-5 justify-center flex-1">
                        <div className="w-[35%] flex shrink-0 flex-col items-center justify-center text-center">
                            <small className="text-[15px] font-semibold leading-tight text-[#3f7fe0]"> FLAT </small>
                            <strong className="text-3xl font-bold leading-tight text-[#3f7fe0]"> {card_data.offer_value}% </strong>
                            <small className="text-[15px] font-semibold leading-tight text-[#3f7fe0] sm:text-sm"> OFF </small>
                        </div>
                        <p className="m-0 pl-6 text-base font-medium leading-6 text-gray-800 sm:pl-6 sm:text-base border-l border-dashed border-gray-300"> {card_data.descrpition} </p>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-t border-gray-200 p-3">
                        <div className="flex shrink-0 items-center">
                            <img src={card_data.src} alt={card_data.brand_name} loading="lazy" className="h-12 w-24 object-cover rounded-lg"/>
                        </div>
                        <a href="#" className="flex items-center gap-1 text-right text-sm font-medium text-[#3f7fe0] sm:text-base">
                            <span>View All {card_data.brand_name} Coupons</span>
                            <img src="https://cdn.grabon.in/gograbon/v8/icons/link-external-01.svg" alt="" loading="lazy" className="h-4 w-4 shrink-0" />
                        </a>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="w-full h-full flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center p-6 gap-5 justify-center flex-1">
                        <div className="w-[35%] flex shrink-0 items-center justify-center text-center">
                            <span className="text-base font-bold uppercase leading-tight text-[#3f7fe0]">
                                {card_data.offer_name}
                            </span>
                        </div>
                        <p className="m-0 pl-4 text-base font-medium leading-6 text-gray-800 border-l border-dashed border-gray-300">{card_data.descrpition}</p>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-t border-gray-200 px-4 py-3">
                        <div className="w-[35%] flex shrink-0 items-center">
                            <img src={card_data.src} alt={card_data.brand_name} className="h-12 w-24 object-cover" />
                        </div>
                        <a href="#" className="flex min-w-0 items-center gap-1 text-right text-sm font-medium text-[#3f7fe0] sm:text-base">
                            <span className="truncate">View All {card_data.brand_name} Coupons</span>
                            <img src="https://cdn.grabon.in/gograbon/v8/icons/link-external-01.svg" alt="" loading="lazy" className="h-4 w-4 shrink-0"/>
                        </a>
                    </div>
                </div>
            )
        }
    }

    function Top_coupons_buttons({details}){

        const isActive = activeButton === details.button_name;

        return(
            <div className="flex flex-row gap-3 h-13">
                <button
                    type="button"
                    onClick={()=>setActiveButton(details.button_name)}
                    className={`flex flex-row justify-center items-center border border-[#afa0a0a6] gap-2 py-1.5 px-6 text-sm lg:text-base rounded-3xl whitespace-nowrap 
                        ${isActive ? "bg-[#4685E8] text-white": "bg-white text-[#191F2E]" }`}>
                    <img
                        src={details.src}
                        alt=""
                        className={`h-5 w-5 ${isActive ? "brightness-0 invert" : ""}`}
                    />
                    {details.button_name}
                </button>
            </div>
        )
    }

    return(
        <section className="w-full bg-[#F7F7F8] py-12">
            <div className="w-full max-w-312 px-6 xl:px-0  mx-auto flex flex-col gap-5">
                <a href="#"><img src="https://cdn.grabon.in/gograbon/images/banners/banner-1787204573014.jpg" alt="" className="rounded-xl h-15 lg:h-auto"/></a>
                <h1 className="text-base lg:text-[32px] text-[#191F2E] font-bold font-sans">Today's Top Coupons & Offers</h1>
                <div className="w-full flex flex-row overflow-scroll scrollbar-none gap-3">
                    {button_details.map((details)=>(
                        <Top_coupons_buttons
                            key={details.button_name}
                            details={details}
                        />
                    ))}
                </div>
                <div className="grid lg:grid-cols-3  gap-6 px-2">
                    {Coupons_card_data[activeButton]?.map((card_data)=>(
                        <Coupons_card
                            key={card_data.id}
                            card_data={card_data}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-base lg:text-[32px] font-semibold font-sans">Trending Offer</h1>
                    <a href="#"><img src="https://cdn.grabon.in/gograbon/images/union/1787210229512.jpg" alt="" className="rounded-xl h-15 lg:h-auto"/></a>
                </div>
            </div>
            
        </section>
    )
}