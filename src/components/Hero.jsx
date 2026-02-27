import heroImage from "../assets/heroImage.png";
import calenderIcon from "../assets/calendericon.svg";
import searchIcon from "../assets/searchIcon.svg";
import { cities } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white 
                 bg-no-repeat bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <p className="bg-[#49B9ff]/50 px-3.5 py-1 rounded-full mt-20 text-sm md:text-base">
        The Ultimate Hotel Experience
      </p>

      <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Discover Your Perfect Gateway Destination
      </h1>

      <p className=" md:max-w-md mt-2 text-sm md:text-base">
        Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
      </p>

      <form className="bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row gap-4 mt-8 w-full md:w-auto">
        {/* Destination */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={searchIcon} alt="Destination Icon" className="h-4" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="rounded border border-gray-200 px-3 py-2 mt-1 text-sm outline-none w-full"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        {/* Check-in */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={calenderIcon} alt="Calendar Icon" className="h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="rounded border border-gray-200 px-3 py-2 mt-1 text-sm outline-none w-full"
          />
        </div>

        {/* Check-out */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={calenderIcon} alt="Calendar Icon" className="h-4" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="rounded border border-gray-200 px-3 py-2 mt-1 text-sm outline-none w-full"
          />
        </div>

        {/* Guests */}
        <div className="flex-1">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="rounded border border-gray-200 px-3 py-2 mt-1 text-sm outline-none w-full"
            placeholder="0"
          />
        </div>

        {/* Search Button */}
        <button
          className="flex items-center justify-center gap-2 rounded-md bg-black py-2 px-4 text-white cursor-pointer w-full md:w-auto"
        >
          <img src={searchIcon} alt="Search Icon" className="h-5" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;