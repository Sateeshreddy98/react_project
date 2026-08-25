import Navbar from "./components/Navbar";
import MainBanners from "./components/MainBanners";
import Popularoffers from "./components/Popularoffers";

export default function App() {
  return (
    <div className="bg-[#F7F7F8] min-h-full">
      <Navbar />
      <main className="flex flex-col">
        <MainBanners />
        <Popularoffers />
      </main>
      
    </div>
  );
}