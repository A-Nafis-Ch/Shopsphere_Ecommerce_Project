function ProductCard({ product }) {
    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold">
                {product.name}
            </h2>

            <p className="text-gray-600 mt-2">
                {product.description}
            </p>

            <p className="text-lg font-bold mt-3">
                ৳{product.price}
            </p>

            <p className="text-sm text-gray-500">
                Stock: {product.stock}
            </p>
        </div>
    );
}

export default ProductCard;