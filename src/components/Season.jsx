import { Link } from 'react-router-dom'

function Season ({season}) {
  return (
    <div>
      <Link to={`/seasons/${season._id}`}>
      </Link>
    </div>
  )
}

export default Season