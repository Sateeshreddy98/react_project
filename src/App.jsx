import Navbar from "./components/Navbar";
import MainBanners from "./components/MainBanners";
import Popularoffers from "./components/Popularoffers";
import Popularstores from "./components/Popularstores";
import Todays_top_coupons from "./components/Todays_top_coupons";

export default function App() {
  return (
    <div className="bg-[#F7F7F8] min-h-full">
      <Navbar />
      <main className="flex flex-col">
        <MainBanners />
        <Popularoffers />
        <Popularstores />
        <Todays_top_coupons />
      </main>  
    </div>
  );
}