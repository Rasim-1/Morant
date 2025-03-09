import React, { useState, useMemo } from 'react';
import Products from '../../db.json';
import s from './Catalog.module.scss';
import CarList from '../CarList/CarList';
import FilterBox from '../FilterBox/FilterBox';

const ITEMS_PER_PAGE = 6;

const Catalog = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['Sport', 'SUV', 'Sedan', 'Hatchback'];
  const seatOptions = ['2 Person', '4 Person', '6 Person', '8 Person'];

  const filteredProducts = useMemo(() => {
    return Products.cars.filter((product) => {
      const productPrice = parseFloat(product.price.replace('$', ''));
      const productCategory = product.category.trim();
      const productSeats = product.seats.trim();

      return (
        (selectedCategories.length === 0 ||
          selectedCategories.includes(productCategory)) &&
        (selectedSeats.length === 0 || selectedSeats.includes(productSeats)) &&
        productPrice <= maxPrice
      );
    });
  }, [selectedCategories, selectedSeats, maxPrice]);


  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);


  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const toggleSeats = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
    setCurrentPage(1);
  };

  return (
    <section>
      <div className="container">
        <div className={s.wrapper}>
          <FilterBox
            categories={categories}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            seatOptions={seatOptions}
            selectedSeats={selectedSeats}
            toggleSeats={toggleSeats}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
          <CarList
            filteredProducts={paginatedProducts}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
