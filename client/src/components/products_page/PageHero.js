import React from "react";
import formStyle from "../../styles/components/_form.module.scss";
import { useFilterContext } from "../../context/filter_context";
import { AiFillFilter } from "react-icons/ai";

const PageHero = () => {
  const {
    toggleFiltersControls,
    clearFilters,
    updateFilters,
    filters: { text },
  } = useFilterContext();

  return (
    <section className={formStyle.form}>
      <div className={formStyle["section-center"]}>
        <h4>
          <AiFillFilter onClick={toggleFiltersControls} />
        </h4>
        <input
          className={formStyle.search}
          type="text"
          name="text"
          value={text}
          onChange={updateFilters}
          placeholder="What are you looking for?"
        />{" "}
        <button
          type="button"
          className={` ${formStyle["clear-btn"]} btn--accent`}
          onClick={clearFilters}
        >
          {" "}
          clear filters
        </button>{" "}
      </div>
    </section>
  );
};

export default PageHero;
