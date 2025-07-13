import React, { useEffect } from "react";

const Orbs = () => {
  useEffect(() => {
    const orbs = document.querySelectorAll(".orb");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      orbs.forEach((orb, index) => {
        const speed = 0.02 + index * 0.01;
        orb.style.transform = `translate(${clientX * speed}px, ${clientY * speed}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="orb orb--purple"></div>
      <div className="orb orb--cyan"></div>
    </>
  );
};

export default Orbs;
