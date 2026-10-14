import React from "react";
import "../index.css";
import { toursArr } from "../data";
import SectionTitle from "./SectionTitle";
// import tour1 from "../images/tour-1.jpeg";
// import tour2 from "../images/tour-2.jpeg";
// import tour3 from "../images/tour-3.jpeg";
// import tour4 from "../images/tour-4.jpeg";

type TourProps = {
  id: number;
  img: string;
  date: string;
  text: string;
  title: string;
  location: string;
  duration: number;
  price: number;
};

export default function Tours() {
  return (
    <>
      <section className="section" id="tours">
        {/* <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div> */}

        <SectionTitle firstHalf="featured" lastHalf="tours" />

        <div className="section-center featured-center">
          {toursArr.map((item) => {
            const { id, img, date, text, title, location, duration, price } =
              item;
            return (
              <Tour
                id={id}
                key={id}
                img={img}
                date={date}
                text={text}
                title={title}
                location={location}
                duration={duration}
                price={price}
              ></Tour>
            );
          })}
        </div>
      </section>
    </>
  );
}

function Tour({
  id,
  img,
  date,
  text,
  title,
  location,
  duration,
  price,
}: TourProps) {
  return (
    <article key={id} className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>{duration} days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
}

{
  /* export default Tours; */
}
