
import PricingCard from "../components/service/PricingCard"
import useFetch from "../hooks/useFetch"

export default function Service() {

  

  const { data, loading, error } = useFetch(`${import.meta.env.VITE_APP_URL}/api/services?populate=*`)
  
  if (loading) {
    return <h2>loading</h2>
  }
  if (error) {
    return <h2>something went wrong</h2>
  }
  return (
    <div className="service-about">
      <h1 className="text-center text-2xl text-indigo-700 font-bold">Explore Our Services</h1>
      <div className="service-area">
       
        {
          data ? data.map(service => <PricingCard key={service.documentId} service={service} /> ) : <h2>no service available</h2>
        }
      </div>
  </div>
  )
}
