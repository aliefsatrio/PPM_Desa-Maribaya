import Navbar from "../components/ui/Navbar";

import Hero from "../components/sections/Hero";
import Tentang from "../components/sections/Tentang";
import Sambutan from "../components/sections/Sambutan";
import Peta from "../components/sections/Peta";
import Statistik from "../components/sections/Statistik";
import Administrasi from "../components/sections/Administrasi";
import APB from "../components/sections/APB";
import Berita from "../components/sections/Berita";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Tentang />
            <Sambutan />
            <Peta />
            <Statistik />
            <Administrasi />
            <APB />
            <Berita />
        </>
    );
};

export default Home;