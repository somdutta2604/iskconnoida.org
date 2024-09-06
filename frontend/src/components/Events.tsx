import { Link } from "react-router-dom";
import { events } from "../utils/handler";
import Card from "./Card";

/**
 *
 *
 * @return {JSX.Element} Events and Festivals section
 */
export default function Events(): JSX.Element {
  return (
    <>
      <div className="hidden px-12 sm:flex w-full">
        <div className="w-1/2 text-3xl font-bold py-14">
          Events and Festivals
        </div>
        <div className="w-1/2 py-14 inline-flex justify-end">
          <button className="border border-primary-700 rounded-lg bg-primary-600 px-4 py-2 text-white shadow-lg shadow-primary-300 hover:shadow-primary-300 hover:shadow-xl">
            <Link to="/events">View More</Link>
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full text-3xl font-bold py-14 text-center">
        Events and Festivals
      </div>
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <Card
            key={event.id}
            img={"https://iic.iskconnoida.org/" + event.img}
            date={new Date(event.date!)}
            title={event.title}
            article={"/events/" + event.id}
            donate="https://iic.iskconnoida.org/donate/SHRI_KRISHNA_JANMASHTAMI_2024,_NOIDA"
          >
            {event.description}
          </Card>
        ))}
      </div>
      <button className="sm:hidden border border-primary-700 rounded-lg bg-primary-600 mt-14 px-4 py-2 text-white shadow-lg shadow-primary-300 hover:shadow-primary-300 hover:shadow-xl">
        <Link to="/events">View More</Link>
      </button>
    </>
  );
}
