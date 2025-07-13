import React, { useEffect, useRef, useState } from "react";
import Toast from "./Toast";

const Contact = () => {
  const cardsRef = useRef([]);
  const [toastMessage, setToastMessage] = useState("");

  const handleToast = (message) => {
    setToastMessage(message);
  };

  const contactMethods = [
    {
      icon: "fab fa-linkedin-in",
      label: "LinkedIn",
      onClick: () => window.open("https://www.linkedin.com/in/omarmukhthar", "_blank"),
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      onClick: () => window.open("https://github.com/Omarmukhthar", "_blank"),
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      onClick: () => {
        navigator.clipboard
          .writeText("+918754643365")
          .then(() => handleToast("Phone number copied!"))
          .catch(() => handleToast("Copy failed. Try manually."));
      },
    },
    {
      icon: "fas fa-envelope",
      label: "Email",
      onClick: () => (window.location.href = "mailto:omarmukhthar01@gmail.com"),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact container" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="card-grid">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="card"
            tabIndex="0"
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={method.onClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                method.onClick();
              }
            }}
          >
            <i className={method.icon}></i>
            <span>{method.label}</span>
          </div>
        ))}
      </div>

      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}
    </section>
  );
};

export default Contact;
