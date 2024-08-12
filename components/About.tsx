import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const About = () => {
  return (
    <section id="about" className="">
      <div className="py-5 md:mb-[8rem] md:px-20 px-2 w-screen relative z-20">
        <TextGenerateEffect
          words="About Me"
          className="text-4xl font-semibold "
        />
        
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

      </div>
    </section>
  );
};

export default About;
