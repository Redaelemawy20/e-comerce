import React from "react";
import filtersStyle from "../../styles/components/_form.module.scss";
import { useFilterContext } from "../../context/filter_context";
import { getUniqueValues } from "../../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      category,
      company,
      color,

      shipping,
    },
    updateFilters,

    all_products,
    toggleFiltersControls,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <div className="side">
      <div>
        <button
          className="close-btn"
          type="button"
          onClick={toggleFiltersControls}
        >
          <FaTimes />
        </button>
        <form
          className={filtersStyle.filters}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={filtersStyle["form-control"]}>
            <h5>category</h5>
            <div className={filtersStyle.category}>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? filtersStyle.active : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div className={filtersStyle["form-control"]}>
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className={filtersStyle.company}
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={filtersStyle["form-control"]}>
            <h5>colors</h5>
            <div className={filtersStyle.colors}>
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all"
                          ? `${filtersStyle["all-btn"]} ${filtersStyle.active}`
                          : filtersStyle["all-btn"]
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c
                        ? `${filtersStyle["color-btn"]} ${filtersStyle.active}`
                        : filtersStyle["color-btn"]
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div> */}

          <div
            className={`${filtersStyle["form-control"]}  ${filtersStyle.shipping}`}
          >
            <label htmlFor="shipping"> free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filters;
