import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded">
        Home
      </Link>
      <Link to="/about" className="px-4 py-2 bg-blue-500 text-white rounded">
        About
      </Link>
      <Link to="/products" className="px-4 py-2 bg-blue-500 text-white rounded">
        Products
      </Link>
    </div>
  )
}

export default Navbar