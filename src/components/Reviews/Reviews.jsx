import React, { useEffect, useState } from "react";
import s from './Reviews.module.scss';
import reviews from '/public/comments.json'; 

import AOS from "aos";
import "aos/dist/aos.css"; 

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(2);

  const showMoreReviews = () => {
    setVisibleReviews((prev) => prev + 2); 
  };

  useEffect(() => {
    AOS.init({ 
      duration: 500,
      once: true,
    }); 
  }, []);

  return (
    <div className={s.reviewsSection}>
      <div className="container">
        <div className={s.header}>
          <h2>Reviews</h2>
          <span className={s.reviewsCount}>{reviews.length}</span>
        </div>
        <div className={s.reviewsList}>
          {reviews.slice(0, visibleReviews).map((review) => (
            <div key={review.id} className={s.reviewCard} data-aos="flip-up">
              <img
                src={review.image}
                alt={review.name}
                className={s.profileImage}
              />
              <div className={s.reviewsContent}>
                <h3 className={s.name}>{review.name}</h3>
                <p className={s.position}>{review.position}</p>
                <p className={s.feedback}>{review.feedback}</p>
                <div className={s.footer}>
                  <span className={s.date}>{review.date}</span>
                  <div className={s.rating}>
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleReviews < reviews.length && (
          <button className={s.showAll} onClick={showMoreReviews}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;
