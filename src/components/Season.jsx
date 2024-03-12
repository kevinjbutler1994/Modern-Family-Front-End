import { Link } from 'react-router-dom'

function Season ({season}) {
  return (
    <div>
      <Link to={`/seasons/${season._id}`}>
        {season.season}
      </Link>
    </div>
  )
}

export default Season