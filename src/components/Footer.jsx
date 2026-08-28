const footerData = [
  { title: "Speciality Pages", links: ["AI Tools", "Surge 2025", "Blog", "Product Deals", "Charities"]},
  { title: "Offers", links: [ "City offers", "Brand Offers", "Bank Offers" ,"Festival Offers"] },
  { title: "Company", links: ["About Us", "Privacy Policy", "Terms of Use", "Branding", "Careers", "Partner with Us", "Sitemap", "Feedback" ]} 
];
const Social_icons=[
    {id:"1", src:"https://cdn.grabon.in/gograbon/v8/icons/whatsapp-v3.svg", alt:"WhatsApp", link:"https://whatsapp.com/channel/0029VaRnnzc0bIdhBV1keU0r"},
    {id:"2", src:"https://cdn.grabon.in/gograbon/v8/icons/grabon-facebook-icon.png", alt:"Facebook", link:"https://www.facebook.com/grabon.in/"},
    {id:"3", src:"https://cdn.grabon.in/gograbon/v8/icons/grabon-twitter-icon.png", alt:"Twitter", link:"https://x.com/GrabOnIn/"},
    {id:"4", src:"https://cdn.grabon.in/gograbon/v8/icons/grabon-linkedin-icon.png", alt:"Linkedin", link:"https://www.linkedin.com/company/grabon"},
    {id:"5", src:"https://cdn.grabon.in/gograbon/v8/icons/grabon-instagram-icon.png", alt:"Instagram", link:"https://www.instagram.com/grabonindia/"},
    {id:"6", src:"https://cdn.grabon.in/gograbon/v8/icons/grabon-youtube-icon.png", alt:"Youtube", link:"https://youtube.com/@GrabOnIndia"},
    {id:"7", src:"https://cdn.grabon.in/gograbon/v8/icons/grabon-pintrest-icon.png", alt:"Pintrest", link:"https://in.pinterest.com/GrabOnIn/"},
    {id:"8", src:"https://cdn.grabon.in/gograbon/v8/icons/telegram-icon.svg", alt:"Telegram", link:"https://t.me/GrabOnIndiaOfficial"},
]

