// import food from "../../assets/food.jpg"
// import food1 from "../../assets/food1.jpg"
// import food2 from "../../assets/food2.jpg"

import FoodCard from '../food/FoodCard';
import useFetch from './../../hooks/useFetch';

export default function Food() {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/foods?populate=*`
  );

  if (loading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    return <h2>something went wrong</h2>;
  }

  return (
    <>
      <div className="food-section wrapper">
        <h3>Latest Food blog Posts</h3>
        <div className="food-area">
          {/* <div className="food-part">
            <img src={food} alt="food-image" />
            <h2>Food Spaghetti Sauce With Ground Beef</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud ...
            </p>
          </div>
          <div className="food-part">
            <img src={food1} alt="food-image" />
            <h2>Honey Lime Rainbow Fruit Salad</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud ...
            </p>
          </div>
          <div className="food-part">
            <img src={food2} alt="food-image" />
            <h2>25 Sophisticated Drinks To Get You Feeling Fancy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud ...
            </p>
          </div> */}

          {data.map(food => (
           <FoodCard key={food.documentId} food={food} /> 
          
          ))}
        </div>
      </div>
    </>
  );
}
