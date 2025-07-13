import SearchIcon from "../../Icons/SearchIcon";
import CartIcon from "../../Icons/CartIcon";
import ManIcon from "../../Icons/ManIcon";
import NavItems from "./NavItems";
import SearchBar from "../Header/SearchBar";
const Header = () => {
  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          LWS.SHOP
        </a>

        <nav className="hidden md:flex space-x-6">
          <NavItems />
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <SearchBar />
            <span className="absolute right-3 top-2">
              <SearchIcon />
            </span>
          </div>

          <a href="#" className="hover:text-gray-500 transition-colors">
            <CartIcon />
          </a>

          <a href="#" className="hover:text-gray-500 transition-colors">
            <ManIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
