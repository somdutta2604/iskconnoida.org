const services = [
  {
    img: "/images/cow.webp",
    title: "Gomata Sewa",
    link: "/services",
  },
  {
    img: "/images/food.webp",
    title: "Food for Life",
    link: "/services",
  },
  {
    img: "/images/membership.webp",
    title: "LIFE Membership",
    link: "/services",
  },
  {
    img: "/images/people.webp",
    title: "Community Service Centre",
    link: "/services",
  },
  {
    img: "/images/happy.webp",
    title: "Blissful Deity Worship",
    link: "/services",
  },
  {
    img: "/images/book.webp",
    title: "Books Distribution",
    link: "/services",
  },
];

export default function OurServices() {
  return (
  <div className="container mx-auto lg:px-10 md:px-4 px-6 my-14">
    <h3 className="text-3xl w-fit font-semibold mx-auto mb-10 mt-10">
      Our Services
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
      {services.map((service, index) => (
        <div key={index}>
          <div className="rounded-lg shadow-lg overflow-hidden h-60 flex flex-col">
            <div className="rounded-lg w-full flex items-center justify-center bg-violet-200 border h-40 border-violet-50">
              <img
                src={service.img}
                alt={service.title}
                className="w-28 h-28"
              />
            </div>
            <div className="w-full p-2 h-20 flex flex-col items-center">
              <h5 className="text-xl text-center font-semibold py-1 my-auto">
                {service.title}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}