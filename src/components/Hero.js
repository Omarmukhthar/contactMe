import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I build modern, responsive websites with clean UI & UX.";
  const heroRef = useRef(null);

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const type = () => {
      setTypedText(fullText.substring(0, index + 1));
      index++;
      if (index < fullText.length) {
        timeoutId = setTimeout(type, 50);
      }
    };

    setTypedText(""); 
    timeoutId = setTimeout(type, 200); 

    return () => clearTimeout(timeoutId); 
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.4 }
    );

    const node = heroRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <div className="container">
        <h2 id="hero-title" className="hero__title">
          Hi, I'm <span className="text-gradient">Omar Mukhthar</span>
        </h2>
        <p className="hero__subtitle" aria-live="polite">
          {typedText}
        </p>
        <a href="#contact" className="btn btn--primary">
          Connect With Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