export default function Footer(){
    return(
        <footer className="w-full py-12 bg-[#191F2E] px-6 lg:px-0">
            <div className="w-full max-w-316 mx-auto text-white">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col flex-1 justify-start items-start *:mb-4">
                        <img src="https://cdn.grabon.in/gograbon/logo/GrabOn-Logo-Light.svg" alt="" loading="lazy"className="  h-[35px] w-auto"/>
                        <p className="">
                            Striving towards making the world <br />
                            a better place to shop with great savings! 
                        </p>
                        <div className="flex flex-row gap-3 *:h-12">
                            <a href=""><img src="https://cdn.grabon.in/gograbon/images/v5/badge_android.png" alt="" /></a>
                            <a href=""><img src="https://cdn.grabon.in/gograbon/images/v5/badge_ios.png" alt="" /></a>
                        </div>
                        <ul className="flex flex-wrap justify-start gap-2.5 w-63">
                            {Social_icons.map((icons) => (
                                <li key={icons.id}>
                                    <a href={icons.link} >
                                        <img src={icons.src} alt={icons.alt} className="h-8 w-8"/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="w-[90%]">We may earn a commission if you buy through links on GrabOn. 
                            <a href="#" className="text-[#D1DE31]"> Learn More</a>
                        </p>
                    </div>
                    <ul className="flex-2 grid grid-cols-2 lg:grid-cols-4 *:flex *:flex-col  lg:gap-6 text-[14px]">
                        {footerData.map((section) => (
                            <li key={section.title} className=" flex gap-y-3">
                            <strong className="text-[#D1DE31] text-base">{section.title}</strong>
                            <span className="footer-title-line">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="6" viewBox="0 0 27 6" fill="none"> <path d="M24 5.66667C25.4728 5.66667 26.6667 4.47276 26.6667 3C26.6667 1.52724 25.4728 0.333333 24 0.333333C22.5272 0.333333 21.3333 1.52724 21.3333 3C21.3333 4.47276 22.5272 5.66667 24 5.66667ZM0 3.5L24 3.5V2.5L0 2.5L0 3.5Z" fill="#8DAA51"></path> </svg>
                            </span>
                            {section.links.map((text) => (
                                <a href="" key={text}>{text}</a>
                            ))}
                            </li>
                        ))}
                        <li  className="flex flex-col gap-y-3" >
                            <strong className="text-[#D1DE31] text-base"> Contact Us </strong>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="6" viewBox="0 0 27 6" fill="none">
                                    <path d="M24 5.66667C25.4728 5.66667 26.6667 4.47276 26.6667 3C26.6667 1.52724 25.4728 0.333333 24 0.333333C22.5272 0.333333 21.3333 1.52724 21.3333 3C21.3333 4.47276 22.5272 5.66667 24 5.66667ZM0 3.5L24 3.5V2.5L0 2.5L0 3.5Z" fill="#8DAA51" />
                                </svg>
                            </span>
                            <a href="#" title="Email" className="flex items-center gap-2">
                                <img src="https://cdn.grabon.in/gograbon/v8/icons/mail-icon.svg" width="16" height="16" alt="Email" loading="lazy"/>
                                <span>contact@grabon.in</span>
                            </a>
                            <a href="#" title="Phone" className="flex items-center gap-0.5 lg:gap-2">
                                <img  src="https://cdn.grabon.in/gograbon/v8/icons/phone.svg" width="16" height="16" alt="Phone"loading="lazy"/>
                                <span>+91-7997443334</span>
                            </a>
                            <a href="https://goo.gl/maps/8UjTmtcBaFfFBHHaA" title="Address" className="flex items-start gap-2">
                                <img src="https://cdn.grabon.in/gograbon/v8/icons/home.svg" width="16" height="16"  alt="Address" loading="lazy"/>
                                <span>
                                GrabOn<br />
                                Inspirelabs Solutions ltd,<br />
                                OneWest Building, Gachibowli,<br />
                                Hyderabad, TG, 500032
                                </span>
                            </a>
                            <a href="" className="flex justify-center items-center bg-blue-500 ml-5.5 rounded-lg">
                                <img src="" alt="" />
                                <span className="flex flex-row items-center justify-center gap-2 p-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none"> <path d="M2.2168 13.4376C2.2168 11.5522 4.05346 11.082 5.89013 11.082V19.347C4.9159 19.347 3.98157 18.96 3.29269 18.2711C2.60381 17.5823 2.2168 16.6479 2.2168 15.6737V13.4376Z" stroke="white" stroke-width="1.83667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.88965 19.3457V10.1623C5.88965 8.701 6.47016 7.29951 7.50349 6.26619C8.53682 5.23286 9.93831 4.65234 11.3996 4.65234C12.861 4.65234 14.2625 5.23286 15.2958 6.26619C16.3291 7.29951 16.9096 8.701 16.9096 10.1623V19.3457" stroke="white" stroke-width="1.83667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.5835 13.4376C20.5835 11.5522 18.7468 11.082 16.9102 11.082V19.347C17.8844 19.347 18.8187 18.96 19.5076 18.2711C20.1965 17.5823 20.5835 16.6479 20.5835 15.6737V13.4376Z" stroke="white" stroke-width="1.83667" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    Contact Us
                                </span>
                            </a>
                            </li>
                        </ul>
                </div>
                <div className="mt-12 border-t border-dashed border-[#415a9c] text-center text-[#f7f7f8] text-[12px] px-6 xl:px-0">
                    <p className="text-[#d5ef1d] text-[32px] lg:text-[48px] font-bold leading-[150%] font-[Arial,sans-serif]">#SaveOnGrabOn</p>
                    <p className="mb-5 text-base leading[200%] opacity-70">We Help You Save On Everything</p>
                    <p className="opacity-70 leading-[200%]">Copyright 2026 · GrabOn Is Registered Trademark Of Inspirelabs Solutions Ltd. · All Rights Reserved.</p>
                    <p className="opacity-70 leading-[200%]">GrabOn Disclaimer</p>
                    <p className="box-border opacity-70 leading-[200%]">Third-Party Brand Names And Trademarks Featured On GrabOn Are The Property Of Their Respective Owners. Their Presence On This Site Does Not Imply Any Association With GrabOn Or Suggest
                        That These Brands Endorse GrabOn Or Its Services.</p>
                    <p>
                    </p>
                </div>
            </div>
        </footer>
    )
}