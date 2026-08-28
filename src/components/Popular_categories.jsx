const categories_list = [
  { "Category": "Flight Coupons" },
  { "Category": "Fashion Coupons" },
  { "Category": "Electonics Coupons" },
  { "Category": "Groceries Coupons" },
  { "Category": "Travel Coupons" },
  { "Category": "Medicines Coupons" },
  { "Category": "Bus Coupons" },
  { "Category": "Education Coupons" },
  { "Category": "Hotel Coupons" },
  { "Category": "Kitchen Appliances Coupons" },
  { "Category": "OTT Coupons" },
  { "Category": "Hosting Coupons" },
  { "Category": "Pizza Coupons" },
  { "Category": "Services Coupons" },
  { "Category": "Footwear Coupons" },
  { "Category": "Lingerie Coupons" },
  { "Category": "Entertainment Coupons" },
  { "Category": "Bike Renatl Coupons" },
  { "Category": "Furniture Coupons" },
  { "Category": "Recharge Coupons" },
  { "Category": "Utility Bill Payment Coupons" },
  { "Category": "Gifts & Flowers Coupons" },
  { "Category": "Jewellery Coupons" },
  { "Category": "Protien Supplements Coupons" },
  { "Category": "Lab Tests Coupons" },
  { "Category": "Eyewear Coupons" },
  { "Category": "Kids & Lifestyles Coupons" },
  { "Category": "Beauty Coupons" },
  { "Category": "Meat & Diary Coupons" }
];

function Popular_categories_list({ category }) {
  return (
    <a href="#" className="group flex flex-col justify-center items-center pl-8 hover:text-blue-500">
      <li className="flex items-center gap-2 list-none group-hover:underline">
        {category}
        <img src="https://cdn.grabon.in/gograbon/v8/icons/link-external-01.svg" alt="" loading="lazy" className="h-5 w-5 hidden group-hover:flex" />
      </li>
    </a>
  );
}

export default function Popular_categories() {
  return (
    <section className="w-full bg-white px-6 xl:px-0">
        <div className="w-full max-w-312 gap-6 mx-auto px-6 py-12 xl:px-0 flex flex-col">
            <h1 className="text-base lg:text-4xl font-sans font-semibold">
                Popular Categories
            </h1>
            <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-4 lg:grid-rows-7 text-black gap-4 text-base justify-items-start items-center">
                {categories_list.slice(0, 28).map((item, index) => (
                    <div
                    key={index}
                    className={index >= 6 ? "hidden lg:block" : ""}
                    >
                    <Popular_categories_list category={item.Category} />
                    </div>
                ))}
            </div>
        </div>
        <div className="mx-auto grid w-full max-w-312 grid-cols-1 gap-4 rounded-t-[10px] bg-[#E3EDFC] p-6 lg:h-32.5 lg:grid-cols-2 lg:gap-7.5 lg:pb-7.5">
          <div className="flex items-center justify-start gap-2.5 lg:h-19.5">
            <img src="https://cdn.grabon.in/gograbon/v8/icons/subscribe-icon.svg" alt="Grabon logo" loading="lazy" className="h-16 w-16 shrink-0"/>
            <div>
              <p className="m-0 font-sans text-[20px] font-bold leading-none text-[#191F2E] lg:text-[24px]">Subscribe Now</p>
              <p className="m-0 mt-1 font-sans text-[14px] leading-snug text-[#191F2E] lg:text-[16px] lg:leading-none"> Get The Latest & Best Coupons/Offers Alerts</p>
            </div>
          </div>

          <form className="flex w-full flex-col gap-3 lg:h-19.5 lg:flex-row lg:items-center lg:gap-2.5 lg:rounded-[10px] lg:bg-white lg:p-3 lg:pl-4">
            <div className="flex w-full items-center gap-2.5 rounded-[10px] bg-white p-3 pl-4 lg:flex-1 lg:rounded-none lg:bg-transparent lg:p-0">
              <img src="https://cdn.grabon.in/gograbon/v8/icons/sub-mail.svg" alt="Mail" loading="lazy" className="h-6 w-6 shrink-0"/>
              <input type="email" placeholder="Enter Email" required className="min-w-0 flex-1 border-none px-0.5 py-px  text-[16px] outline-none placeholder:text-left text-center"/>
            </div>
            <button type="submit" className="w-full shrink-0 rounded-[10px] border-none bg-[#3E80DD] px-4 py-4 text-[16px] font-bold text-white lg:ml-auto lg:w-auto lg:py-4.5">
              SUBSCRIBE NOW
            </button>
          </form>
      </div>
    </section>
  );
}