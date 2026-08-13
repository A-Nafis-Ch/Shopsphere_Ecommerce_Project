import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProducts = async () => {

            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, []);

    if (loading) {
        return <p className="p-6">Loading products...</p>;
    }

    if (error) {
        return <p className="p-6 text-red-500">{error}</p>;
    }

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </div>
    );
}

export default Products;