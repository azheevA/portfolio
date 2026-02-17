import { Motion } from "../components/models/hero-models/Motion";
import { abilities } from "../constants";
import Image from "next/image";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <Motion key={title}>
          <div className="card-border rounded-xl p-8 flex flex-col gap-4 hover:scale-105 transition-all duration-200 ease-in-out">
            <div className="size-14 flex items-center justify-center rounded-full">
              <Image src={imgPath} alt={title} width={600} height={500} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        </Motion>
      ))}
    </div>
  </div>
);

export default FeatureCards;
