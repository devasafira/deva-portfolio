import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BackgroundGradient } from "./ui/background-gradient";
import bio from "@/public/biiio-studio.png";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { projectExperience } from "@/data";
import { TbEyeCheck } from "react-icons/tb";

const Projects = () => {
  const project = projectExperience[0];

  return (
    <div id="projects" className="py-5 px-2 md:px-20">
      <TextGenerateEffect
        words="Projects"
        className="text-4xl font-semibold"
      />

      <div className="flex flex-col md:flex-row w-full gap-3 justify-around">
        {projectExperience.map((item, i) => (
          <div className="w-auto lg:w-[30vw] h-auto" key={item.id}>
            <BackgroundGradient className="flex flex-col px-[0.05rem] pt-[0.05rem] pb-2">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-[17px] w-auto lg:w-[40vw] h-auto"
              />
              <a
                href={item.url}
                className="font-bold py-3 text-[1.3rem] text-white hover:underline"
              >
                {item.title}
              </a>

              <div className="w-full flex flex-wrap gap-2 py-2">
                {item.techs.map((tech) => (
                  <div className="flex p-2 bg-black-100 font-semibold text-xs border-black-100 rounded-[10px]" key={tech.id}>
                    {tech.name}
                  </div>
                ))}
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
