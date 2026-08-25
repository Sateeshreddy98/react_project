import Navbar from "./components/Navbar";
import MainBanners from "./components/MainBanners";
import Populardeals from "./components/Populardeals";

export default function App() {
  return (
    <div className="bg-[#F7F7F8] min-h-full">
      <Navbar />
      <main className="flex flex-col">
        <MainBanners />
        <Populardeals />
      </main>
      
    </div>
  );
}