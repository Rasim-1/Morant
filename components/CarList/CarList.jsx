import React from 'react';
import s from './CarList.module.scss';
import CarCard from '../Car/Car';

const CarList = ({
  filteredProducts,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div>
      <div className={s.list}>
        {filteredProducts.map((product) => (
          <CarCard key={product.id} car={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p>Машины, соответствующие вашим фильтрам, не найдены.</p>
        )}
      </div>


      {totalPages > 1 && (
        <div className={s.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              className={currentPage === page + 1 ? s.active : ''}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CarList;
