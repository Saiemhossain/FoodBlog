/* eslint-disable no-unused-vars */
import { useParams } from "react-router"
import useFetch from "../../hooks/useFetch";

export default function SingleFoodPage() {

  const { id } = useParams();
  console.log(id);

  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/foods/${id}?populate=*`
  );

  if (loading) {
    return <h2>loading</h2>
  }
  if (error) {
    return <h2>something went wrong</h2>
  }
  return (
    <div>
      {
        data &&
        <div className="single-card" >
            <img src={`${import.meta.env.VITE_APP_URL}${data.image[0].url}`} />
            <h2> {data.title} </h2>
            <p>{ data.excerpt.slice(0,140)}...</p>
        </div>
     }
    </div>
  )
}
