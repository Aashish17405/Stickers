import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Custom Stickers
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-800">
              Shop
            </Link>
            <Link
              to="/customstickers"
              className="text-gray-600 hover:text-gray-800"
            >
              Create Custom
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
