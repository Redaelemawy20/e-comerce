import React from "react";
import styled from "styled-components";
import _ from "lodash";
const Pagination = ({ itemsCount, pageItemsCount, currentPage, onChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageItemsCount);
  const pages = _.range(1, pagesCount + 1);
  let itemClass = "list-item";
  if (pagesCount === 1) return null;
  return (
    <Styles>
      <ul className="list">
        {pages.map((page) => (
          <li
            className={page === currentPage ? `${itemClass} active` : itemClass}
            key={page}
            onClick={() => onChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </Styles>
  );
};

const Styles = styled.section`
  margin-top: 1.5rem;
  .list {
    display: block;
    width: 10rem;
    margin: auto;
  }
  .list-item {
    display: inline-block;
    padding: 0.5rem 0.9rem;
    cursor: pointer;
    border: 1px solid gray;
  }
  .active {
    background-color: blueviolet;
  }
`;
export default Pagination;
