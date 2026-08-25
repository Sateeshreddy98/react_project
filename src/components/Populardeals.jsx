export default function Populardeals() {

    const Populardealscard_details = [
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1754378462416.jpg", alt: "", logo: "https://cdn.grabon.in/gograbon/images/merchant/1755522568013.jpg", logo_alt: "", offer_name: "GRABON EXCLUSIVE",  offer_descprition: "GRAB500 Code - 12% OFF + 12% Cashback (Max Up To RS 500 Combined) | New Users" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1787406071809.png", alt: "", logo: "https://cdn.grabon.in/gograbon/images/merchant/1722687713463.jpg", logo_alt: "", offer_name: "FLAT ₹300 OFF", offer_descprition: "FLAT RS 300 OFF On Personalized Pearl Floral Rakhi Set With Mug Hamper" },
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1784172390830.jpg", alt: "", logo: "https://cdn.grabon.in/gograbon/images/merchant/1683118673244.jpg",  logo_alt: "", offer_name: "Back To College Sale", offer_descprition: "Dell Back To College Sale - Up To 40% OFF + Extra 5% OFF"},
        { src: "https://cdn.grabon.in/gograbon/images/banners/banner-1780250929381.png", alt: "", logo: "https://cdn.grabon.in/gograbon/images/merchant/1761828655846.jpg", logo_alt: "", offer_name: "GRABON EXCLUSIVE", offer_descprition: "Grab Up To RS 500 On Your First Car Rental Booking" }
    ]

    function Populardealscard({ details }) {
        return (
            <div className="w-full h-89 border bg-white border-white flex flex-col rounded-xl">
                <div className="relative w-full h-[50%] transition-all duration-800 ease-in-out hover:h-[40%]">
                    <img src={details.src} alt={details.alt} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute w-12 h-12 lg:w-20 lg:h-20 left-3 -bottom-3 z-10">
                        <span><img src={details.logo} alt={details.logo_alt} className="w-full h-full rounded-full" /></span>
                    </div>
                </div>
                <div className="pt-8 px-3 pb-3 flex flex-col gap-2">
                    <h4 className="text-base lg:text-2xl text-blue-500 font-bold lg:text-center"> {details.offer_name} </h4>
                    <p className="text-sm lg:text-base"> {details.offer_descprition} </p>
                    <button className="lg:hidden mb-1.5 text-blue-500 font-semibold"> GRAB NOW </button>
                    <div className="flex flex-col justify-center items-center">
                        <div className="hidden border-t border-dashed w-full my-0 mx-2"></div>
                        <button className="hidden justify-center items-center w-[95%] p-2.5 px-12 my-0 mx-1.5 font-extrabold text-white rounded-lg bg-[#3E80DD] border-none cursor-pointer"> REDEEM NOW </button>
                    </div>
                </div>
               </div>
        );
    }

    return (
        <section className="w-full bg-[#F7F7F8]">
            <div className="w-full max-w-312 px-6 py-12 mx-auto flex flex-col gap-5">
                <h1 className="text-base lg:text-4xl font-sans font-semibold"> Popular Offers of the Day</h1>
                <div className="grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row gap-4">
                    {Populardealscard_details.map((details, index) => (
                        <Populardealscard
                            key={index}
                            details={details}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}