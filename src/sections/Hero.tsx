import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../constants";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero-models/HeroExperience";
import { useState } from "react";
import { TextWritter } from "../components/models/hero-models/TextWritter";

const Hero = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <section
      id="hero"
      className="static xl:relative overflow-hidden min-h-screen"
    >
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout flex flex-col xl:flex-row">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="">
                Воплощаю
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span key={index} className="flex items-center pb-2">
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>хочу участвовать в реальных пректах</h1>
              <h1>которые приносят результаты</h1>
            </div>

            <TextWritter className="text-2xl md:text-3xl font-extrabold tracking-tight" />
            <Button
              text="Увидеть мою работу"
              className="md:w-96 md:h-16 w-72 h-12"
              id="counter"
            />
          </div>
        </header>
        <figure className="w-full">
          <div className="hero-3d-layout h-full">
            <HeroExperience onInteract={() => setHasInteracted(true)} />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
      {!hasInteracted && (
        <div
          className="absolute z-50 flex flex-col items-center gap-2 pointer-events-none opacity-70
         top-[65%] left-1/2 -translate-x-1/2         
          xl:bottom-20 xl:left-[75%] xl:translate-x-[-50%] 
        "
        >
          <svg
            className="w-10 h-10 text-white animate-swipe"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
          <span className="text-white text-sm font-light tracking-wider uppercase bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
            Вращайте модель
          </span>
        </div>
      )}
    </section>
  );
};

export default Hero;
