import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setLoading(true);

        try {

            const data = await loginUser(formData);

            // Save JWT tokens
            localStorage.setItem(
                "access_token",
                data.access
            );

            localStorage.setItem(
                "refresh_token",
                data.refresh
            );

            // Go to products after login
            navigate("/products");

        } catch (error) {

            console.log(
                "Login error:",
                error.response?.data
            );

            setError(
                "Invalid username or password."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="max-w-md mx-auto px-6 py-12">

            <h1 className="text-3xl font-bold mb-6">
                Login
            </h1>

            {error && (
                <p className="text-red-500 mb-4">
                    {error}
                </p>
            )}

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <div>
                    <label className="block mb-1">
                        Username
                    </label>

                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                        className="w-full border p-3 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        className="w-full border p-3 rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white p-3 rounded"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

            </form>

        </div>
    );
}

export default Login;