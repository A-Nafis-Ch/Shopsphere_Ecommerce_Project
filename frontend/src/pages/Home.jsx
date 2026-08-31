import { Link } from "react-router-dom";

function Home() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">

            <h1 className="text-5xl font-bold">
                Welcome to ShopSphere
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
                Find laptops, accessories and electronics
                at great prices.
            </p>

            <Link
                to="/products"
                className="inline-block mt-8 bg-black text-white px-6 py-3 rounded"
            >
                Shop Now
            </Link>

        </section>
    );
}

export default Home;