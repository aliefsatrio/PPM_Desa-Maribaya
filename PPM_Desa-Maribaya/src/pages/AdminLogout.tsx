import { useNavigate } from "react-router-dom";

export default function adminLogout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="pt-32 text-center">
            <h1 className="text-3xl font-bold">
                Akun Admin      </h1>

            <button
                onClick={handleLogout}
                className="mt-6 rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700"
            >
                Logout
            </button>
        </div>
    );
}