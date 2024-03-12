import { useState, useEffect } from 'react';
import { getSeason } from "../services/seasons.js";
import { useParams, useNavigate } from "react-router-dom";

function SeasonDetail() {
  const [season, setSeason] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchSeason = async () => {
    const oneSeason = await getSeason(id)
    setSeason(oneSeason)
  }

  useEffect(() => {
    fetchSeason()
  }, [])

  
  return (
    <div>
      <h1>Season: {season.season}</h1> 
      <h2>Episodes: {season.episodes}</h2>
      <h3>Overview: {season.overview}</h3>
    </div>
  )
}

export default SeasonDetail