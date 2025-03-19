
const sigiriya = '/assets/sigiriya.webp'
import SearchBar from "./Searchbar";

const InboundHeader = ({ onSearch }) => {
 

  return (
    <div className="relative w-full h-[620px] flex flex-col items-center justify-center 
    bg-cover bg-center text-white " style={{ backgroundImage: `url(${sigiriya})`  }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <h1 className="text-3xl md:text-6xl font-LIGHT font-montez mt-44 z-20">Travel SriLanka</h1>
      <h1 className="text-center text-5xl md:text-8xl font-bold mb-24 z-20">INBOUND PACKAGES</h1>
      <div className="mt-4 z-20">
        {/* <SearchBar onSearch={onSearch} /> */}
      </div>
    </div>
  );
};

export default InboundHeader;
