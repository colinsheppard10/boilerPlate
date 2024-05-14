import axios from "axios"
import { useEffect, useState } from "react"

const useFetchData = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.post('/public/test')
      setData(response.data)
    } catch (error) {
    }
  }
  useEffect(() => {
    fetchData();
  },[])

  return {data}
}

export default useFetchData;