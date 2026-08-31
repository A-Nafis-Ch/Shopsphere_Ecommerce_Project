import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                <Link
                    to="/"
                    className="text-2xl font-bold"
                >
                    ShopSphere
                </Link>

                <div className="flex gap-6">
                    <Link to="/">Home</Link>

                    <Link to="/products">
                        Products
                    </Link>

                    <Link to="/login">
                        Login
                    </Link>

                    <Link to="/register">
                        Register
                    </Link>

                    <Link to="/cart">
                        Cart
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;