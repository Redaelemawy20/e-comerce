import React from "react";
import styles from "../../styles/components/pagination.module.scss";
import _ from "lodash";
const Pagination = ({ itemsCount, pageItemsCount, currentPage, onChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageItemsCount);
  const pages = _.range(1, pagesCount + 1);
  let itemClass = "list-item";
  if (pagesCount === 1) return null;
  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        {pages.map((page) => (
          <li
            className={
              page === currentPage
                ? `${styles[itemClass]} ${styles.active}`
                : styles[itemClass]
            }
            key={page}
            onClick={() => onChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
