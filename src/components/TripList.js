import { useState } from "react"
import { useFetch } from '../hooks/useFetch'

// styles
import './TripList.css'

export const TripList = () => {
  // const [Trips, setTrips] = useState([])
  const [url,setUrl] = useState('http://localhost:8000/trips')
  const {data, isPending, error} = useFetch(url, { type: 'GET' })
  //  {data: trips} == changes name on the data to anything

  // const fetchTrips = useCallback (async () => {
  //   const response = await fetch(url)
  //   const json = await response.json()
  //   setTrips(json)
  // }, [url])

  // useEffect(() => {
  //   fetchTrips()
  //   // fetch(url)
  //   // .then(res => res.json())
  //   // .then(json => setTrips(json))
  // }, [fetchTrips])

  // console.log(Trips)


 
  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      { isPending && <div>Loading trips...</div> }
      {error && <div>{error}</div> }
      <ul>
        {data && data.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:8000/trips?loc=europe')}>
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:8000/trips')}>
          All Trips
        </button>
      </div>
    </div>
  )
}
