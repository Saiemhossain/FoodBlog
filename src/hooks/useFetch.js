/* eslint-disable no-unused-vars */
/*
 *custom hook 
 */

import { useEffect, useState } from "react"
import axios from "axios"



export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url,  
          {
            headers: {
              Authorization:`bearer ${import.meta.env.VITE_APP_API_TOKEN}`
            }
          }
         )
        console.log(response.data.data);
        setData(response.data.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  },[url])

  return  {data, loading, error}
}










