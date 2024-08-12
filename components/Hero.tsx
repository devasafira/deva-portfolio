import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import TypewriterComponent from "../components/ui/TypewriterComponent";

const Hero = () => {

  return (
    <div className="pt-16 pb-16">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-auto top-10 left-[15%]"
          fill="purple"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center">
          
          <p className="uppercase tracking-[0.2rem] text-sm font-light mr-2 mb-[0.5rem] text-center text-blue-100 max-w-80 animate-in fade-in fill-mode-backwards duration-700 delay-300">
            Hello world
          </p>

          <TextGenerateEffect
            words="Welcome to Deva Safira's Porfolio. Let's Explore My Web!"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mt-[-1rem]"
          />

          <div className="flex flex-row gap-2 text-center md:tracking-wider mb-2 mt-2 mr-2 text-sm md:text-lg lg:text-2xl animate-in fade-in fill-mode-backwards duration-700 delay-1000">
            <p>I&apos;m a</p>
            <TypewriterComponent strings={[ 'Computer Science Student', 'Frontend Developer']} autostart={true} loop={true} />
          </div>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              otherClasses="w-full px-12"
            />
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;