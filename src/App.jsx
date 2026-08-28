import Navbar from "./components/Navbar";
import MainBanners from "./components/MainBanners";
import Popularoffers from "./components/Popularoffers";
import Popularstores from "./components/Popularstores";
import Todays_top_coupons from "./components/Todays_top_coupons";
import Deals_of_the_day from "./components/Deals_of_the_day";
import Grabon_collection from "./components/Grabon_collection";
import Popular_categories from "./components/Popular_categories";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#F7F7F8] min-h-full">
      <Navbar />
      <main className="flex flex-col box-border">
        <MainBanners />
        <Popularoffers />
        <Popularstores />
        <Todays_top_coupons />
        <Deals_of_the_day />
        <Grabon_collection />
        <Popular_categories />
      </main> 
        <Footer/>
    </div>
  );
}