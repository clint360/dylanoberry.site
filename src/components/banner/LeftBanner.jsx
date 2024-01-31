import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import './Banner.css'

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Tutor.", "Researcher.", "Coach.", "Strategist.", "Systems Thinker.", "Pragmatic Idealist"],
      loop: true,
      typeSpeed: 18,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="leftbanner">
      <div className="flex flex-col gap-5 landingView">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO SITE</h4>
        <h1 className="text-6xl font-bold text-white bigtext" style={{fontSize: "3.2rem"}}>
          Hi, I'm <span className="text-designColor capitalize">Dylan O'berry</span>
        </h1>
        <h2 style={{fontSize: "1.7rem"}}>
          a <span className='textbl'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a growth-focused, excellent communicator that focuses on the why rather than the what. I have strong aptitude for understanding what quality is actually required. I can teach others to share my positive traits..
        </p>
      </div>
      <br />
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner