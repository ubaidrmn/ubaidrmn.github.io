import PageLayout from "../PageLayout";
import ContentSection from "./ContentSection";
import HeroSection from "./HeroSection";

function HomePage() {
    return (
        <PageLayout>
            <HeroSection />
            <ContentSection />
        </PageLayout>
    );
}

export default HomePage;
