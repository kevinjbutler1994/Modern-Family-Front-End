import { Link } from 'react-router-dom'

function Quote ({quote}) {
  return (
    <div>
      <Link to={`/quotes/${quote._id}`}>
      </Link>
    </div>
  )
}

export default Quote