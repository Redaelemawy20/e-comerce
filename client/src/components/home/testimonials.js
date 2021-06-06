import React from "react";
import { testimonials } from "../../utils/testimonials";
import testimonialsStyle from "../../styles/layout/_testimonials.module.scss";
import cardStyle from "../../styles/components/_card.module.scss";

import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const FeaturedProducts = () => {
  const [user, setUser] = useState({ ...testimonials[0] });
  let i = 1;
  let interval = () => {
    setInterval(() => {
      i++;

      const currentUser = testimonials[i];
      const user = { ...currentUser };
      setUser(user);

      if (i > testimonials.length - 2) i = -1;
    }, 10000);
  };
  useEffect(() => {
    interval();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={` section ${testimonialsStyle.testimonials}`}>
      <div className={testimonialsStyle.title}>
        <h2>What our Customers are Saying</h2>
      </div>
      <div className={`section-center ${cardStyle.cardtestimonial}`}>
        <div className={cardStyle["testimonial-container"]}>
          <div className={cardStyle["progress-bar"]}></div>
          <span
            className={`${cardStyle["fa-quote-right"]} ${cardStyle["fa-quote"]}`}
          >
            <FaQuoteRight />
          </span>
          <span
            className={`${cardStyle["fa-quote-left"]} ${cardStyle["fa-quote"]}`}
          >
            <FaQuoteLeft />
          </span>
          <p className={cardStyle.testimonial}>{user.text}</p>
          <div className={cardStyle.user}>
            <img
              src={user.photo}
              alt="user"
              className={cardStyle["user-image"]}
            />
            <div className={cardStyle["user-details"]}>
              <h4 className={cardStyle.username}>{user.name}</h4>
              <p className={cardStyle.role}>{user.position}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
