import Footer from "../Footer";
import Navbar from "../Navbar";

function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default PageLayout;
