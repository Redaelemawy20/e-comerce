import React from "react";
import { useProductsContext } from "../context/products_context";
import { testimonials } from "../utils/testimonials";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const FeaturedProducts = () => {
  const [user, setUser] = useState({ ...testimonials[0] });
  let i = 1;
  useEffect(() => {
    setInterval(() => {
      i++;

      const currentUser = testimonials[i];
      const user = { ...currentUser };
      setUser(user);

      if (i > testimonials.length - 2) i = -1;
    }, 10000);
  }, []);

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>What our Customers are Saying</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        <div className="testimonial-container">
          <div className="progress-bar"></div>
          <FaQuoteRight className="fa-quote-right fa-quote" />
          <FaQuoteLeft className="fa-quote-left fa-quote" />
          <p class="testimonial">{user.text}</p>
          <div className="user">
            <img src={user.photo} alt="user" class="user-image" />
            <div className="user-details">
              <h4 className="username">{user.name}</h4>
              <p className="role">{user.position}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 10px;
  h2 {
    color: var(--clr-grey-1);
  }
  .featured {
    margin: 2rem auto;
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .testimonial-container {
    background-color: #476ce4;
    color: white;
    border-radius: 15px;
    margin: 0px auto;
    padding: 50px 80px;
    max-width: 768px;
    position: relative;
  }
  p {
    color: white;
  }
  .fa-quote {
    color: rgba(255, 255, 255, 0.3);
    font-size: 28px;
    position: absolute;
    top: 70px;
  }

  .fa-quote-right {
    left: 40px;
  }

  .fa-quote-left {
    right: 40px;
  }

  .testimonial {
    padding: 0.5rem 0;
    line-height: 28px;
    text-align: justify;

    font-size: 1rem;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user .user-image {
    border-radius: 50%;
    height: 75px;
    width: 75px;
    object-fit: cover;
  }

  .user .user-details {
    margin-left: 10px;
  }

  .user .username {
    margin: 0;
  }

  .user .role {
    font-weight: normal;
    margin: 10px 0;
  }

  .progress-bar {
    background-color: #fff;
    height: 4px;
    width: 100%;
    animation: grow 10s linear infinite;
    transform-origin: left;
    margin-bottom: 10px;
  }

  @keyframes grow {
    0% {
      transform: scaleX(0);
    }
  }

  @media (max-width: 768px) {
    .testimonial-container {
      padding: 20px 30px;
    }

    .fa-quote {
      display: none;
    }
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
