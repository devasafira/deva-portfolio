import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundGradient } from "./ui/background-gradient";
import { projectDatas } from "@/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromRight } from "@/utils/motion";

const ProjectData = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col w-screen"
    >
      <div id="projectData" className="py-5 px-2 md:px-10 lg:px-20">
        <motion.div>
          <TextGenerateEffect
            words="Projects"
            className="text-4xl font-semibold"
          />
        </motion.div>

        <motion.div variants={slideInFromRight(0.8)} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectDatas.map((projectData) => (
            <Link
              key={projectData.slug}
              href={`/project/${projectData.slug}`}
            >
              <div className="flex flex-col lg:flex-row w-full gap-3 justify-around cursor-pointer">
                <BackgroundGradient className="flex flex-col h-auto">
                  <div className="w-auto bg-[#161A31] p-2 rounded-[17px] h-auto">
                    <div className="p-1 mb-4 border-b-2 border-indigo-500 text-xl font-semibold text-center">{projectData.title}</div>
                    <img
                      src={projectData.image}
                      alt={projectData.title}
                      className="rounded-[12px] w-auto lg:w-[30vw] h-auto bg-black"
                    />
                  </div>
                </BackgroundGradient>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectData;
