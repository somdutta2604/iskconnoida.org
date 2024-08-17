import { Link } from "react-router-dom";
import Card from "../components/Card";
import { motion } from "framer-motion";

interface FacilitiesProps {
  onHomePage: boolean;
}

type Response = Record<
  string,
  {
    id: string;
    title: string;
    img: string;
    description: string;
  }
>;

const res: Response = {
  facilities_response1: {
    id: "13",
    title: "Guest House",
    img: "/images/static-_1665002df6dabb1-Edited-scaled.webp",
    description:
      "Stay at ISKCON's BACK TO HOME Guest houses, get a chance to live close to temple and spend the time of your stay in complete Krishna Consciousness.",
  },
  facilities_response2: {
    id: "14",
    title: "Krishna Expo",
    img: "/images/1780066_10151922662621364_1967521465_o.webp",
    description:
      "Explore Krishna's Leelas presented in a beautiful form, that is attractive to all.",
  },
  facilities_response3: {
    id: "15",
    title: "Function Halls",
    img: "/images/umage-1024x682-Edited.webp",
    description:
      "Celebrate your Family and Corporate functions with the auspicious blessings of Sri Sri Radha Govind Devji.",
  },
  facilities_response4: {
    id: "16",
    title: "Govindas Restaurant",
    img: "/images/download-10.webp",
    description:
      "Dine a Pure Veg meal at the world famous ISKCON Govindas Restaurant and Bakery. Everything here from cakes and pastries to pastas and main course is Pure veg.",
  },
};

const facilities: {
  id: string;
  title: string;
  img: string;
  description: string;
}[] = [];
for (const facility in res) {
  facilities.push(res[facility]);
}

export default function Facilities({ onHomePage }: FacilitiesProps) {
  return onHomePage ? (
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">Temple Facilities</div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-violet-700 rounded-lg bg-violet-600 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
            <Link to="/facilities">View More</Link>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold py-14 text-center">
        Temple Facilities
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {facilities.map((facility) => (
          <Card
            key={facility.id}
            img={facility.img}
            dateless
            title={facility.title}
          >
            {facility.description}
          </Card>
        ))}
      </div>
      <button className="sm:hidden border border-violet-700 rounded-lg bg-violet-600 mt-14 px-4 py-2 text-white shadow-lg shadow-violet-300 hover:shadow-violet-300 hover:shadow-xl">
        <Link to="/facilities">View More</Link>
      </button>
    </>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full lg:px-10 md:px-4 my-14"
    >
      <h3 className="text-3xl text-center font-semibold mb-10 mt-10">
        Temple Facilities
      </h3>

      <div className="items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {facilities.map((facility) => (
          <Card
            key={facility.id}
            img={facility.img}
            dateless
            title={facility.title}
            className="min-h-full"
          >
            {facility.description}
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
