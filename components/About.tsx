import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { motion } from "framer-motion"
import { slideInFromLeft } from "@/utils/motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inViewRef] = useInView({
    triggerOnce:true
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inViewRef ? "visible" : "hidden"}
      className="flex flex-col w-screen"
    >
      <section id="about" className="">
        <div className="py-5 md:mb-[8rem] md:px-10 lg:px-20 px-2 w-screen relative z-20">
          <motion.div variants={slideInFromLeft(0.5)}>
            <TextGenerateEffect
              words="About Me"
              className="text-4xl font-semibold "
            />
          </motion.div>
          
          <motion.div variants={slideInFromLeft(0.8)}>
            <BentoGrid>
                {gridItems.map(({id, title, description, className, img, imgClassName, spareImg, titleClassName}) => (
                    <BentoGridItem 
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        spareImg={spareImg}
                        titleClassName={titleClassName}
                    />
                ))}
            </BentoGrid>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
};

export default About;
