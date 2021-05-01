import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
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

        <Link to="/products" className="btn hero-btn btn--secondary">
          shop now
        </Link>
      </article>
      {/* <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.5rem 0.7rem;
  box-shadow: 0 0 20px 10px #f3f3f3;
  .content {
    margin-top: 40px;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    padding: 4rem;
    height: calc(100vh - 5rem);

    /* grid-template-columns: 1fr 1fr; */

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export default Hero;
