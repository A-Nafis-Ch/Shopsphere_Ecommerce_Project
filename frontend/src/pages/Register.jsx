import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
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

            await registerUser(formData);

            navigate("/login");

        } catch (error) {

            setError(
                error.response?.data?.detail ||
                "Registration failed."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="max-w-md mx-auto px-6 py-12">

            <h1 className="text-3xl font-bold mb-6">
                Create Account
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

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white p-3 rounded"
                >
                    {loading ? "Creating Account..." : "Register"}
                </button>

            </form>

        </div>
    );
}

export default Register;