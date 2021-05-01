import React from "react";
import styled from "styled-components";

import { useFilterContext } from "../context/filter_context";
import { AiFillFilter } from "react-icons/ai";

const PageHero = () => {
  const {
    toggleFiltersControls,
    clearFilters,
    updateFilters,
    filters: { text },
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="section-center">
        <h4>
          <AiFillFilter onClick={toggleFiltersControls} />
        </h4>
        <input
          className="search"
          type="text"
          name="text"
          value={text}
          onChange={updateFilters}
          placeholder="What are you looking for?"
        />{" "}
        <button
          type="button"
          className="clear-btn btn--accent"
          onClick={clearFilters}
        >
          {" "}
          clear filters
        </button>{" "}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 20vh;
  width: 70%;
  margin: auto;

  .section-center {
    border-radius: 20px;
    height: 80%;
    display: flex;
    width: 90%;
    align-items: center;
    box-shadow: 0 0 20px 10px #f3f3f3;
    padding: 0 0.5rem;
  }
  .search {
    margin-left: 10px;
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    transition: border-color 150ms, box-shadow 150ms;
    outline: 0;
    flex: 2;
    display: inline-block;
    border-radius: 10px;
  }
  .search:focus {
    border-color: #7db0fb;
    box-shadow: 0 0 0 4px rgb(24, 117, 255, 0.25);
  }
  .clear-btn {
    padding: 0.6rem 1rem;
    border-radius: var(--radius);
    margin-left: 10px;
  }
  h4 {
    display: inline-block;
  }
  @media (min-width: 768px) {
  }
`;

export default PageHero;
