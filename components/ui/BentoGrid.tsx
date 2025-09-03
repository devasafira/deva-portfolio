"use client"

import { useState } from "react";

import { cn } from "@/utils/cn";
import MagicButton from "../ui/MagicButton";
import { socialMedia, techList } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Power BI", "ReactJS", "NextJS", "Bootstrap"];
  const middleLists = ["Codeigniter", "Laravel", "CSS3", "HTML5",]
  const rightLists = ["Typescript", "NuxtJS", "Tailwind", "Javascript"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleDownload = () => {
    const text = "/CV_DevaSafira.pdf";
    window.open(text, '_blank');
    setCopied(true);
  };

  // const paddingClass = id === 3 ? 'px-4 lg:px-10' : 'p-5 lg:p-10';

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "relative md:h-full min-h-40 flex flex-col", //paddingClass
          )} // p-5 lg:p-10
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-34 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 mb-2`}
          >
            {title}
          </div>

          {/* call to action / cv */}
          {id === 4 && (
            <div className="flex items-center justify-center flex-col gap-1 lg:gap-2 w-auto ">
              <div className="flex font-sans font-extralight text-lg lg:text-xl">Open to opportunities in Data Analytics.</div>
              <div className="flex font-sans font-bold text-lg lg:text-2xl lg:mb-[-20px]">Download My CV</div>
              <MagicButton
                title={copied ? "CV has been downloaded!" : "Download my CV"}
                position="middle"
                handleClick={handleDownload}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}

          {/* Tech stack list div */}
          {id === 2 && (
            <div className="flex gap-1 lg:gap-4 w-auto absolute right-2 mt-[2rem]">
              {/* tech stack lists */}
              <div className="flex flex-wrap justify-center flex-row gap-1 md:gap-3 lg:gap-3 relative md:top-20 top-5">
                {techList.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-[0.5rem] text-center bg-[#10132E]"
                  >
                    {item.icon && (
                      <img src={item.icon} alt={item.title} width={40} height={40}/>
                    )}
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 3 && (
            <div className="w-full flex flex-row gap-3 lg:gap-5 justify-end">
              {socialMedia.map((item, i) => (
                <div className="" key={id}>
                  <MagicButton
                    icon={ item.icon ? (<img src={item.icon} width={25} height={25} alt={item.title} className="" />) : (<span>{item.title}</span>)}
                    position="middle"
                    handleClick={() => window.open(item.url, '_blank')}
                  />
                </div>
              ))}
            </div>
          )}

          {id === 1 && (
            <div className="w-full h-auto flex md:flex-row flex-col md:justify-center md:gap-5 gap-5 md:text-base text-sm md:py-1 md:pb-3 pb-5 pt-2 px-5 ">
              <div className="w-auto md:h-auto flex md:justify-center text-justify items-center">
                I’m Deva Safira, a Computer Science graduate with hands-on experience as a Data Analyst Intern at 
                PT The Univenus Serang. I built dynamic dashboards that cut reporting time 
                and prepared accurate weekly and monthly reports. Passionate about transforming raw data into actionable 
                insights, I’m now open to entry-level opportunities in data analytics.
              </div>

              <div className="lg:h-auto md:h-auto flex lg:items-center ">
                <img src="/univenusPict.jpg" className="rounded-[10px]" alt="Documentation Intern in PT The Univenus" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};