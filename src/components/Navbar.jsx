export default function Navbar(){
    const navLeftItems = [
        { icon: "https://cdn.grabon.in/gograbon/v8/icons/header-store-icon-v2.png", label: "Stores" },
        { icon: "https://cdn.grabon.in/gograbon/v8/icons/header-category-icon-v2.png", label: "Categories" },
        { icon: "https://cdn.grabon.in/gograbon/v8/icons/calendar-v3.svg", label: "August Sale" },
        { icon: "https://cdn.grabon.in/gograbon/v8/icons/header-blog-icon-v2.png", label: "Indulge" },
    ];
    const navLinkLeftClass ="h-[80%] inline-flex items-center py-2 px-2.5 gap-1 hover:text-[#3E80DD] hover:bg-[#E3EDFC] hover:underline hover:cursor-pointer rounded-sm";

    return(
        <header className=" w-full box-borde bg-white sticky top-0 z-50">
            <div className="max-h-16.5 max-w-312 mx-auto hidden lg:flex justify-start items-center py-4 box-border">
                <div className="flex w-3/4 items-center gap-6">
                    <a href="#" className="inline-block h-full"><img src="https://cdn.grabon.in/gograbon/logo/GrabOn-Logo.svg" alt="GrabOn logo" className="w-40 h-9 bg-transparent"/></a>
                    <div className="relative h-full w-full max-w-168.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <path fill="#888" d="M7.44412,0 C3.89304889,0 1,3.04362024 1,6.77956734 C1,10.5155004 3.89304444,13.5591417 7.44412,13.5591417 C8.97992889,13.5591417 10.3906356,12.9879695 11.4994711,12.0395771 L15.8603644,16.6274712 C16.1206778,16.9013327 16.5444311,16.9013561 16.80476,16.6274712 C17.0650867,16.3535863 17.0650867,15.9150898 16.80476,15.6412283 L12.4438689,11.0533342 C13.3471556,9.88618462 13.88824,8.39712964 13.88824,6.77956734 C13.88824,3.04362024 10.9951933,0 7.44412,0 Z M7.44412,1.40266959 C10.2746378,1.40266959 12.5549733,3.8016865 12.5549733,6.77956734 C12.5549733,9.75741311 10.2746333,12.1564721 7.44412,12.1564721 C4.61360667,12.1564721 2.33326667,9.75741311 2.33326667,6.77956734 C2.33326667,3.8016865 4.61360222,1.40266959 7.44412,1.40266959 Z" transform="rotate(-3 9 8.416)" />
                        </svg>
                        <input type="search" placeholder="Search for brands, Categories, Stores, Coupons" className="h-9 w-full border border-[rgb(184,180,180)] outline-0 pl-11 pr-4 py-2 rounded-2xl" />
                    </div>
                </div>
                <div className="flex w-1/4 justify-evenly items-center h-full gap-6">
                    <img src="https://cdn.grabon.in/gograbon/v7/img/india-flag.png" alt="Indian Flag" className="h-7 w-7"/>
                    <img src="https://cdn.grabon.in/gograbon/v8/icons/notification-bell-header-v1.svg" alt="" className="h-6 w-6"/>
                    <div className="login-button hover:cursor-pointer ">
                        <a href="" className=""><button className="inline-flex gap-1"><img src="https://cdn.grabon.in/gograbon/v8/icons/login-button-icon.svg" alt="" />Login</button></a>
                    </div>
                </div>
            </div>
            <hr className="w-full border-t-[#47465327]"/>
            <nav className=" hidden lg:flex  max-w-312 w-full mx-auto py-2.5 h-16.5 ">
                <div className="navbar-items flex w-full justify-between">                  
                    <div className="left-navbar flex justify-center items-center">
                        {navLeftItems.map(({ icon, label }) => (
                            <a href="#" key={label} className={navLinkLeftClass}>
                            <img src={icon} alt="" className="h-5 w-5" />
                            {label}
                            </a>
                        ))}
                    </div>
                    <div className="right-navbar flex justify-center items-start">
                        <a href="#" className={navLinkLeftClass}><img src="	https://cdn.grabon.in/gograbon/v8/icons/header-submit-icon-v3.svg" alt="" />Submit Coupons</a>
                        <a href="#" className={navLinkLeftClass}><img src="https://cdn.grabon.in/gograbon/v8/icons/deals-nav-icon-v3.svg" alt="" />Deals of the Day</a>
                        <a href="#" className={navLinkLeftClass}> Onam Offers </a>
                    </div>
                </div>
            </nav>
            <hr className="w-full border-t-[#47465327]"/>
            
            <div className="max-h-16.5 max-w-312 mx-auto flex lg:hidden justify-between items-center py-4 px-4 box-border">
                <div className="flex items-center gap-6">
                    <div className="hamburger flex flex-col gap-1 cursor-pointer">
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                    </div>
                    <a href="#" className="inline-block h-full"><img src="https://cdn.grabon.in/gograbon/logo/GrabOn-Logo.svg" alt="GrabOn logo" className="w-32 h-8"/></a>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <img src="https://cdn.grabon.in/gograbon/v7/img/india-flag.png" alt="Indian Flag" className="h-5 w-5 rounded-full" />
                        <span className="text-sm font-medium text-gray-700">IN</span>
                    </div>
                    <div className="relative cursor-pointer">
                        <img src="https://cdn.grabon.in/gograbon/v8/icons/notification-bell-header-v1.svg" alt="Notifications" className="h-5 w-5"/>
                    </div>
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 17" fill="none">
                            <path fill="#888" d="M7.44412,0 C3.89304889,0 1,3.04362024 1,6.77956734 C1,10.5155004 3.89304444,13.5591417 7.44412,13.5591417 C8.97992889,13.5591417 10.3906356,12.9879695 11.4994711,12.0395771 L15.8603644,16.6274712 C16.1206778,16.9013327 16.5444311,16.9013561 16.80476,16.6274712 C17.0650867,16.3535863 17.0650867,15.9150898 16.80476,15.6412283 L12.4438689,11.0533342 C13.3471556,9.88618462 13.88824,8.39712964 13.88824,6.77956734 C13.88824,3.04362024 10.9951933,0 7.44412,0 Z M7.44412,1.40266959 C10.2746378,1.40266959 12.5549733,3.8016865 12.5549733,6.77956734 C12.5549733,9.75741311 10.2746333,12.1564721 7.44412,12.1564721 C4.61360667,12.1564721 2.33326667,9.75741311 2.33326667,6.77956734 C2.33326667,3.8016865 4.61360222,1.40266959 7.44412,1.40266959 Z"/>
                        </svg>
                    </div>
                </div>
            </div>

        </header>
       
    );
}