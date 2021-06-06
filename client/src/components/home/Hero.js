import React from "react";

import { Link } from "react-router-dom";
import heroStyle from "../../styles/layout/_hero.module.scss";

const Hero = () => {
  console.log(heroStyle);
  return (
    <section className={`${heroStyle.hero} section-center`}>
      <article className={heroStyle.content}>
        <h1>
          build your <br />
          dream home
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
          quasi odit tenetur unde officiis repudiandae quod deserunt quia eum
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
          quasi odit tenetur unde officiis repudiandae quod deserunt quia eum...
        </p>

        <Link
          to="/products"
          className={`btn ${heroStyle["hero-btn"]} btn--secondary`}
        >
          shop now
        </Link>
      </article>
    </section>
  );
};

export default Hero;
