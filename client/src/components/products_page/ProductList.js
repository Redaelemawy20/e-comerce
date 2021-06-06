import React from "react";
import { useFilterContext } from "../../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

import Pagination from "./Pagination.js";
const ProductList = () => {
  const {
    paginated_products: products,
    filtered_products,
    grid_view,
    pageItemsCount,
    currentPage,
    setCurrentPage,
  } = useFilterContext();
  if (filtered_products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }
  return (
    <>
      {grid_view ? (
        <GridView products={products}>product list</GridView>
      ) : (
        <ListView products={products} />
      )}
      {
        <Pagination
          itemsCount={filtered_products.length}
          pageItemsCount={pageItemsCount}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      }
    </>
  );
};

export default ProductList;
