import { useState, useEffect } from 'react';
import { getSeasons } from "../services/seasons.js";
import Season from '../components/Season.jsx';
import { parseInt } from 'lodash';

function Seasons () {
  const [seasons, setSeasons] = useState([])

  async function fetchSeasons() {
    const allSeasons = await getSeasons()
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
            <Season season={season} key={season.season}  />
          ))
          .sort((a, b) => parseInt(a.key) > parseInt(b.key) ? 1 : -1)
        }
      </div>
    </div>


  )
}

export default Seasons