import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { projectExperience } from "@/data";
import { motion } from "framer-motion"
import { slideInFromRight } from "@/utils/motion";
import { useInView } from "react-intersection-observer";


const Projects = () => {
  const project = projectExperience[0];
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col w-screen"
    > 
      <div id="projects" className="py-5 px-2 md:px-10 lg:px-20">
        <motion.div variants={slideInFromRight(0.5)}>
          <TextGenerateEffect
            words="Projects"
            className="text-4xl font-semibold"
          />
        </motion.div>
        <motion.div variants={slideInFromRight(0.8)}>
          <div className="flex flex-col lg:flex-row w-full gap-3 justify-around">
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
                    {item.descriptions.map((desc) => (
                      <div key={desc.id} className="flex flex-col font-normal text-s text-white">
                        {desc.desc}
                      </div>
                    ))}
                  </div>

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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
