/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import FoodCard from '../components/Food/foodCard';
import useFetch from '../hooks/useFetch';

export default function Food() {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/foods?populate=*`
  );
  if (loading) {
    return <h2>loading</h2>;
  }
  if (error) {
    return <h2>something went wrong</h2>;
  }
  return (
    <div className="food-section wrapper">
      <h3>Latest Food blog Posts</h3>
      <div className="food-area">
        {data?.map(food => (
          <FoodCard key={food.documentId} food={food} />
        ))}
      </div>
    </div>
  );
}
