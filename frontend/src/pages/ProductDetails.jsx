import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/productService";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProduct = async () => {

            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (error) {
                setError("Product not found.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();

    }, [id]);

    if (loading) {
        return <p className="p-6">Loading...</p>;
    }

    if (error) {
        return <p className="p-6 text-red-500">{error}</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">

            <h1 className="text-3xl font-bold">
                {product.name}
            </h1>

            <p className="mt-4 text-gray-600">
                {product.description}
            </p>

            <p className="mt-4 text-2xl font-bold">
                ৳{product.price}
            </p>

            <p className="mt-2">
                Stock: {product.stock}
            </p>

            <button className="mt-6 bg-black text-white px-6 py-3 rounded">
                Add to Cart
            </button>

        </div>
    );
}

export default ProductDetails;