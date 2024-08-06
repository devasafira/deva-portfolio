"use client";

import React from "react";
import Typewriter from "typewriter-effect";

type Props = {
  strings: string[],
  autostart?: boolean, // default: true
  loop?: boolean, // default: false

}

function typewriter({ strings, autostart = true, loop = false}: Props){
  return (
    <div className="relative">
      <Typewriter
       options={{
        strings: strings,
        autoStart: autostart,
        loop: loop,
       }}
      
      />
    </div>
  )
}

export default typewriter
