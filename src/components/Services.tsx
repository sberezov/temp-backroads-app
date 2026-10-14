import React from "react";
import "../index.css";
import { servicesArray } from "../data";
import SectionTitle from "./SectionTitle";

function Services() {
  return (
    <section className="section services" id="services">
      <SectionTitle firstHalf="our" lastHalf="services" />

      <div className="section-center services-center">
        {servicesArray.map((item) => {
          const { id, icon, title, text } = item;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
