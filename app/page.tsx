import LandingPage from "../public/assets/landing_page.jpg";
import Image from "next/image";
import Card from "./components/Card";
import InformationJSON from "./objects/information.card.json";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-4">
        <div className="order-1 md:order-1">
          <Image className="rounded-md" src={LandingPage} alt="bg-cover-1" />
        </div>
        <div className="flex flex-col justify-center order-2 md:order-2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mx-auto">
            Food Recipe App
          </h1>
          <p className="text-lg md:text-2xl mx-auto">Your Recipe Companion</p>
        </div>

        <div className="flex flex-col justify-center order-4 md:order-3">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mx-auto">
            Eat Healthy
          </h1>
          <p className="text-lg md:text-2xl mx-auto">Stay Healthy</p>
        </div>
        <div className="order-3 md:order-4">
          <Image className="rounded-md" src={LandingPage} alt="bg-cover-1" />
        </div>
      </div>
      <div className="order-5 md:order-5">
        {/* cards */}
        <div className=" flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {InformationJSON.map((information) => ( 
              <Card
                key={information.id}
                imageUrl={information.url}
                title={information.title}
                description={information.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/recipe">
          <button className="btn btn-outline btn-accent p-2 m-2">Click For Recipe</button>
        </Link>
      </div>
    </div>
  );
}
