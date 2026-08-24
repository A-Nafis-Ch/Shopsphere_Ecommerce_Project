import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-semibold">{product.name}</h2>

      <p className="text-gray-600 mt-2">{product.description}</p>

      <p className="text-lg font-bold mt-3">৳{product.price}</p>

      <p className="text-sm text-gray-500">Stock: {product.stock}</p>

      <Link
        to={`/products/${product.id}`}
        className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
