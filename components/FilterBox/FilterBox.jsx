import React, { useMemo } from "react";
import debounce from "lodash.debounce";
import s from "./FilterBox.module.scss";

const FilterBox = ({
  categories,
  selectedCategories,
  toggleCategory,
  seatOptions,
  selectedSeats,
  toggleSeats,
  maxPrice,
  setMaxPrice,
}) => {
  const debouncedSetMaxPrice = useMemo(() => debounce(setMaxPrice, 300), [setMaxPrice]);

  const handlePriceChange = (e) => {
    debouncedSetMaxPrice(Number(e.target.value));
  };

  return (
    <section className={s.filterSection}>
      <div className="container">
        <div className={s.filter}>
    
          <div className={s.filterWrap}>
            <div className={s.filterGroup}>
              <h4>Type</h4>
              {categories.map((category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  <p>{category}</p>
                </label>
              ))}
            </div>
          </div>

   
          <div className={s.filterGroup}>
            <h4>Capacity</h4>
            <div className={s.filterWrap2}>
              {seatOptions.map((seat) => (
                <label className={s.fill} key={seat}>
                  <input
                    type="checkbox"
                    checked={selectedSeats.includes(seat)}
                    onChange={() => toggleSeats(seat)}
                  />
                  <p>{seat}</p>
                </label>
              ))}
            </div>
          </div>

          <div className={s.filterGroup}>
            <h4>Price</h4>
            <input
              type="range"
              min="0"
              max="350"
              value={maxPrice}
              onChange={handlePriceChange}
            />
            <p>Max: ${maxPrice}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBox;
