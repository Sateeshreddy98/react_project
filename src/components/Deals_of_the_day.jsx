const Cards_data=[
    {id:"1", src:"https://cdn.grabon.in/gograbon/images/deal/1787405608510/igp-personalized-pearl-floral-rakhi-set.png", alt:"Floral-rakhi set", logo_scr:"https://cdn.grabon.in/gograbon/images/merchant/1773381297600/igp-logo.jpg", logo_alt:"IGP",discount:"43",product_name:" Personalized Pearl Floral Rakhi Set ", merchant_name:"IGP", discounted_price:"395", actual_price:"695"},
    {id:"2", src:"https://cdn.grabon.in/gograbon/images/deal/1785504614978/myntra-moda-rapido-blue-striped-fit-flare-dress.jpg", alt:"Blue striped flare dress", logo_scr:"https://cdn.grabon.in/gograbon/images/merchant/1774444164712/myntra-logo.jpg", logo_alt:"Myntra",discount:"75",product_name:" Moda Rapido Blue Striped Fit & Flare Dress", merchant_name:"Myntra", discounted_price:"290", actual_price:"1140"},
    {id:"3", src:"https://cdn.grabon.in/gograbon/images/deal/1786075805906/amazon-technovibes-foldable-study-table.jpg", alt:"Foldable Study Table", logo_scr:"https://cdn.grabon.in/gograbon/images/merchant/1773381281318/amazon-logo.jpg", logo_alt:"Amazon",discount:"44",product_name:" TECHNOVIBES Foldable Study Table ", merchant_name:"Amazon", discounted_price:"845", actual_price:"1499"},
    {id:"4", src:"https://cdn.grabon.in/gograbon/images/deal/1785503712089/ajio-fabflee-x-ag-men-patterned-regular-fit-polo-t-shirt.jpg", alt:"Polo T-shirt", logo_scr:"https://cdn.grabon.in/gograbon/images/merchant/1773237388178/ajio-logo.jpg", logo_alt:"AJIO",discount:"75",product_name:" FABFLEE X AG Men Patterned Regular Fit Polo T-Shirt ", merchant_name:"AJIO", discounted_price:"400", actual_price:"1599"},
]

function Deals_of_the_day_card({data}){
   return (
        <div className="w-full max-w-58 lg:max-w-none shrink-0 snap-center lg:w-auto lg:shrink h-107.5 flex flex-col items-center pt-3.75 cursor-pointer group">
            <div className="relative h-37.5 lg:h-50 lg:group-hover:h-37.5 w-[90%] mx-2 p-6 z-5 bg-[#E0E8F6] flex items-center justify-center rounded-[10px] rounded-tl-[80px] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="absolute -top-3.75 -left-3.75 h-15.5 w-15.5 rounded-full z-10"> <img src={data.logo_scr} alt={data.logo_alt} className="h-15.5 w-15.5 m-0 object-contain rounded-full" /> </span>
                <span className="h-full w-full flex flex-col justify-center items-center lg:group-hover:h-23.75 lg:group-hover:w-23.75 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"> <img src={data.src} alt={data.alt} className="w-31.5 h-31.5 object-contain rounded-[20px]" /> </span>
            </div>
            <p className="-mt-1.5 z-10 bg-[#3E80DD] text-white border-none px-6 py-2 rounded-[5px] font-bold"> {data.discount} % OFF </p>
            <div className="sticky h-75 lg:h-62.5 lg:group-hover:h-75 flex justify-center items-center flex-col -mt-25 px-2.5 pb-2.5 pt-25 lg:group-hover:pt-17.5 rounded-[10px] border border-[#E0E8F6] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
                <span className="text-[18px] font-sans block text-center max-w-full text-[#191F2E] font-medium"> {data.product_name} </span>
                <span className="text-sm text-[#9FA3AC]"> By {data.merchant_name} </span>
                <div className="text-[32px] font-bold flex flex-row gap-3 justify-center items-center">
                    <span>₹{data.discounted_price}</span>
                    <span className="text-[20px] font-sans line-through font-thin"> ₹{data.actual_price} </span>
                </div>
                <span className="hidden lg:group-hover:block h-px w-full border-b border-dashed border-[#191F2E]"></span>
                <a href="" className="text-[#3E80DD] lg:hidden decoration-none">Grab Now</a>
                <a href="#" className="no-underline">
                    <button className="mt-3 hidden lg:group-hover:block group-hover:-mb-5 px-20 py-3.75 text-sm font-bold rounded-[5px] bg-[#3E80DD] text-white border-none cursor-pointer">
                        BUY NOW
                    </button>
                </a>
            </div>
        </div>
    )
}

export default function Deals_of_the_day(){
    return(
        <section className="w-full box-border bg-white font-sans">
            <div className="w-full max-w-312 px-6 xl:px-0 py-12 m-auto gap-6 flex flex-col">
                <div className="flex ">
                    <h1 className="text-base lg:text-[32px] text-[#191F2E] font-bold">Deals Of The Day</h1>          
                    <a href="" className="group hidden h-12 px-4 ml-auto lg:flex justify-center items-center gap-3 rounded-lg transition-all duration-700 ease-in-out hover:bg-[#E3EDFC]">
                        <span className="text-[#6d9be4] transition-all duration-700 ease-in-out group-hover:underline">View More Deals</span>
                        <img src="https://cdn.grabon.in/gograbon/v8/icons/long-arrow-left-v2.svg"  alt=""  className="rotate-180 p-3 rounded-full bg-[#E3EDFC] transition-all ease-in-out" />
                    </a>
                </div>
                
               <div className="relative w-full flex flex-row overflow-x-scroll scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:overflow-visible gap-4">
                    {Cards_data.map((data) => (
                        <Deals_of_the_day_card
                        key={data.id}
                        data={data}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}