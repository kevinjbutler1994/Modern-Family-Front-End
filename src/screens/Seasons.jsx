import { useState, useEffect } from 'react';
import { getSeasons } from "../services/seasons.js";
import Season from '../components/Season.jsx';

function Seasons () {
  const [seasons, setSeasons] = useState([])

  async function fetchSeasons() {
    const allSeasons = await getSeaons()
    setSeasons(allSeasons)
  }

  useEffect(() => {
    fetchSeasons()
  }, [])

  return (
    <div>
      <h1>All the Seasons!</h1>
      <div className="seasons-container">
        {
          seasons?.map((season) => (
            <Season season={season} key={season._id} />
          ))
        }
      </div>
    </div>
  )
}

export default Seasons