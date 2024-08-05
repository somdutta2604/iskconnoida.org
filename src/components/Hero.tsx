import { useEffect } from "react";

export default function Hero() {
  let imgURL: string = "";
  switch (new Date().getUTCDay()) {
    // uncalibrated placeholder images, subject to change
    case 0:
      imgURL =
        "/images/sun.jpg";
      break;
    case 1:
      imgURL =
        "/images/mon.jpg";
      break;
    case 2:
      imgURL =
        "/images/tue.jpg";
      break;
    case 3:
      imgURL =
        "/images/wed.jpg";
      break;
    case 4:
      imgURL =
        "/images/thurs.jpg";
      break;
    case 5:
      imgURL =
        "/images/fri.jpg";
      break;
    case 6:
      imgURL =
        "/images/sat.jpg";
      break;
  }

  useEffect(() => {
    console.log(document.getElementById("hero"));
    document.getElementById("hero")!.style.backgroundImage = `url(${imgURL})`;
  }, [imgURL]);

  return (
    <>
      <div id="hero" className="h-screen flex w-screen bg-center bg-no-repeat bg-cover">
        <div className="bg-gradient-to-b from-transparent to-gray-800 text-4xl font-bold text-rose-100 text-shadow-xl shadow-red-300 flex justify-center items-end mt-auto py-14 px-4 h-1/2 w-full">
          WELCOME TO SRI SRI RADHA GOVIND DEV JI TEMPLE
        </div>
      </div>
    </>
  );
}
