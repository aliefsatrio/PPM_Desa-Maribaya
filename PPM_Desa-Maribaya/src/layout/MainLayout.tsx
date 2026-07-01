import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <footer>
                <div className="bg-gray-800 text-white py-4 text-center">
                    &copy; 2026 Desa Maribaya. PPM Universitas Harkat Negeri.
                </div>
            </footer>
        </div>
    );
}