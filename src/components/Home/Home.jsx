import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.css";
import sprite from '../../assets/sprite.gif';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const typedRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: ["SkillStitch", "Weaving your Skills <br> into Success!"], // Texts to animate
      typeSpeed: 50, // Speed of typing
      backSpeed: 25, // Speed of deleting
      loop: true, // Loop the animation
      showCursor: false,
    });

    // Cleanup Typed.js on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <div className="wrap">
      <div className="text">
        <h1 ref={typedRef}></h1>
      </div>
      <div className="sprite">
        <img src={sprite} alt="sprite" />
      </div>
      </div>
      <div className="button" onClick={() => navigate("/resume-templates")}>
        <p>Craft Your Future Now!</p>
      </div>
      
    </div>
  );
};

export default Home;
