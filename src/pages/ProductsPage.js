import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";

import { useFilterContext } from "../context/filter_context";
const ProductsPage = () => {
  const { filter_controls } = useFilterContext();

  return (
    <main>
      <PageHero />
      <Wrapper className="page">
        <div className="section-center products">
          <div className={`filters ${filter_controls ? "visible" : "hidden"}`}>
            <Filters />
          </div>

          <div className="list">
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  background-color: #c2cad0;

  .products {
    display: grid;
    gap: 3rem 1.5rem;
    padding: 2rem 0;
    /* margin: 1rem auto; */
  }
  .filters {
    background-color: #639a88;
    border-radius: 15px;
    box-shadow: 0 0 5px black;
    overflow: hidden;
    color: var(--clr-primary-1);
    transition: width 1s;

    z-index: 2;
    width: 0;
    grid-row: 1;
    grid-column: 1 / 3;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
  }
  .visible {
    width: 100%;
  }
  .list {
    grid-row: 1;
    grid-column: 1 / 3;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 300px 1fr;
      min-height: 30rem;
    }
    .filters {
      position: fixed;
      margin-top: 80px;
      grid-column: 1/2;
      grid-row: 1;
      z-index: 1;
      height: 30rem;
      left: 3rem;
    }
    .visible {
      width: 300px;
    }

    .list {
      grid-column: 1/3;
      grid-row: 1;
    }
  }
`;

export default ProductsPage;
