import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
      <div className="error">
          <h1>404</h1>
          <p>Page Not Found</p>
          <Link to="/">Back to home</Link>
    </div>
  )
}
export default ErrorPage