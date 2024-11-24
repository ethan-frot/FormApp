import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-purple-400 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex justify-between space-x-4">
                        <Link to="/" className="text-amber-50 hover:text-gray-300">
                            Home
                        </Link>
                        <Link to="/admin" className="text-amber-50 hover:text-gray-300">
                            Admin
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
