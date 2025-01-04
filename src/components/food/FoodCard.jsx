/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {Link} from "react-router-dom"


export default function FoodCard({ food }) {
  
  console.log(food?.image[0].url);
  return (
    <>
      <div className="food-part">
        <img src={`${import.meta.env.VITE_APP_URL}${food?.image[0].url} `} />
        <h2> {food.title} </h2>
        <h4> {food.slug} </h4>
        <p> {food.excerpt.slice(0, 120)}... </p>

        <Link to={`/food/${food.documentId}`}>
          {' '}
          <button className="btn-card"> Show More</button>{' '}
        </Link>
      </div>
    </>
  );
}

