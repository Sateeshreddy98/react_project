import { useState } from "react";

export default function Popularstores(){
    let index=0;
    const store_cards_details=[
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1774444164712/myntra-logo.jpg",alt:"Myntra",coupons:"54", brand_name:"Myntra"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237387408/airindia-logo.jpg",alt:"Air India",coupons:"86", brand_name:"Air India"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237431657/dell-logo.jpg",alt:"Dell",coupons:"17", brand_name:"Dell"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237388178/ajio-logo.jpg",alt:"AJIO",coupons:"44", brand_name:"AJIO"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237619521/uber-logo.jpg",alt:"UBER",coupons:"22", brand_name:"UBER"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237508369/makemytrip-1-logo.jpg",alt:"MakeMyTrip",coupons:"37", brand_name:"MakeMyTrip"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237620165/udemy-logo.jpg",alt:"Udemy",coupons:"33", brand_name:"Udemy"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237386246/agoda-logo.jpg",alt:"Agoda",coupons:"62", brand_name:"Agoda"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237527006/namecheap-logo.jpg",alt:"Namecheap",coupons:"32", brand_name:"Namecheap"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237405950/bigrock-logo.jpg",alt:"BigRock",coupons:"65", brand_name:"BigRock"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237535375/nykaa-logo.jpg",alt:"Nykaa",coupons:"53", brand_name:"Nykaa"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237472675/hpshopping-logo.jpg",alt:"HP Shopping",coupons:"44", brand_name:"HP Shopping"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237385257/adidas-logo.jpg",alt:"Adidas",coupons:"10", brand_name:"Adidas"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237565709/redrail-logo.jpg",alt:"Redrail",coupons:"15", brand_name:"Redrail"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237610541/thrillophilia-logo.jpg",alt:"Thillophilia",coupons:"21", brand_name:"Thillophilia"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773381281318/amazon-logo.jpg",alt:"Amazon",coupons:"70", brand_name:"Amazon"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773826357590/flipkart-logo.jpg",alt:"Flipkart",coupons:"36", brand_name:"Flipkart"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237523413/muscleblaze-logo.jpg",alt:"MuscleBlaze",coupons:"86", brand_name:"MuscleBlaze"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773381297600/igp-logo.jpg",alt:"IGP",coupons:"38", brand_name:"IGP"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237461389/godaddy-logo.jpg",alt:"GoDaddy",coupons:"27", brand_name:"GoDaddy"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237469818/hm-logo.jpg",alt:"H&M",coupons:"21", brand_name:"H&M"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237407989/boat-logo.jpg",alt:"Boat",coupons:"66", brand_name:"Boat"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237444008/etihadairways-logo.jpg",alt:"Etiha Airways",coupons:"29", brand_name:"Etiha Airways"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237559673/puma-logo.jpg",alt:"Puma",coupons:"20", brand_name:"Puma"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237481657/ixigo-logo.jpg",alt:"Ixigo",coupons:"21", brand_name:"Ixigo"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237587603/sonyliv-logo.jpg",alt:"SonyLiv",coupons:"10", brand_name:"SonyLiv"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237565153/redbus-logo.jpg",alt:"RedBus",coupons:"31", brand_name:"RedBus"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237583722/skyscanner-logo.jpg",alt:"Skyscanner",coupons:"9", brand_name:"Skyscanner"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237560976/qatarairways-logo.jpg",alt:"Qatar Airways",coupons:"19", brand_name:"Qatar Airways"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237531284/nike-logo.jpg",alt:"Nike",coupons:"24", brand_name:"Nike"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237458517/gharsoaps-logo.jpg",alt:"Gharsoaps",coupons:"30", brand_name:"Gharsoaps"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237383366/abhibus-logo.jpg",alt:"Abhibus",coupons:"68", brand_name:"Abhibus"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237420946/cleartrip-logo.jpg",alt:"Cleartrip",coupons:"54", brand_name:"Cleartrip"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237409409/booking-logo.jpg",alt:"Booking.com",coupons:"21", brand_name:"Booking.com"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773237620974/ultahost-logo.jpg",alt:"Ultahost",coupons:"13", brand_name:"Ultahost"},
        {id:index+1,src:"https://cdn.grabon.in/gograbon/images/merchant/1773381302341/lovableai-logo.jpg",alt:"Lovable Ai",coupons:"24", brand_name:"Lovable Ai"},
    ]

    const brand_per_slide = 12;
    const totalPages = Math.ceil(store_cards_details.length / brand_per_slide);
    const [page, setPage] = useState(0);
 
    const pages = Array.from({ length: totalPages }, (_, i) =>
        store_cards_details.slice(i * brand_per_slide, i * brand_per_slide + brand_per_slide)
    );

    function goPrev() {
        setPage((p) => Math.max(p - 1, 0));
    }

    function goNext() {
        setPage((p) => Math.min(p + 1, totalPages - 1));
    }

    function Merchnat_of_the_month(){
        return(
            <a href="#" className="group inline-block w-75 h-130 rounded-md bg-[url('https://cdn.grabon.in/gograbon/v8/img/popular-stores-bg.png')] justify-center overflow-hidden">
                <p className="w-full flex flex-col justify-self-start text-2xl text-white font-sans font-bold h-49.5 px-6 pt-8 pb-6 gap-2 transition-all duration-700 ease-in-out group-hover:h-30"> 
                    <span className="text-[#D1D331]">MOST POPULAR</span>
                    Store Of The Month
                </p>
                <img src="https://cdn.grabon.in/gograbon/images/merchant/1773237471658/hostinger-logo.jpg" alt=""  className="w-72.5 h-47.5 rounded-lg"/>
                <div className="flex justify-center items-center text-white gap-5 list-none mt-5">
                   <li className=" flex flex-col justify-center items-center p-1.5 gap-5 w-50%" ><img src="https://cdn.grabon.in/gograbon/v8/icons/most-popular-tag.svg" alt="" className="w-5 h-5"/> 38 Coupons </li>
                   <li className="border-l border-dashed border-white flex flex-col justify-center items-center p-1.5 pl-7.5 gap-5 w-50%" ><img src="https://cdn.grabon.in/gograbon/v8/icons/most-popular-offer.svg" alt="" className="w-5 h-5"/> 8 Offers </li> 
                </div>
                <div className="hidden text-white border-t border-[#c5c5c5] border-dashed w-[80%] group-hover:flex justify-center items-center mx-auto mt-4 transition-all duration-700 ease-in-out">
                    <button className="w-full cursor-pointer text-black font-semibold px-10 py-4 mt-4 bg-[#D1D331] rounded-lg"> VISIT STORE </button>
                </div>
            </a>
        )
    }

    function Stores_cards({store}){
        return(
           <div className="group w-full h-full transition-all duration-700 ease-in-out">
                <a href="#" className="flex w-full flex-col items-center no-underline transition-all duration-700 ease-in-out">
                    <div className="relative flex h-18 lg:h-25.5 w-full items-center justify-center overflow-hidden rounded-[9px] border border-[#e1e4e8] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.10)] group-hover:bg-blue-400 transition-all duration-700 ease-in-out">
                        <img src={store.src} alt={store.alt} className="h-[75%] w-[75%] object-contain group-hover:hidden transition-all duration-700 ease-in-out"/>
                        <div className="hidden group-hover:flex flex-col justify-center items-center text-white transition-all duration-700 ease-in-out">
                            <p className="text-xl  font-semibold ">{store.coupons}</p>
                            <p> Coupons </p>
                        </div>
                    </div>
                   <p className="relative mt-3.75 flex flex-row items-center justify-center gap-2 text-center font-sans text-[16px] font-normal text-[#252936] underline decoration-transparent underline-offset-2 transition-all duration-300 group-hover:text-blue-500 group-hover:decoration-blue-500">
                        {store.brand_name}
                        <img src="https://cdn.grabon.in/gograbon/v8/icons/link-external-01.svg" alt="" className="w-0 -translate-x-1 opacity-0 transition-all duration-300 ease-out group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100"/>
                    </p>
                </a>
            </div> 
        )
    }

    return(
        <section className="w-full bg-white py-12">
            <div className="w-full max-w-312 px-6 xl:px-0 m-auto flex flex-col gap-6">
                <div className="w-full max-w-312 flex">
                    <h1 className="text-base lg:text-4xl font-sans font-semibold whitespace-nowrap"> Popular Stores </h1>
                    <div className="w-full inline-flex items-center justify-end gap-2">
                        <button onClick={goPrev} disabled={page === 0} type="button"
                            className="disabled:opacity-30 disabled:cursor-not-allowed transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer" >
                            <img src="https://cdn.grabon.in/gograbon/v8/icons/chevron-left.svg" alt="Previous page" />
                        </button>
                        <button onClick={goNext}
                            disabled={page === totalPages - 1} type="button"
                            className="disabled:opacity-30 disabled:cursor-not-allowed transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer">
                            <img src="https://cdn.grabon.in/gograbon/v8/icons/chevron-right.svg" alt="Next page" />
                        </button>
                    </div>
                </div>
                <div className="flex gap-6">
                    <aside className="hidden lg:block">
                        <Merchnat_of_the_month />
                    </aside>
                    <div className="w-full overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out"
                            style={{ width: `${totalPages * 100}%`, transform: `translateX(-${page * (100 / totalPages)}%)`, }} >
                            {pages.map((pageStores, pageIndex) => (
                                <div
                                    key={pageIndex}
                                    className="grid grid-cols-3 grid-rows-3 lg:grid-cols-4 lg:grid-rows-3 gap-6 px-0"
                                    style={{ width: `${100 / totalPages}%` }} >
                                    {pageStores.map((store) => (
                                        <Stores_cards
                                            key={store.id}
                                            store={store}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}