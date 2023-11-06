import LandingPage from "../public/assets/landing_page.jpg";
import Image from "next/image";
import Card from "./components/Card";
import InformationJSON from "./objects/information.card.json";

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
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 mx-auto md:mx-auto py-2 md-py-1">
            CHOICE-LIST
          </h1>
        </div>
        {/* cards */}
        <div>
          <div className="flex flex-wrap">
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
    </div>
  );
}
