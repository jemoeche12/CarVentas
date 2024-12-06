import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/car.png";

const NavBar = () => {
  return (
    <>
      <nav className="bg-blue-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img className="w-12" src={logo} alt="CarVentas Logo" />
            <span className="text-xl font-bold">CarVentas</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              to="/category/vehiculo"
              className="hover:text-gray-300 transition-colors">
              Vehículos
            </Link>
            <Link
              to="/category/moto"
              className="hover:text-gray-300 transition-colors">
              Motos
            </Link>
            <Link
              to="/category/accesorios"
              className="hover:text-gray-300 transition-colors">
              Accesorios
            </Link>
          </div>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;